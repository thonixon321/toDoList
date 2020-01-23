import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: () => import('./components/to-do-list.vue'),
      props: { header: 'To-Do List'},
      meta: {
        title: 'to-do-list'
      }
    },
    {
      path: '/listHistory',
      name: 'List History',
      component: () => import('./components/list-history.vue'),
      props: { header: 'List History'},
      meta: {
        title: 'list-history'
      }
    }

  ]
});