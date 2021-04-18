import { addDecorator } from '@storybook/vue';
import vuetify from '@/plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/dist/vuetify.min.css';
import '@/css/app.css';
import Vue from 'vue';

import { heightDirective, widthDirective, maxWidthDirective, minWidthDirective } from '@/directives';

Vue.directive('height', heightDirective);
Vue.directive('width', widthDirective);
Vue.directive('max-width', maxWidthDirective);
Vue.directive('min-width', minWidthDirective);

addDecorator(() => ({
	vuetify: vuetify,
	template: '<v-app><v-main><v-container><v-layout column><story/></v-layout></v-container></v-main></v-app>'
}));
