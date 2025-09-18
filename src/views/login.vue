<template>
  <div class="auth-page">
    <div class="left-side">
      <h1>Welcome Back to <span class="pname">Merchant</span></h1>
      <p>Your account, your control</p>
    </div>

    <div class="right-side">
      <div class="auth-card">
        <h2>Client Login</h2>
        <form @submit.prevent="handleLogin" class="auth-form">
          <div class="form-group">
            <label for="email">Email</label>
            <input id="email" type="email" placeholder="Enter your email" v-model="login.email" required />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter your password" v-model="login.password" required />
          </div>
          <div class="form-options">
            <label><input type="checkbox" v-model="rememberMe" /> Remember me</label>
            <router-link to="/forgot" class="forgot-link">Forgot password?</router-link>
          </div>
          <button type="submit" class="primary-btn">Login</button>
        </form>
        <p class="switch-text">
          Not a member yet? 
          <router-link to="/register" class="link">Register here</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const login = ref({ email: '', password: '' })
const rememberMe = ref(false)
function handleLogin() {
  alert(`Login submitted:\nEmail: ${login.value.email}\nPassword: ${login.value.password}\nRemember: ${rememberMe.value}`)
}
</script>