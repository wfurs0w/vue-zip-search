<template>
  <div>
    <div class="mb-3">
      <label for="zip" class="form-label">ZIP Code:</label>
      <input type="text" id="zip" v-model="zip" class="form-control">
    </div>
    <button @click="search" class="btn btn-primary">Render</button>
    
  </div>
</template>

<script>
export default {
  name: 'SearchForm',

  data() {
    return {
      zip: ''
    };
  },

  methods: {
    search() {
      this.$router.push({ name: 'results', params: { zip: this.zip } });
    }
  }
};
</script>
