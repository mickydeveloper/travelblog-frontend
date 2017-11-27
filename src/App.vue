<template>
  <div id="app">
      <nav>
       <div class="container">
        <div class="row">
          <div class="col-6 d-flex">
            <router-link to="/">
              <img src="./assets/logo.svg">
            </router-link>
          </div>
          <div class="col-6 d-flex menu-links">
            <router-link to="/about">
              About
            </router-link>
          </div>
        </div>
        </div>
      </nav>
      <router-view />
      <footer>
      </footer>
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
  padding: 1rem 0;

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
      display: flex;
      align-items: center;
    }
  }
}
</style>

<!-- General Global Styles -->
<style lang="scss">
@import './style.scss';
@import './assets/scss/font.scss';
</style>
