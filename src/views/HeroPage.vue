<template>
  <div class="hero-main">
    <!-- Top Bar -->
    <header :class="['top-bar', { hidden: isHidden }]">
      <p class="title">Merchant</p>
      <router-link to="/login" class="top-button">Login</router-link>
      <router-link to="/UserRegister" class="top-button">Register</router-link>
    </header>

    <!-- Hero Overlay -->
    <div class="hero-overlay">
      <div class="hero-content">

        <!-- About Section -->
        <section class="words">
          <div class="words-grid">
            <div>Register.</div>
            <div class="highlight">Sell.</div>
            <div>Grow.</div>
            <p class="par">Grow your store with Merchant: simple sales, inventory, and analytics tools.</p>
          </div>
        </section>
        <!-- Create Store Button -->
        <div class="hero-buttons">
          <button>Create Store</button>
          <button>Explore Our Products</button>
        </div>
        <!-- Features Section -->
        <section class="features">
          <h2>Big Services That Meet Your Business Needs</h2>
          <P class="desc">With our selling system and smart tools, you will find a platform that covers 100%<br>of your business needs
             from sales to management.</P>
          <div class="features-grid">
            <div class="feature">
              <img src="/public/icons/inventory_2.svg" alt="Store Icon" class="icon">
              <h3> Inventory Management</h3>
              <p>Track stock levels and never run out of products again.</p>
            </div>
            
            <div class="feature">
              <img src="/public/icons/shopping_cart.svg" alt="Store Icon" class="icon">
              <h3> Easy Checkout</h3>
              <p>Provide fast and smooth checkout for your customers.</p>
            </div>
            
            <div class="feature">
              <img src="/public/icons/bar_chart.svg" alt="Store Icon" class="icon">
              <h3>Sales Reports</h3>
              <p>See clear analytics to grow your business faster.</p>
            </div>
            
            <div class="feature">
              <img src="/public/icons/store.svg" alt="Store Icon" class="icon">
              <h3> Multi-Store Support</h3>
              <p>Manage multiple stores from one account with ease.</p>
            </div>
          </div>
        </section>

        <!-- Products Section -->
        <section class="products">
          <h2 class="products-heading">Our Plans</h2>
          <p class="desc">
            Flexible plans designed for every business size 
            Start <span class="small-word">small</span>, grow 
            <span class="big-word">big</span>, and manage your store with ease.
          </p>
          <div class="products-grid">
            <div class="card">
              <img src="/public/icons/computer.svg" alt="Store Icon" class="icon">
              <h3>Basic Plan</h3>
              <p>Perfect for small shops just starting out.</p>
              <button class="choose-plan">Choose Plan</button>
            </div>
            <div class="card">
              <img src="/public/icons/computer.svg" alt="Store Icon" class="icon">
              <h3>Enterprise Plan</h3>
              <p>Advanced tools for growing businesses.</p>
              <button class="choose-plan">Choose Plan</button>
            </div>
            <div class="card">
              <img src="/public/icons/computer.svg" alt="Store Icon" class="icon">
              <h3>Pro Plan</h3>
              <p>Custom solutions for large-scale stores.</p>
              <button class="choose-plan">Choose Plan</button>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="footer">
          <p>© 2025 Merchant. All rights reserved.</p>
          <nav>
            <router-link to="/about">About</router-link> |
            <router-link to="/contact">Contact</router-link> |
            <router-link to="/privacy">Privacy Policy</router-link>
          </nav>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isHidden = ref(false)
let lastScroll = 0

function handleScroll() {
  const currentScroll = window.scrollY
  if (currentScroll > lastScroll && currentScroll > 50) {
    isHidden.value = true // hide on scroll down
  } else {
    isHidden.value = false // show on scroll up
  }
  lastScroll = currentScroll
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>