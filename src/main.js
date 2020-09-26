import Vue from 'vue';
import App from './App.vue';
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import router from './router';
import NowUiKit from './plugins/now-ui-kit';
import VueGlobalVariable from 'vue-global-var';

Vue.config.productionTip = false;

Vue.use(NowUiKit);
let lang = localStorage.getItem('lang');
if (! lang)
{
  const browserLang = navigator.language || navigator.userLanguage;
  lang = browserLang.split("-").shift() === "en" ? "EN" : "FR";
  localStorage.setItem('lang', lang);
}


Vue.use(
  VueGlobalVariable,
  {
    globals: {
      $lang: lang
    }
  });

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
