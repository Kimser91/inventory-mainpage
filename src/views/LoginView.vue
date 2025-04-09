<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4 shadow-sm" style="max-width: 400px; width: 100%;">
      <h2 class="text-center mb-4">Logg inn</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label class="form-label">E-post</label>
          <input v-model="email" type="email" class="form-control" required />
        </div>
        <div class="mb-3">
          <label class="form-label">Passord</label>
          <input v-model="password" type="password" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-primary w-100">Logg inn</button>
        <p v-if="errorMessage" class="text-danger text-center mt-3">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { login } from '../services/authServices';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const errorMessage = ref('');

    const handleLogin = async () => {
    try {
        const response = await login({ email: email.value, password: password.value });
       
        const user = response.data.user;
        console.log('user', user)
      
        if (user.role === 'Superadmin' || user.role === 'Hovedadmin' || user.role === 'Admin') {
            const token = response.data.token;
            window.location.href = `https://admin.inventoryadministrator.com?token=${token}`;
           

        } else {
          const token = response.data.token;
             window.location.href = `https://users.inventoryadministrator.com?token=${token}`;
}

    } catch (error) {
        errorMessage.value = 'Feil e-post eller passord';
    }
};


    return { email, password, errorMessage, handleLogin };
  }
};
</script>