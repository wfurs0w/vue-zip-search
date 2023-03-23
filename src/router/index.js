import { createRouter, createWebHistory } from 'vue-router';
import SearchForm from '../components/SearchForm.vue';
import SearchResults from '../components/SearchResults.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SearchForm,
    },
    {
      path: '/results/:zip',
      name: 'results',
      component: SearchResults,
    },
  ],
});

export default router;

