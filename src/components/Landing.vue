<template>
<div class="Landing">
  <section class="Landing-Header">
    <div class="Landing-Header-Content SectionContainer">
      <h1 class="Title">
        <span>I'm</span>
        <strong class="Title--primary">Mireya Andres.</strong>
      </h1>
      <h3 class="Subtitle">
        <span class="Subtitle--highlight"></span>
        <span>Software Engineer. Foodie. Video game enthusiast.</span>
      </h3>
      <br>
      <h3 class="Subtitle">
        <span class="Subtitle--highlight"></span>
        <span>Studying UX/Product Design. Looking for a mentor.</span>
      </h3>
    </div>
  </section>

  <section class="Landing-SelectedWorks SectionContainer">
    <h2 class="Title--section">Selected Works</h2>
    <a href="/static/resume.pdf">View More</a>
    <ul class="Landing-SelectedWorks-list">
      <li>
        <div class="Logo">
          <div class="Logo-Flipper">
            <div class="Logo-Image">
              <img src="~assets/images/freelancer/logo.png" alt="Freelancer.com">
            </div>
            <div class="Logo-Overlay">
              <a href="/works/freelancer">VIEW<br/>CASE STUDY</a>
            </div>
          </div>
        </div>
        <br>
        <span>TRUST & SAFETY</span>
        <br>
        <span>FREELANCER.COM LTD.</span>
      </li>
      <li>
        <div class="Logo">
          <div class="Logo-Flipper">
            <div class="Logo-Image">
              <img src="~assets/images/ras/logo.png" alt="RAS">
            </div>
            <div class="Logo-Overlay">
              <a href="/works/ras">VIEW<br/>CASE STUDY</a>
            </div>
          </div>
        </div>
        <br>
        <span>RECRUITMENT DIRECTORY</span>
        <br>
        <span>ROD & STAFF RECRUITMENT</span>
      </li>
      <li>
        <div class="Logo">
          <div class="Logo-Flipper">
            <div class="Logo-Image">
              <img src="~assets/images/buildex/logo.png" alt="BuildEx">
            </div>
            <div class="Logo-Overlay">
              <a href="/works/buildex">VIEW<br/>CASE STUDY</a>
            </div>
            </div>
        </div>
        <br>
        <span>BUILDEX</span>
        <br>
        <span>UPD DEPT. OF PSYCH.</span>
      </li>
      <li>
        <div class="Logo">
          <div class="Logo-Flipper">
            <div class="Logo-Image">
              <img src="~assets/images/pshscareers/logo.png" alt="PSHS Careers">
            </div>
            <div class="Logo-Overlay">
              <a href="/works/pshscareers">VIEW<br/>CASE STUDY</a>
            </div>
            </div>
        </div>
        <br>
        <span>PSHS CAREERS</span>
        <br>
        <span>PHILIPPINE SCIENCE HS</span>
      </li>
    </ul>
  </section>
</div>
</template>

<script>
export default {
  name: 'Landing',
};
</script>

<style lang="scss">
@import '~assets/sass/main';

.Landing {
  &-Header {
    background-image: url('~assets/images/header.png');
    background-size: cover;
    height: 400px;
    padding: $spacing-xlarge 0;
  }

  &-SelectedWorks {
    list-style: none;

    &-list {
      display: flex;
      padding: $spacing-xlarge 0;
      text-align: center;

      li {
        flex: 1;
        font-size: 0.7rem;
      }
    }
  }
}

.Logo {
  height: $size-logo;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
  width: $size-logo;

  perspective: 1000;
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -ms-perspective: 1000;
  -o-perspective: 1000;

  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;

  &-Image {
    transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);

    z-index: 2;
  }

  &-Overlay {
    transform: rotateY(0deg);
    -webkit-transform: rotateY(-180deg);
    -moz-transform: rotateY(-180deg);
    -ms-transform: rotateY(-180deg);
    -o-transform: rotateY(-180deg);

    background-color: $background;
    border-radius: 100%;
    height: $size-logo;
    position: absolute;
    width: $size-logo;

    a {
      color: black;
      font-weight: bold;
      position: relative;
      text-decoration: none;
      top: 60px;
    }
  }

  &:hover &-Overlay {
    transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);
  }

  &:hover &-Image {
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
  }

  &-Flipper {
    transition: 0.6s;
    -webkit-transition: 0.6s;
    -moz-transition: 0.6s;
    -ms-transition: 0.6s;
    -o-transition: 0.6s;

    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    -o-transform-style: preserve-3d;

    position: relative;
  }

  &-Image, &-Overlay {
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    -o-backface-visibility: hidden;

    transition: 0.6s;
    -webkit-transition: 0.6s;
    -moz-transition: 0.6s;
    -ms-transition: 0.6s;
    -o-transition: 0.6s;

    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    -o-transform-style: preserve-3d;

    position: absolute;
  }
}
</style>
