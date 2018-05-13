<template>
  <div>
    <form method="post" @submit.prevent="login" class="form">
      <div class="form-group">
        <label for="email">Email address:</label>
        <input
          type="email"
          autocomplete="on"
          class="form-control"
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
      const url = 'https://mt-proc.herokuapp.com/login';
      const auth = {
        headers: { Authorization: 'Bearer {localStorage.token}' }
      };
      axios
        .post(
          url,
          {
            email: this.email,
            password: this.password
          },
          auth
        )
        .then(() => {})
        .catch((error) => {
          console.error(error);
        });
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
