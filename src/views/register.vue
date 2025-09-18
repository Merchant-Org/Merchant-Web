<template>
  <div class="auth-page">
    <!-- Left side text -->
    <div class="left-side">
      <h1>Join <span class="pname">Merchant</span> Today</h1>
      <p>Start your journey with us.</p>
    </div>

    <!-- Right side register card -->
    <div class="right-side">
      <div class="auth-card">
        <h2>Register</h2>

        <!-- Progress Bar -->
        <div class="progress">
          <div class="bar" :style="{ width: ((currentStep + 1) / steps.length * 100) + '%' }"></div>
        </div>

        <!-- Steps Labels -->
        <div class="steps">
          <div v-for="(step, index) in steps" :key="index" :class="{ current: currentStep >= index }">
            {{ index + 1 }}. {{ step }}
          </div>
        </div>

        <!-- Step Content -->
        <div class="step-content">
          <div v-if="currentStep === 0">
            <input type="text" placeholder="Full Name" v-model="fullName" required />
          </div>
          <div v-if="currentStep === 1">
            <input type="email" placeholder="Email" v-model="email" required />
          </div>
          <div v-if="currentStep === 2">
            <input type="password" placeholder="Password" v-model="password" required />
          </div>
          <div v-if="currentStep === 3">
            <p>Review your details:</p>
            <ul>
              <li>Name: {{ fullName }}</li>
              <li>Email: {{ email }}</li>
              <li>Password: ******</li>
            </ul>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="navigation">
          <button @click="prevStep" :disabled="currentStep === 0">Back</button>
          <button @click="nextStep">{{ currentStep === steps.length - 1 ? 'Finish' : 'Next' }}</button>
        </div>

        <p class="switch-text">
          Already have an account?
          <router-link to="/login" class="link">Login</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const steps = ['Personal Info', 'Account Details', 'Security', 'Confirm']
const currentStep = ref(0)

const fullName = ref('')
const email = ref('')
const password = ref('')

function nextStep() {
  if (currentStep.value < steps.length - 1) {
    currentStep.value++
  } else {
    alert(`Registration submitted:\nName: ${fullName.value}\nEmail: ${email.value}`)
  }
}

function prevStep() {
  if (currentStep.value > 0) currentStep.value--
}
</script>
