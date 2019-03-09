<template>
<div class="Work">
  <section class="Work-Header">
    <div class="Work-Header-Content SectionContainer">
      <h1 class="Title">
        <strong class="Title--primary">Case Study #3</strong>
      </h1>
      <h3 class="Subtitle">
        <span class="Subtitle--highlight"></span>
        <span>BuildEx</span>
      </h3>
      <br>
      <h3 class="Subtitle">
        <span class="Subtitle--highlight"></span>
        <span>UP Diliman Dept. of Psychology</span>
      </h3>
      <img src="~assets/images/buildex/devices.png" alt="" class="Work-Header-Image">
    </div>
  </section>

  <section class="Work-Overview SectionContainer">
    <h2 class="Title--section">Overview</h2>
    <p>
      As part of their research, students and faculty of the Department of Psychology in UP Diliman
      conduct various experiments to gather data, usually in the form of surveys. Most students use
      free apps like Typeform and Google form, and while these serve their needs adequately, they are
      very limited in how you can customize your surveys. Not everyone can afford using paid apps either,
      and even then, these solutions do not offer the flexibility needed for their research.
    </p>

    <p>
      <strong>BuildEx</strong> is a solution designed by Computer Science students in conjunction with the
      faculty of the Department of Psychology, which addresses the rigidity of current solutions by providing
      a <strong>drag and drop experiment creation system</strong> that makes use of a variety of stimuli
      (images, videos, text, etc.) and records time-based data in addition to collecting form answers given by
      respondents to the experiment. This also allows better user and experiment management for the faculty
      researchers, who also advise their students’ experiments before they can be published.
    </p>
  </section>

  <section class="Work-Design SectionContainer">
    <h2 class="Title--section">Design & Development</h2>
    <p>
      This one is a bit different from my previous works in that: <i>a)</i> I worked with two teams on
      different iterations of the project; and <i>b)</i> for both iterations, I was still in college and no one on
      the team had proper industry experience yet aside from a short internship or so.
    </p>

    <p>
      For the first team that worked on the project, we were all new to web development and collaborative work
      (we learned how to work with git in this project). We were able to create a proof of concept using
      <a href="https://codeigniter.com/">codeigniter</a> and jQuery. It was still underdeveloped to be called an MVP,
      but polished enough that we can say it’s worth investing in.
    </p>

    <p>
      Due to various circumstances, the old team can no longer work on the project so we had to work with a new team
      of developers. Being the only one left from the old team, I had the responsibility of passing on knowledge,
      maintaining our relationship with the faculty of the Department of Psychology, and <strong>leading the team
      through development</strong>. By then, I had already gone through my internship and worked on a few more projects,
      so I was confident enough to start the project from scratch with a
      <a href="http://rubyonrails.org/">Ruby on Rails</a> API and a client-side app made from
      <a href="https://expressjs.com/">Express.js</a> and <a href="https://reactjs.org/">React</a>.
    </p>

    <p>
      Despite having already worked on the project in a previous iteration, our team was still pretty inexperienced
      as a whole. The scope of the project was <strong>too ambitious</strong> for a small team of college students -
      who were still learning web development - to finish part-time in under a year. Since we could not afford an
      extended deadline, we had to <strong>make conscious decisions of which features to prioritize</strong> based on
      user needs and available resources. We managed to finish an MVP of the project, but not without sacrificing
      a lot of time under pressure.
    </p>

    <p>
      There is a lot of potential in this project, and I wish we could have continued working on it.
      I wanted to lead this project with focusing on the learning and growth of my team members, both in their
      technical skills as well as their soft skills. This was the first time I led a team for a project of this scale,
      and I struggled with balancing team growth and finishing a quality product. This project taught me a lot about
      project management and <strong>mentoring people without micromanaging them</strong>. A couple of years later,
      I found out that what I was struggling to learn was how to have <i>radical candor</i> as a leader. There is a lot
      for me to learn in how to challenge people with empathy, and I am still looking for opportunities for me to
      continue to develop and exercise these skills.
    </p>
  </section>

  <section class="Work-Skills SectionContainer">
    <h2 class="Title--section">Skills</h2>
    <ul class="Skills-list">
      <li>
        <span class="SkillTag SkillTag--ux">PROJECT MANAGEMENT</span>
      </li>
      <li>
        <span class="SkillTag SkillTag--dev">EXPRESS.JS</span>
      </li>
      <li>
        <span class="SkillTag SkillTag--dev">REACT</span>
      </li>
      <li>
        <span class="SkillTag SkillTag--dev">RUBY ON RAILS</span>
      </li>
      <li>
        <span class="SkillTag SkillTag--dev">MYSQL</span>
      </li>
    </ul>
  </section>

  <section class="Work-Samples SectionContainer">
    <h2 class="Title--section">Sample Work</h2>
    <img src="~assets/images/buildex/sample4.png" alt="">
    <img src="~assets/images/buildex/sample1.png" alt="">
    <img src="~assets/images/buildex/sample2.png" alt="">
    <img src="~assets/images/buildex/sample3.png" alt="">
  </section>

  <section class="Work-Links SectionContainer">
    <a href="/">← Back</a>
  </section>
</div>
</template>

<script>
export default {
  name: 'BuildEx',
};
</script>

<style lang="scss">
</style>

