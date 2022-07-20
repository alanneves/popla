import { createRouter, createWebHistory } from 'vue-router';

const NewGamePage = () => import('@/pages/NewGame.vue');
const NotFoundPage = () => import('@/pages/NotFound.vue');

const routes = [
  {
    path: '/',
    redirect: '/new-game'
  },
  {
    path: '/new-game',
    name: 'new-game',
    component: NewGamePage,
    meta: {
      title: 'Planning Poker | Create Game'
    }
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFoundPage,
    meta: {
      title: 'Planning Poker | Not Found'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
