import videojs from 'video.js';
import qualityLevels from 'videojs-contrib-quality-levels';
import qualitySelector from 'videojs-hls-quality-selector';
import { createApp } from 'vue';
import App from './App.vue';
import { i18n } from './i18n';
import './registerServiceWorker';
import router from './router';
import api from './services/api';
import ws from './services/ws';
import store from './store';

const app = createApp(App);
app.use(store).use(router).use(i18n).provide('$api', api).provide('$ws', ws);

if (!videojs.getPlugin('qualityLevels')) {
	videojs.registerPlugin('qualityLevels', qualityLevels);
}
videojs.registerPlugin('hlsQualitySelector', qualitySelector);

app.mount('#app');
