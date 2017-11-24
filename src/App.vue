<template>
  <div id="app">
    <div class="container">
      <nav>
        <div class="row">
          <div class="col-6 d-flex">
            <router-link to="/">
              <img src="./assets/logo.svg">
            </router-link>
          </div>
          <div class="col-6 d-flex menu-links">
            <router-link to="/posts">
              Posts
            </router-link>
          </div>
        </div>
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
nav{
  font-weight: bold;
  img{
    width: 13rem;

    @include respond-to(small-down) {
      width: 11rem;
    }
  }

  .menu-links{
    justify-content: flex-end;
    a{
      margin-left: 1.5rem;
    }
  }
}
</style>

<!-- General Global Styles -->
<style lang="scss">
@import './style.scss';
@import './assets/scss/font.scss';
</style>
