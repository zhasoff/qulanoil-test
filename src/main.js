import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import "swiper/css";
import "swiper/swiper.min.css";
import "swiper/scss/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import axios from 'axios'

axios.defaults.baseURL = 'https://qazgaz-back.test-nomad.kz/api/';


createApp(App).use(store).use(router).mount('#app')
