<template>
  <div>
    <form method="post" @submit.prevent="login" class="form">
      <div class="form-group">
      <div class="alert alert-success alert-dismissible fade show" v-if="success">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <b>Login successful!</b>
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
import axios from 'axios';

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
      this.success = true;
      const url = 'https://mt-proc.herokuapp.com/login';
      console.log(this.password);
      console.log(this.email);
      axios
        .post(
          url,
          {
            email: this.email,
            password: this.password
          })
        .then((res) => {
          console.log(res);
          localStorage.token = res.data.token;
        })
        .catch((error) => {
          console.error(error);
        });
      this.$router.replace(this.$route.query.redirect || '/websites');
    }
  }
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
