// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@progress/kendo-ui';
import { KendoButtonGroup, KendoButtonsInstaller } from '@progress/kendo-buttons-vue-wrapper';
import { KendoGridColumn, KendoGrid, KendoGridInstaller } from '@progress/kendo-grid-vue-wrapper';
import { KendoDataSource, KendoDataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper';

  
Vue.config.productionTip = false;
Vue.use(KendoDataSourceInstaller);
Vue.use(KendoGridInstaller);
Vue.use(KendoButtonsInstaller);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
    KendoButtonGroup,
    KendoGridColumn,
    KendoGrid,
    KendoDataSource
  }
});
