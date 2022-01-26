import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import AppModule from '@/core/store/app';
import { NAMESPACE as appNamespace } from '@/core/store/app/types';

export default new Vuex.Store({
	modules: {
		[appNamespace]: AppModule
	}
});
