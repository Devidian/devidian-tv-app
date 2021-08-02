import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import api from './services/api';
import ws from './services/ws';
import store from './store';

const app = createApp(App);
app.use(store).use(router).provide('$api', api).provide('$ws', ws);

app.mount('#app');
