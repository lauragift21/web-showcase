<template>
  <div>
      <h1 class="mx-5">Create Website</h1>
      <form method="post" class="form m-5" @submit.prevent="postList">
        <div class="form-control">
          <label for="name">Website Name:</label>
          <input type="text" class="form-control mb-3" v-model="name" name="name">
          <label for="link">URL:</label>
            <input type="text" class="form-control mb-3" v-model="url" name="url">
          <label for="Description">Description:</label>
          <textarea name="description" v-model="description" class="form-control"/>
          <button type="submit" class="btn btn-dark mt-3" @click.prevent="postList" >
            Submit
          </button>
        </div>
      </form>
      <div class="show ml-2">
        <h2 class="text-default ml-3 text-info text-center ">SHOWCASE</h2>
        <div class="card-columns mx-3">
          <a href="/">
            <div class="card mx-2" v-for="website in websites"  :key="website.name">
              <div class="card-header text-white bg-dark"> {{website.name}}</div>
              <div class="card-body card-text text-center">
                <strong class="text-dark">
                  <span class="badge alert-info">Description:</span>
                    {{ website.description}}
                </strong><br>
                <a href="/" class="card-link">{{website.link}}</a>
              </div>
            </div>
          </a>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Website',
  data() {
    return {
      name: '',
      url: '',
      description: '',
      error: false,
      websites: []
    };
  },
  methods: {
    postList() {
      const url = 'https://mt-proc.herokuapp.com/websites';
      const auth = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      };
      console.log(auth);
      console.log(this.name);
      axios
        .post(
          url,
          {
            name: this.name,
            url: this.url,
            description: this.description
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
  },
  created() {
    const url = 'https://mt-proc.herokuapp.com/websites';
    const auth = {
      headers: { Authorization: `Bearer ${localStorage.token}` }
    };
    console.log(auth);
    axios
      .get(
        url,
        {
          name: this.name,
          url: this.url,
          description: this.description
        },
        auth
      )
      .then((response) => {
        this.websites = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
</script>


<style scoped>
.form {
  width: 50vw;
}
</style>

