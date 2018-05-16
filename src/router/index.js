import Vue from 'vue';
import Router from 'vue-router';
import AppHome from '@/components/AppHome';
import AppRegister from '@/components/AppRegister';
import AppLogin from '@/components/AppLogin';
import AppWebsite from '@/components/AppWebsite';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: AppHome,
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
    {
      path: '/websites',
      name: 'Website',
      component: AppWebsite
    }
  ],
});
