import Vue from 'vue';
import Router from 'vue-router';

import Login from '../components/Login';
import store from '../store';

const requireAuthenticated = (to, from, next) => {
  store.dispatch('auth/initialize')
    .then(() => {
      if (!store.getters['auth/isAuthenticated']) {
        next('/login');
      } else {
        next();
      }
    });
};

const requireUnauthenticated = (to, from, next) => {
  store.dispatch('auth/initialize')
    .then(() => {
      if (store.getters['auth/isAuthenticated']) {
        next('/home');
      } else {
        next();
      }
    });
};

const redirectLogout = (to, from, next) => {
  store.dispatch('auth/logout')
    .then(() => next('/login'));
};

Vue.use(Router);

export default new Router({
  saveScrollPosition: true,
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Login,
    },
    {
      path: '/login',
      component: Login,
      beforeEnter: requireUnauthenticated,
    },
    {
      path: '/logout',
      beforeEnter: redirectLogout,
    },
    {
      path: '*',
      component: Login,
    },
  ],
});
