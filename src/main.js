import Vue from 'vue';
import App from './App.vue';
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import router from './router';
import NowUiKit from './plugins/now-ui-kit';
import i18n from './i18n'
import VueI18n from 'vue-i18n';

Vue.config.productionTip = false;

Vue.use(NowUiKit);
Vue.use(VueI18n);

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app');
