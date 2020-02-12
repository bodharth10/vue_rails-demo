/* eslint no-console:0 */
import "../css/application.css";
import TurbolinksAdapter from 'vue-turbolinks';
import Vuelidate from 'vuelidate';
import Vue from 'vue/dist/vue.esm';
import Login from '../components/login.vue';

Vue.use(Vuelidate)
Vue.use(TurbolinksAdapter)

Vue.component('login', Login);

document.addEventListener('turbolinks:load', () => {
 const app = new Vue({
   el: '[data-behavior="vue"]'
 })
})
