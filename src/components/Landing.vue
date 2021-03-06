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
        <span>Software Engineer.</span>
      </h3>
      <br>
      <h3 class="Subtitle">
        <span class="Subtitle--highlight"></span>
        <span>Foodie. Videogame enthusiast.</span>
      </h3>
    </div>
  </section>

  <section class="Landing-Summary SectionContainer">
    <h2 class="Title--section">Hi there!</h2>
    <p>
      <span>I'm a <strong>software engineer</strong> based in Manila.</span>
      <span>I have worked in</span>
      <a href="https://www.freelancer.com">Freelancer.com</a>'s
      <span>Trust & Safety Team, and am currently employed as a Frontend Engineer in</span>
      <a href="https://digix.global/">Digix Global</a>.
    </p>
  </section>

  <section class="Landing-SelectedWorks SectionContainer">
    <h2 class="Title--section">Selected Works</h2>
    <a href="/static/resume.pdf">View More</a>
    <ul class="Landing-SelectedWorks-list">
      <li v-for="work in works" :key="work.url">
        <a :href="work.url">
          <div class="Logo">
            <div class="Logo-Flipper">
              <div class="Logo-Image">
                <img :src="work.logoUrl" :alt="work.title">
              </div>
              <div class="Logo-Overlay">
                <a :href="work.url">
                  <span>VIEW</span>
                  <br/>
                  <span>CASE STUDY</span>
                </a>
              </div>
            </div>
          </div>
          <br>
          <span>{{ work.title }}</span>
          <br>
          <div class="Logo-Client">{{ work.client }}</div>
        </a>
      </li>
    </ul>
  </section>
</div>
</template>

<script>
import FlnLogo from '@/assets/images/freelancer/logo.png';
import RasLogo from '@/assets/images/ras/logo.png';
import BuildExLogo from '@/assets/images/buildex/logo.png';
import PshsCareersLogo from '@/assets/images/pshscareers/logo.png';

export default {
  name: 'Landing',
  data: () => ({
    works: [
      {
        client: 'FREELANCER.COM LTD.',
        logoUrl: FlnLogo,
        title: 'TRUST & SAFETY',
        url: '/works/freelancer',
      },
      {
        client: 'ROD & STAFF RECRUITMENT',
        logoUrl: RasLogo,
        title: 'RECRUITMENT DIRECTORY',
        url: '/works/recruitment_directory',
      },
      {
        client: 'UP DILIMAN, DEPARTMENT OF PSYCHOLOGY',
        logoUrl: BuildExLogo,
        title: 'BUILDEX',
        url: '/works/buildex',
      },
      {
        client: 'PHILIPPINE SCIENCE HIGH SCHOOL',
        logoUrl: PshsCareersLogo,
        title: 'PSHS CAREERS',
        url: '/works/pshs_careers',
      },
    ],
  }),
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
      flex-wrap: wrap;
      padding: $spacing-xlarge 0;
      text-align: center;

      li {
        flex: 1;
        font-size: 0.7rem;
        margin-top: $spacing-xxlarge;

        a {
          text-decoration: none;
          opacity: 1;
        }
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

  &-Client {
    margin: 0 auto;
    width: $size-logo;
  }

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
