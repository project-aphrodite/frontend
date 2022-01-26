import Vuex from 'vuex';
import Vue from 'vue';

import { NAMESPACE as USER_NAMESPACE, store as userStore } from '@/core/store/user';

Vue.use(Vuex);

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		[USER_NAMESPACE]: userStore
	}
});
