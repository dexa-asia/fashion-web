import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.css'
import './assets/css/site.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'


const app = createApp(App)
axios.defaults.baseURL = 'http://localhost:1234'
//axios.defaults.baseURL = 'https://web.vipastore.com';
app.config.globalProperties.$axios = axios
app.use(router)
app.mount('#app')