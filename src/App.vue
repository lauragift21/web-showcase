<template>
  <div id="app">
    <div class="bar">
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary ">
      <div class="container-fluid">
        <div class="nav-header">
          <a class="navbar-brand" href="/">SHOWCASE</a>
        </div>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
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

export default {
  name: 'App',
};
</script>

<style>

</style>
