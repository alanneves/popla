import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createHead } from '@vueuse/head';
import './assets/index.postcss';
import './assets/css/index.css';

const head = createHead();
const app = createApp(App);

app.use(router);
app.use(head);

app.mount('#app');
