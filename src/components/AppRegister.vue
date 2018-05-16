<template>
<div class="form">
   <form>
  <div class="form-group" method="post" @submit.prevent="register">
  <div class="alert alert-success alert-dismissible fade show" v-if="success">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <b>Registration successful!</b>
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
      v-show="errors.has('password')"
      class="text-danger">
      {{ errors.first('password') }}
    </span>
  </div>
  <button
    type="submit"
    class="btn btn-dark"
    @click.prevent="register"
    >
    Submit
    </button>
</form>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      success: false,
      error: false
    };
  },
  methods: {
    register() {
      this.success = true;
      const url = 'https://mt-proc.herokuapp.com/register';
      const auth = {
        headers: { Authorization: 'Bearer {localStorage.token}' }
      };
      console.log(this.email);
      console.log(this.password);
      axios
        .post(
          url,
          {
            email: this.email,
            password: this.password
          },
          auth
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
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
@media only screen and ( max-width: 600px) {
  .form {
    width: 95%;
    margin: 10px;
  }
}
</style>
