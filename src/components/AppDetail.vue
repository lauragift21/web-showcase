<template>
  <div>
    <div class="card">
      <h3 class="text-secondary">Showcase Details</h3>
      <div v-for="(website, index) in websites" :key="website.id">
        <p class="text-primary">  Name: {{ website.id}} {{ index }} </p>
      </div>
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
.card {
  height: 91vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
