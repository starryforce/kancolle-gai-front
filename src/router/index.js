import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);
const router = new Router(routes);


// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {

//   } else {
//     next();
//   }
// });

export default router;
