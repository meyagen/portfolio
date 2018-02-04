<template>
<div class="Work">
  <section class="Work-Header">
    <div class="Work-Header-Content SectionContainer">
      <h1 class="Title">
        <strong class="Title--primary">Case Study #2</strong>
      </h1>
      <h3 class="Subtitle">
        <span class="Subtitle--highlight"></span>
        <span>Recruitment Directory</span>
      </h3>
      <br>
      <h3 class="Subtitle">
        <span class="Subtitle--highlight"></span>
        <span>Rod & Staff Recruitment</span>
      </h3>
      <img src="~assets/images/ras/devices.png" alt="" class="Work-Header-Image">
    </div>
  </section>

  <section class="Work-Overview SectionContainer">
    <h2 class="Title--section">Overview</h2>
    <p>
      Rod & Staff is a small recruitment agency that works across the globe to communicate with hundreds
      of companies and professionals to find the best work environment for their clients. To facilitate
      their work, recruiters need a solution better than Excel to organize their data and streamline their
      workflow, while keeping their data safe with finer access controls.
    </p>
    <p>
      Established recruiting apps often provide more features, but these are seen as needless clutter that
      distracts the recruiters from their work. Moreover, the small size of the company does not justify the
      costs of working with these recruiting apps, which charge more for the customization the recruiters need.
      A <strong>simple</strong> in-house solution would better fit their needs. As Einstein once said, <i>“Everything should be made
      as simple as possible, but not simpler.”</i>
    </p>
  </section>

  <section class="Work-Design SectionContainer">
    <h2 class="Title--section">Design & Development</h2>
    <p>
      This was a freelance project I had with <a href="https://www.linkedin.com/in/nmcalabroso/">@nmcalabroso</a>
      that we both took as an <strong>opportunity to explore new technology we were not familiar with</strong>;
      for Neil’s case it was API development with <a href="https://elixir-lang.org/">Elixir</a>, while for me it was
      SPA development with <a href="https://vuejs.org/">Vue.js</a>. We both collaborated on all fronts, with Neil
      focusing on deployment and team management while I worked on client communication, setting deliverables,
      organizing our phabricator workboard, and managing the project overall.      
    </p>

    <p>
      The project was not so much hindered by us trying new tech for the first time, but rather by scope creep
      and miscommunication of business specs. A lot of these could have been mitigated by us sitting down to define
      the problem space clearly and by having more in-person meetups with the client to make communication easier.
    </p>

    <p>
      We worked on the project by splitting it into several milestones and iteratively deploying features as
      they get finished, occasionally meeting with the client to provide a demo of how they can use the site.
      Because they were able to use the site in the early stages, we were able to find bugs more easily and receive
      better feedback from the client, which allowed us to <strong>improve the experience for them incrementally</strong>.
      This also naturally introduced scope creep as they get a better idea of what they really needed, but this is
      something you can anticipate for when you <strong>actively listen to the needs of the client</strong>.
    </p>
   </section>

  <section class="Work-Skills SectionContainer">
    <h2 class="Title--section">Skills</h2>
    <ul class="Skills-list">
      <li>
        <span class="SkillTag SkillTag--ux">PROJECT MANAGEMENT</span>
      </li>
      <li>
        <span class="SkillTag SkillTag--ux">UX</span>
      </li>
      <li>
        <span class="SkillTag SkillTag--dev">VUE</span>
      </li>
    </ul>
  </section>

  <section class="Work-Samples SectionContainer">
    <h2 class="Title--section">Sample Work</h2>
    <img src="~assets/images/ras/sample1.png" alt="">
    <img src="~assets/images/ras/sample2.png" alt="">
    <img src="~assets/images/ras/sample3.png" alt="">
  </section>

  <section class="Work-Links SectionContainer">
    <a href="/">← Back</a>
  </section>
</div>
</template>

<script>
export default {
  name: 'RasRecruitment',
};
</script>

<style lang="scss">
</style>

