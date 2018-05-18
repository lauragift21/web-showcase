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
                v-show="!isAuthenticated">
                Login
              </router-link>
              <router-link to="/logout"
                class="nav-link"
                v-show="isAuthenticated">
                Logout
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register" class="nav-link">Register</router-link>
            </li>
          </ul>
        </div>
    </nav>
  </div>
    <router-view/>
  </div>
</template>

<script>
import Applogin from './components/AppLogin';

export default {
  name: 'App',
  props: ['isAuthenticated'],
};
</script>

<style>
body {
  font-family: Ubuntu, 'times new roman', times, roman, serif;
}
</style>
