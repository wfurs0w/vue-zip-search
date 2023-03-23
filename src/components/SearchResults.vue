<template>
  <div class="container mt-5 info">
    <p><strong>User Agent:</strong> {{ userAgent }}</p>
    <p><strong>State:</strong> {{ state }}</p>
    <p><strong>City:</strong> {{ city }}</p>
    <p class="text-warning"><strong class="text-white">IP:</strong> {{ ip }}</p>
    <button @click="showIP" class="btn btn-primary me-4">Show IP</button>
    <router-link to="/" class="btn btn-secondary">Main Page</router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SearchResults',

  data() {
    return {
      ip: '',
      city: '',
      state: '',
      userAgent: ''
    };
  },

  created() {
    const zip = this.$route.params.zip;
    this.search(zip);
    this.ip = '';
    this.userAgent = navigator.userAgent;
  },

  methods: {
    async search(zip) {
      const response = await axios.get(`https://api.zippopotam.us/us/${zip}`);
      const data = response.data.places[0];
      this.city = data['place name'];
      this.state = data.state;
    },

    async showIP() {
      this.ip = await axios.get('https://api.ipify.org?format=json').then(response => response.data.ip);
    }
  }
};
</script>

<style scoped>
.info {
  max-width: 35%;
}
</style>
