<template>
  <div class="auth-page">
    <!-- Left side text -->
    <div class="left-side">
      <h1>Create Your  <span class="pname">Store</span>Today</h1>
      <p>Set up your store and start selling.</p>
    </div>

    <!-- Right side card -->
    <div class="right-side">
      <div class="auth-card">
        <h2>Create Store</h2>

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
          <!-- Step 1: Store Info -->
          <div v-if="currentStep === 0">
            <input type="text" placeholder="Store Name" v-model="storeName" required />
            <input type="text" placeholder="Owner Name" v-model="ownerName" required />
          </div>

          <!-- Step 2: Contact Info -->
          <div v-if="currentStep === 1">
            <input type="email" placeholder="Email" v-model="email" required />
            <div class="phone-input">
              <span class="country-code">+218</span>
              <input type="tel" placeholder="Phone Number" v-model="phone" required />
            </div>
          </div>

          <!-- Step 3: Store Details -->
          <div v-if="currentStep === 2">
            <input type="text" placeholder="Address" v-model="address" required />
            <input type="url" placeholder="Website (optional)" v-model="website" />
          </div>

          <!-- Step 4: Review -->
          <div v-if="currentStep === 3">
            <p>Review your store details:</p>
            <ul>
              <li>Store Name: {{ storeName }}</li>
              <li>Owner: {{ ownerName }}</li>
              <li>Email: {{ email }}</li>
              <li>Phone: {{ phone }}</li>
              <li>Address: {{ address }}</li>
              <li>Website: {{ website || 'N/A' }}</li>
            </ul>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="navigation">
          <button @click="prevStep" :disabled="currentStep === 0">Back</button>
          <button @click="nextStep">{{ currentStep === steps.length - 1 ? 'Create Store' : 'Next' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'

const steps = ['Store Info', 'Contact Info', 'Store Details', 'Review']
const currentStep = ref(0)

const storeName = ref('')
const ownerName = ref('')
const email = ref('')
const phone = ref('')
const address = ref('')
const website = ref('')

function nextStep() {
  if (currentStep.value < steps.length - 1) {
    currentStep.value++
  } else {
    alert(`Store Created:\nStore: ${storeName.value}\nOwner: ${ownerName.value}\nEmail: ${email.value}\nPhone: ${phone.value}`)
    
  }
}

function prevStep() {
  if (currentStep.value > 0) currentStep.value--
}
</script>

