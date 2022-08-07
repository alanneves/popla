import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createHead } from '@vueuse/head';
import { createPinia } from 'pinia';
import './assets/index.postcss';
import './assets/css/index.css';

const head = createHead();
const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(head);
app.use(pinia);
app.mount('#app');
