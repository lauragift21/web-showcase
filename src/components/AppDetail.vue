<template>
  <div>
    <div class=" box d-flex justify-content-center flex-column">
      <div class="card shadow-lg bg-white">
        <div v-if="loading" class="loader">
          <img src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-large.gif" alt="loader">
        </div>
      <p class="title display-4">
        {{websites.name}}
      </p>
      <a :href="websites.url"
        target="_blank"
        class="link card-link badge alert-primary">
          {{websites.url}}
        </a>
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
      loading: false
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
@media only screen and (max-width: 600px) {
  .box {
    margin: 5vw;
    margin-top: 0;
  }
  .card {
    width: 90vw;
    height: 50vh;
  }
  .link {
    font-size: 16px;
  }
  .title {
    font-size: 30px;
    text-align: center;
  }
}
</style>
