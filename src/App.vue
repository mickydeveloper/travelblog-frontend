<template>
  <div id="app">
    <div class="container">
      <h1>yes</h1>
      <nav>
        <router-link to="/">
          img
        </router-link>
        <router-link to="/posts">
          Posts
        </router-link>
      </nav>
      <router-view />
      <footer>

      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" scoped>

</style>

<!-- General Global Styles -->
<style lang="scss">
@import './style.scss';
</style>
