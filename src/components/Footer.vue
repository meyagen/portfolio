<template>
  <footer class="Footer SectionContainer">
    <a href="mailto:mireyagenandres@gmail.com"
      class="tooltip is-tooltip-primary"
      data-tooltip="mireyagenandres@gmail.com">
      <i class="fa fa-envelope"></i>
    </a>
    <a href="https://gitlab.com/meyagen"
      target="_blank"
      class="tooltip is-tooltip-primary"
      data-tooltip="@meyagen">
      <i class="fa fa-github"></i>
    </a>
    <a href="https://github.com/meyagen"
      target="_blank"
      class="tooltip is-tooltip-primary"
      data-tooltip="@meyagen">
      <i class="fa fa-gitlab"></i>
    </a>
    <a href="https://medium.com/@meyagen"
      target="_blank"
      class="tooltip is-tooltip-primary"
      data-tooltip="@meyagen">
      <i class="fa fa-medium"></i>
    </a>
    <a href="https://www.linkedin.com/in/meyagen"
      target="_blank"
      class="tooltip is-tooltip-primary"
      data-tooltip="@meyagen">
        <i class="fa fa-linkedin"></i>
    </a>
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
  margin-top: 90px;
  margin-bottom: $spacing-mid;
  text-align: center;

  .fa {
    margin: 0 $spacing-xsmall;

    transition: all 0.15s ease;
    -webkit-transition: all 0.15s ease;
    -moz-transition: all 0.15s ease;
    -o-transition: all 0.15s ease;
    -ms-transition: all 0.15s ease;
  }

  .fa:hover {
    transform: scale(1.5);
    -webkit-transform: scale(1.5);
    -moz-transform: scale(1.5);
    -ms-transform: scale(1.5);
    -o-transform: scale(1.5);
  }
}
</style>
