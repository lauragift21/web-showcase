<template>
<!--website cards -->
  <div class="show ml-2">
    <h2 class="text-default ml-3 text-center">SHOWCASE</h2>
      <div v-if="loading" class="loader">
      <img src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-large.gif" alt="loader">
    </div>
    <div class="card-columns mx-3">
      <div class="card mx-2" v-for="website in data"  :key="website.id">
      <router-link class="link" :to="{name: 'detail', params: {id: website.id}}">
          <div class="card-header text-white bg-dark"> {{ website.name }}</div>
        </router-link>
          <div class="card-body card-text text-center">
            <strong class="text-dark">
              {{ website.description}}
            </strong><br>
            <a :href="website.url"
              target="_blank"
              class="badge alert-primary card-link">
                {{website.url}}
              </a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import AppDetail from './AppDetail';

export default {
  name: 'Card',
  data() {
    return {
      data: [],
      loading: false
    };
  },
  mounted() {
    this.getCard();
  },
  methods: {
    getCard() {
      const URL = 'https://mt-proc.herokuapp.com/websites';
      const AUTH = {
        headers: { Authorization: `Bearer ${localStorage.token}` }
      };
      this.loading = true;
      const params = this.$route.params;
      console.log(params);
      axios
        .get(URL, AUTH)
        .then((res) => {
          this.loading = false;
          this.data = res.data.data;
          console.log(this.data);
        })
        .catch(() => {
          console.log('Hey Something gone wrong!!');
        });
    }
  },
};
</script>

<style scoped>
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
}
.link {
  text-decoration: none;
}
</style>

