<template>
  <footer class="Footer SectionContainer">
    <div class="Footer--left">
      <a href="mailto:mireyagenandres@gmail.com">mireyagenandres@gmail.com</a>
    </div>
    <div class="Footer--right">
      <a href="https://github.com/meyagen">github</a>
      <span>&#9676;</span>
      <a href="https://gitlab.com/meyagen">gitlab</a>
      <span>&#9676;</span>
      <a href="https://www.linkedin.com/in/meyagen">linkedin</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style lang="scss">
@import '~assets/sass/main';

.Footer {
  bottom: 10px;
  display: flex;
  margin-top: 90px;
  margin-bottom: $spacing-mid;

  &--left {
    flex: 1;
  }
}
</style>
