<template>
<div class="form">
   <form>
  <div class="form-group" method="post" @submit.prevent="register">
    <label for="email">Email address:</label>
    <input
      type="email"
      autocomplete="on"
      class="form-control"
      v-model="email"
      id="email"
      required>
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input
      type="password"
      autocomplete="off"
      class="form-control"
      v-model="password"
      id="pwd"
      required>
  </div>
  <button
    type="submit"
    class="btn btn-dark"
    @click="register"
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
      error: false
    };
  },
  methods: {
    register() {
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
            body: [this.email, this.password]
          },
          auth
        )
        .then(() => {})
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
</style>
