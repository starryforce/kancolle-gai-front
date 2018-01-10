import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
import store from '../store';

Vue.use(Router);
const router = new Router(routes);


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkLogin').then(() => {
      const {
        isLogin,
      } = store.state;
      if (!isLogin && to !== from) {
        next({
          path: '/login',
          query: {
            redirect: to.fullPath,
          },
        });
      } else {
        next();
      }
    });
  } else {
    next();
  }
});

export default router;
