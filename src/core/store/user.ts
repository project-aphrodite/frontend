import User, { EMPTY_USER } from '@/core/models/entities/user';
import { ActionContext } from 'vuex';

export const NAMESPACE = 'user';
export const _GET_USER_METADATA = 'getUserMetaData';
export const GET_USER_METADATA = NAMESPACE + '/' + _GET_USER_METADATA;

export const _SET_USER_METATDATA = 'setUserMetaData';
export const SET_USER_METATDATA = NAMESPACE + '/' + _SET_USER_METATDATA;

class State {
	userMetaData: User;
	// user login loading flag
	// user error message
	constructor() {
		this.userMetaData = EMPTY_USER;
	}
}

export const store = {
	namespaced: true,
	state: new State(),
	getters: {
		[_GET_USER_METADATA]: (state: State): User => {
			return state.userMetaData;
		}
	},
	mutations: {
		[_SET_USER_METATDATA](state: State, user: User): void {
			state.userMetaData = user;
		}
	},
	actions: {}
};
