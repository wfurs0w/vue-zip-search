<template>
  <div class="site-wrapper bg-dark d-flex flex-column">
    <header class="bg-secondary">
      <nav class="navbar navbar-expand-lg container">
        <router-link class="navbar-brand" to="/">Home</router-link>
      </nav>
    </header>

    <main class="flex-grow-1 text-white d-flex justify-content-center align-items-center">
      <router-view></router-view>
    </main>

    <footer class="bg-secondary">
      <div class="container text-center py-2">
        <p> 
          <a href="https://github.com/wfurs0w">My GitHub</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.site-wrapper {
  min-height: 100vh;
}

nav {
  display: flex;
  justify-content: center;
}
</style>
