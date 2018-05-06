import Vue from 'vue';
import Router from 'vue-router';
import AppHero from '@/components/AppHero';
import AppRegister from '@/components/AppRegister';
import AppLogin from '@/components/AppLogin';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: AppHero,
    },
    {
      path: '/register',
      name: 'Register',
      component: AppRegister,
    },
    {
      path: '/login',
      name: 'Login',
      component: AppLogin,
    },
  ],
});
