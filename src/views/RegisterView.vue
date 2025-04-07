<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4 shadow-sm" style="max-width: 400px; width: 100%;">
      <h2 class="text-center mb-4">Registrer deg</h2>
      <form @submit.prevent="handleRegister">
        <div class="mb-3">
          <label class="form-label">Brukernavn</label>
          <input v-model="username" type="text" class="form-control" required />
        </div>
        <div class="mb-3">
          <label class="form-label">Frima navn</label>
          <input v-model="companyName" type="text" class="form-control" required />
        </div>
        <div class="mb-3">
          <label class="form-label">E-post</label>
          <input v-model="email" type="email" class="form-control" required />
        </div>
        <div class="mb-3">
          <label class="form-label">Passord</label>
          <input v-model="password" type="password" class="form-control" required />
        </div>
 
        <button type="submit" class="btn btn-success w-100">Registrer</button>
        <p v-if="errorMessage" class="text-danger text-center mt-3">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { register } from '../services/authServices';

export default {
  setup() {
    const username = ref('');
    const email = ref('');
    const password = ref('');
    const companyName = ref('');
    const errorMessage = ref('');
    console.log("compay name",companyName)
    const handleRegister = async () => {
      try {
        await register({ username: username.value, email: email.value, password: password.value, companyName: companyName.value });
        alert('Registrering vellykket! Gå til innlogging.');
        window.location.href = '/login';
      } catch (error) {
        errorMessage.value = 'Feil ved registrering';
      }
    };
    console.log("compay name",companyName)
    return { username, email, password, companyName, errorMessage, handleRegister };
  }
};
</script>
