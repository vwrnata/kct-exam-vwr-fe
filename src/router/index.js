import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue';
import Breeds from '../pages/breeds/BreedsList.vue';
import Favorites from '../pages/favorites/FavoritesList.vue';

import NotFound from '../pages/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/breeds',
    name: 'Breeds',
    component: Breeds
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  },
  { path: '/:notFound(.*)', component: NotFound }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
