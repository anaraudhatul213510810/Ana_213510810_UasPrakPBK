import { createRouter, createWebHistory } from 'vue-router';

import Lokasi from '../components/WidLokasi.vue';
import Cuaca from '../components/WidCuaca.vue';
import Stopwatch from '../components/WidStopwatch.vue';
import Photo from '../components/WidPhoto.vue';

const routes = [
  { path: '/', component: Lokasi },
  { path: '/cuaca', component: Cuaca },
  { path: '/stopwatch', component: Stopwatch},
  { path: '/photo', component: Photo},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;