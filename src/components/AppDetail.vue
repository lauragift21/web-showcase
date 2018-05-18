<template>
  <div>
    <p ml-5>SHOWCASE DETAILS</p>
    <div v-for="data in website" :key="data.id">
      <h4>
       Name:
        {{ data.name}}
      </h4>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      website: []
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
        .then((res) => {
          this.loading = false;
          this.website = res.data.data;
          console.log(this.website);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
};
</script>
