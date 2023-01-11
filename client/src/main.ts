import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createHead } from '@vueuse/head';
import { LoadingPlugin } from 'vue-loading-overlay';
import './assets/index.postcss';
import './assets/css/index.css';
import 'vue-loading-overlay/dist/css/index.css';
const head = createHead();
const app = createApp(App);
import store from './store'

app.use(store);
app.use(router);
app.use(head);
app.use(LoadingPlugin);
app.mount('#app');
