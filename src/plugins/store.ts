import Vuex from 'vuex';
import Vue from 'vue';

import { NAMESPACE as AUTH_NAMESPACE, store as authStore } from '@/core/store/auth';

Vue.use(Vuex);

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		[AUTH_NAMESPACE]: authStore
	}
});
