<template>
    <div class="d-flex flex-column align-items-center justify-content-center bg-light p-4" style="min-height: 85vh;">
      <div class="bg-white rounded-4 shadow p-5 w-100 text-center" style="max-width: 700px;">
        <h1 class="display-5 fw-bold mb-4">Welcome to Inventory Administrator</h1>
        <p class="lead text-muted mb-5">
          Manage your inventory with ease! Keep full control over stock in service vehicles, warehouses, and other storage locations.
          Quickly scan items in and out using your phone or a QR code scanner, and generate labels with built-in label printing.
          Simple. Efficient. Reliable.
        </p>
  
        <button
          @click="goToRegister"
          class="btn btn-secondary btn-lg mb-5"
        >
          Get Started
        </button>
  
        <div class="row text-center mt-4">
          <div class="col-md-4 mb-4">
            <h3 class="h5 fw-bold">Scan</h3>
            <p class="text-muted">Easily scan items in and out using your phone or a QR scanner.</p>
          </div>
  
          <div class="col-md-4 mb-4">
            <h3 class="h5 fw-bold">Track</h3>
            <p class="text-muted">Keep full control over your inventory across all locations.</p>
          </div>
  
          <div class="col-md-4 mb-4">
            <h3 class="h5 fw-bold">Label</h3>
            <p class="text-muted">Print professional QR code labels to organize and update items quickly.</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MainPage",
    methods: {
      goToRegister() {
        this.$router.push("/register");
      }
    }
  };
  </script>
  
  <style scoped>
  </style>