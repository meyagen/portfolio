import Vue from 'vue';
import Router from 'vue-router';
import Landing from '@/components/Landing';
import Freelancer from '@/components/works/Freelancer';
import RasRecruitment from '@/components/works/RasRecruitment';
import BuildEx from '@/components/works/BuildEx';
import PshsCareers from '@/components/works/PshsCareers';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
    },
    {
      path: '/works/freelancer',
      name: 'Freelancer',
      component: Freelancer,
    },
    {
      path: '/works/recruitment_directory',
      name: 'RasRecruitment',
      component: RasRecruitment,
    },
    {
      path: '/works/buildex',
      name: 'BuildEx',
      component: BuildEx,
    },
    {
      path: '/works/pshs_careers',
      name: 'PshsCareers',
      component: PshsCareers,
    },
  ],
});
