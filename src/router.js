import Vue from 'vue';
import Router from 'vue-router';
import TransVisibility from '@/components/TransVisibility';
import TransContent from '@/components/TransContent';
import TransList from '@/components/TransList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TransVisibility',
      component: TransVisibility,
    },
    {
      path: '/demo2',
      name: 'TransContent',
      component: TransContent,
    },
    {
      path: '/demo3',
      name: 'TransList',
      component: TransList,
    },
  ],
});
