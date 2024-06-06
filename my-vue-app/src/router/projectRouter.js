import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import Projects from '../components/Projects.vue';
import About from '../components/About.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/about', component: About },
    { path: '/porflio', component: porflio },
  ],
});
