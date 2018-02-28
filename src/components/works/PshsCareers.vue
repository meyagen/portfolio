<template>
<div class="Work">
  <section class="Work-Header">
    <div class="Work-Header-Content SectionContainer">
      <h1 class="Title">
        <strong class="Title--primary">Case Study #4</strong>
      </h1>
      <h3 class="Subtitle">
        <span class="Subtitle--highlight"></span>
        <span>PSHS Careers</span>
      </h3>
      <br>
      <h3 class="Subtitle">
        <span class="Subtitle--highlight"></span>
        <span>Philippine Science High School</span>
      </h3>
      <img src="~assets/images/pshscareers/devices.png" alt="" class="Work-Header-Image">
    </div>
  </section>

  <section class="Work-Overview SectionContainer">
    <h2 class="Title--section">Overview</h2>
    <p>
      PSHS has a complex system for career promotion, which includes a whole set of rules for administering
      points on different kinds of educational achievements, from education background and tenure to research
      publications and participation in academic competitions. This process is still, unfortunately, mired
      in manual paperwork, which is prone to human error.
    </p>

    <p>
      <strong>PSHS Careers</strong> aims to not only computerize the current process for the benefit of employees
      and promoters, but also to implement a system to govern these promotion rules to make them easily adjustable
      for future revisions.
    </p>
  </section>

  <section class="Work-Design SectionContainer">
    <h2 class="Title--section">Design & Development</h2>
    <p>
      Another freelance project from my college days. I collaborated with
      <a href="https://www.linkedin.com/in/nmcalabroso/">@nmcalabroso</a> on this one, with me focusing on the
      server logic. As we usually do, I took over client communication and project management while he took over
      deployment and team management.
    </p>

    <p>
      This was an interesting project from a data modelling perspective because we wanted to <strong>generalize a
      complex system to make it future proof</strong>. It’s a joy to work on though, because it’s one of the rare
      projects where the specs are well-documented and not prone to major changes. Because the goal of the site was
      very straightforward, we wanted to focus on <strong>simplicity and clarity</strong> so that it’s easy for the
      employees to use, even for those who may not be as tech savvy as the others.
    </p>

    <p>
      However, when it came to actually deploying the site, we encountered several problems due to having
      unprecedented pauses in the project as well as having to communicate with several point persons in the school’s
      IT team. Leaving a paper (email) trail of action items decided upon, and
      <strong>keeping things documented</strong>, helped use keep on top of things and maintain communication
      with the client.
    </p>
  </section>

  <section class="Work-Skills SectionContainer">
    <h2 class="Title--section">Skills</h2>
    <ul class="Skills-list">
      <li>
        <span class="SkillTag SkillTag--ux">PROJECT MANAGEMENT</span>
      </li>
      <li>
        <span class="SkillTag SkillTag--dev">RUBY ON RAILS</span>
      </li>
    </ul>
  </section>

  <section class="Work-Samples SectionContainer">
    <h2 class="Title--section">Sample Work</h2>
    <img src="~assets/images/pshscareers/sample1.png" alt="">
    <img src="~assets/images/pshscareers/sample3.png" alt="">
    <img src="~assets/images/pshscareers/sample4.png" alt="">
    <img src="~assets/images/pshscareers/sample2.png" alt="">
  </section>

  <section class="Work-Links SectionContainer">
    <a href="/">← Back</a>
  </section>
</div>
</template>

<script>
export default {
  name: 'PshsCareers',
};
</script>

<style lang="scss">
</style>
