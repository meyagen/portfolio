<template>
  <footer class="Footer SectionContainer">
    <div class="Footer--left">
      <a href="/static/resume.pdf">resume</a>
    </div>
    <div class="Footer--right">
      <a href="mailto:mireyagenandres@gmail.com"
        class="tooltip is-tooltip-primary"
        data-tooltip="mireyagenandres@gmail.com">
        <i class="fa fa-envelope"></i>
      </a>
      <a href="https://gitlab.com/meyagen"
        class="tooltip is-tooltip-primary"
        data-tooltip="@meyagen">
        <i class="fa fa-github"></i>
      </a>
      <a href="https://github.com/meyagen"
        class="tooltip is-tooltip-primary"
        data-tooltip="@meyagen">
        <i class="fa fa-gitlab"></i>
      </a>
      <a href="https://medium.com/@meyagen"
        class="tooltip is-tooltip-primary"
        data-tooltip="@meyagen">
        <i class="fa fa-medium"></i>
      </a>
      <a href="https://www.linkedin.com/in/meyagen"
        class="tooltip is-tooltip-primary"
        data-tooltip="@meyagen">
         <i class="fa fa-linkedin"></i>
      </a>
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

  .fa {
    margin: 0 $spacing-xsmall;

    transition: all 0.25s ease;
    -webkit-transition: all 0.25s ease;
    -moz-transition: all 0.25s ease;
    -o-transition: all 0.25s ease;
    -ms-transition: all 0.25s ease;
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
