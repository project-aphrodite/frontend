import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './plugins/router';

import { heightDirective, widthDirective, maxWidthDirective, minWidthDirective, minheightDirective, pointerDirective } from '@/directives';
import '@/css/app.css';
import store from './plugins/store';

Vue.config.productionTip = false;

Vue.directive('height', heightDirective);
Vue.directive('width', widthDirective);
Vue.directive('max-width', maxWidthDirective);
Vue.directive('min-height', minheightDirective);
Vue.directive('min-width', minWidthDirective);
Vue.directive('pointer', pointerDirective);

new Vue({
	vuetify,
	router,
	store,
	render: (h: any): any => h(App)
}).$mount('#app');
