import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/auth.css'
 

createApp(App)
  .use(router)   // use the router
  .mount('#app')
