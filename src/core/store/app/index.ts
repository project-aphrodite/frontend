import * as types from './types';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';

export default {
	namespaced: true,
	state: new types.State(),
	getters: getters,
	mutations: mutations,
	actions: actions
};
