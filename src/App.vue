<template>
  <div id="app">
    <div class="Content">
      <router-view/>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppFooter from '@/components/Footer';

export default {
  name: 'App',
  components: {
    AppFooter,
  }
};
</script>

<style lang="scss">
@import '~assets/sass/main';

#app {
  height:100vh;
}

.Content {
  height: auto;
  min-height: 400px;
}
</style>
