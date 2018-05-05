import Vue from 'vue';
import Router from 'vue-router';
import RegisterComponent from '@/components/RegisterComponent';
import LoginComponent from '@/components/LoginComponent';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: RegisterComponent,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginComponent,
    },
  ],
});
