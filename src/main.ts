import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { heightDirective, widthDirective, maxWidthDirective } from '@/directives';
import '@/css/app.css';

Vue.config.productionTip = false;

Vue.directive('height', heightDirective);
Vue.directive('width', widthDirective);
Vue.directive('max-width', maxWidthDirective);

new Vue({
	vuetify,
	render: (h: any): any => h(App)
}).$mount('#app');
