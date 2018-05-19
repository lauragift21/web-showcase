import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Website from '@/views/Website';
import AppRegister from '@/components/AppRegister';
import AppLogin from '@/components/AppLogin';
import AppDetail from '@/components/AppDetail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: AppRegister
    },
    {
      path: '/login',
      name: 'Login',
      component: AppLogin
    },
    {
      path: '/websites',
      name: 'Website',
      component: Website
    },
    {
      path: '/websites/:id',
      name: 'detail',
      component: AppDetail
    }
  ]
});
