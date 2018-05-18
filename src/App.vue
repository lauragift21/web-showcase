<template>
  <div id="app" v-cloak>
    <div class="bar">
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark ">
      <a class="navbar-brand" href="/">SHOWCASE</a>
        <button class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarTogglerDemo02" class="navbar-collapse collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/login"
                class="nav-link"
                v-show="isLogged === true">
                Login
              </router-link>
              <router-link to="/"
                class="nav-link"
                v-if="isLogged === false"
                @click="isAuthenticated">
                  Logout
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register"
                v-if="isLogged === true"
                class="nav-link">
                Register
              </router-link>
            </li>
          </ul>
        </div>
    </nav>
  </div>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import Applogin from './components/AppLogin';
import EventBus from './event-bus';

export default {
  name: 'App',
  data() {
    return {
      isLogged: this.isAuthenticated()
    };
  },
  created() {
    EventBus.$on('logged', () => {
      this.isLogged = this.isAuthenticated();
    });
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.isLogged = this.isAuthenticated();
      this.$router.push('/login');
    },
    isAuthenticated() {
      const token = localStorage.getItem('token');
      if (token) {
        return true;
      }
      return false;
    }
  }
};
</script>

<style>
body {
  font-family: Ubuntu, 'times new roman', times, roman, serif;
}
</style>
