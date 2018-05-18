<template>
  <div>
    <div class=" box d-flex justify-content-center flex-column">
      <div class="card shadow-lg bg-white">
      <p class="title display-4">
        {{websites.name}}
      </p>
      <a :href="websites.url" class=" link card-link badge alert-primary">{{websites.url}}</a>
      <div class="text-center lead text text-default">
        {{websites.description}}
      </div>
      </div>
      <a href="#/websites/">
        <button type="button" class="btn btn-lg btn-dark mt-4">Go Back</button>
      </a>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      websites: [],
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: 'fetchData'
  },
  methods: {
    fetchData() {
      const URL = `https://mt-proc.herokuapp.com/websites/${this.$route.params.id}`;
      const AUTH = {
        headers: { Authorization: `Bearer ${localStorage.token}` }
      };
      this.loading = true;
      axios
        .get(URL, AUTH)
        .then((response) => {
          this.loading = false;
          this.websites = response.data.data;
          console.log(this.websites);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.box {
margin: 0 20vw;
}
.link {
  font-size: 18px;
}
.text {
  margin: 0 10px ;
  padding: 20px;
}
.title {
  text-transform: uppercase;
}
.card {
  width: 60vw;
  height: 50vh;
  margin-top: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
