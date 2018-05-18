<template>
  <div>
    <form method="post" @submit.prevent="login" class="form">
      <div class="form-group">
      <div class="alert alert-success alert-dismissible fade show" v-if="success">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <b>Login successful!</b>
      </div>
      <div class="alert alert-danger alert-dismissible fade show" v-if="error">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <b>Login Failed! Please Provide correct credentials</b>
      </div>
        <label for="email">Email address:</label>
        <input
          type="email"
          autocomplete="on"
          class="form-control"
          v-model="email"
          id="email"
          name="email"
          v-validate="'required|email'">
        <span
          v-show="errors.has('email')"
          class="text-danger">
          {{ errors.first('email') }}
        </span>
      </div>
      <div class="form-group">
        <label for="pwd">Password:</label>
        <input
          type="password"
          autocomplete="off"
          class="form-control"
          v-model="password"
          id="pwd"
          name="password"
          v-validate="'max:9'">
        <span
          v-show="errors.has('email')"
          class="text-danger">
          {{errors.first('password') }}
        </span>
      </div>
      <div class="form-group form-check">
        <label class="form-check-label">
          <input
            class="form-check-input"
            type="checkbox">
            Remember me
        </label>
      </div>
      <button
        type="submit"
        class="btn btn-dark"
        @click.prevent="login">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import EventBus from '../event-bus';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      success: false,
      error: false
    };
  },
  methods: {
    login() {
      const url = 'https://mt-proc.herokuapp.com/login';
      axios
        .post(
          url,
          {
            email: this.email,
            password: this.password
          })
        .then((res) => {
          this.success = true;
          console.log(res);
          localStorage.token = res.data.token;
          EventBus.$emit('logged', 'user logged');
          // store token into localstorage
          const token = localStorage.getItem('token');
          // redirect user if successful
          this.$router.replace(this.$route.query.redirect || '/websites');
        })
        .catch((error) => {
          // if request fails remove token from local storage
          this.error = true;
          console.error(error);
          localStorage.removeItem('token');
        });
    }
  },
};
</script>

<style scoped>
.form {
  display: block;
  width: 800px;
  margin: 40px auto;
}
@media only screen and (max-width: 600px) {
  .form {
    width: 95%;
    margin: 10px;
  }
}
</style>
