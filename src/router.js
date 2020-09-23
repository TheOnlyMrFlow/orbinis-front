import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import Company   from './pages/Company';
import Project   from './pages/Project';
import ProjectList   from './pages/ProjectList';
import Login from './pages/Login.vue';
import Contact from './pages/ContactUs.vue';
import Profile from './pages/Profile.vue';
import Maintenance from './pages/Maintenance.vue'
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  // mode: 'history',
  //   scrollBehavior: function(to, from, savedPosition) {
  //     if (to.hash) {
  //         return {selector: to.hash}
  //     } else {
  //         return { x: 0, y: 0 }
  //     }
  // },
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
        // , offset: { x: 0, y: 10 }
      }
    }
  },
  routes: [
    {
        path: process.env.VUE_APP_MAINTENANCE_MODE === 'true' ? '/*' : '/maintenance',
        name: 'maintenance',
        component: Maintenance
    },
    {
      path: '/index',
      name: 'index',
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 15 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/',
      name: 'company',
      components: { default: Company, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 15 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/projects',
      name: 'projects',
      components: { default: ProjectList, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 15 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/projects/:id',
      name: 'project',
      components: { default: Project, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 15 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/login',
      name: 'login',
      components: { default: Login, header: MainNavbar },
      props: {
        header: { colorOnScroll: 15 }
      }
    },
    {
      path: '/profile',
      name: 'profile',
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 15 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/contact',
      name: 'contact',
      components: { default: Contact, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 15 },
        footer: { backgroundColor: 'black' }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
