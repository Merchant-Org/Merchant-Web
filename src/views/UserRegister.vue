<template>
  <div class="auth-page">
    <div class="left-side">
      <h1>Join <span class="pname">Merchant</span> Today</h1>
      <p>Start your journey with us.</p>
    </div>

    <div class="right-side">
      <div class="auth-card">
        <h2>Client Sign Up</h2>
        <form @submit.prevent="handleRegister" class="auth-form register-form">
          <div class="form-row">
            <div class="form-group">
              <label for="Fname">First Name</label>
              <input id="Fname" v-model="form.firstName" type="text" required />
            </div>

            <div class="form-group">
              <label for="Lname">Last Name</label>
              <input id="Lname" v-model="form.lastName" type="text" required />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="email">Email Address</label>
              <input id="email" v-model="form.email" type="email" required />
            </div>

            <div class="form-group">
              <label for="pnumber">Phone Number</label>
              <input id="pnumber" v-model="form.phone" type="tel" required />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="password">Password</label>
              <input id="password" v-model="form.password" type="password" required />
            </div>

            <div class="form-group">
              <label for="cpassword">Confirm Password</label>
              <input id="cpassword" v-model="form.confirmPassword" type="password" required />
            </div>
          </div>

          <div class="form-options">
            <label class="check">
              <input type="checkbox" v-model="form.terms" />
              I have read and agree to the
              <router-link to="/terms" class="link">Terms of Service</router-link>
            </label>
          </div>

          <button type="submit" class="primary-btn">Sign Up</button>
        </form>

        <p class="switch-text">
          Already have an account?
          <router-link to="/login" class="link">Login</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue"

const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  terms: false,
})

const handleRegister = () => {
  if (form.password !== form.confirmPassword) {
    alert("Passwords do not match.")
    return
  }

  if (!form.terms) {
    alert("You must agree to the Terms of Service before registering.")
    return
  }

  console.log("Registering user:", form)

  // Reset
  form.firstName = ""
  form.lastName = ""
  form.email = ""
  form.phone = ""
  form.password = ""
  form.confirmPassword = ""
  form.terms = false
}
</script>