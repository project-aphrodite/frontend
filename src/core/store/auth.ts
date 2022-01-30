import User, { EMPTY_USER } from '@/core/models/entities/user';
import FieldError, { BASE_ERROR_MESSAGE } from '../models/forms/fieldError';

export const NAMESPACE = 'auth';
export const _GET_AUTH_USER = 'getAuthUser';
export const GET_AUTH_USER = NAMESPACE + '/' + _GET_AUTH_USER;

export const _SET_AUTH_USER = 'setAuthUser';
export const SET_AUTH_USER = NAMESPACE + '/' + _SET_AUTH_USER;

export const _GET_AUTH_BASE_ERROR = 'getAuthBaseError';
export const GET_AUTH_BASE_ERROR = NAMESPACE + '/' + _GET_AUTH_BASE_ERROR;

export const _GET_AUTH_ERRORS = 'getAuthErrors';
export const GET_AUTH_ERRORS = NAMESPACE + '/' + _GET_AUTH_ERRORS;

export const _SET_AUTH_ERRORS = 'setAuthErrors';
export const SET_AUTH_ERRORS = NAMESPACE + '/' + _SET_AUTH_ERRORS;

export const _GET_AUTH_LOADING = 'getAuthLoading';
export const GET_AUTH_LOADING = NAMESPACE + '/' + _GET_AUTH_LOADING;

export const _SET_AUTH_LOADING = 'setAuthLoading';
export const SET_AUTH_LOADING = NAMESPACE + '/' + _SET_AUTH_LOADING;

export const _IS_AUTH = 'getIsAuth';
export const IS_AUTH = NAMESPACE + '/' + _IS_AUTH;

export const COOKIE_AUTH_USER_ID = 'auth_user_id';

class State {
	authUser: User;
	authLoading: boolean;
	authErrors: Array<FieldError>;

	constructor() {
		this.authUser = EMPTY_USER;
		this.authLoading = false;
		this.authErrors = [];
	}
}

export const store = {
	namespaced: true,
	state: new State(),
	getters: {
		[_GET_AUTH_USER]: (state: State): User => {
			return state.authUser;
		},
		[_GET_AUTH_LOADING]: (state: State): boolean => {
			return state.authLoading;
		},
		[_GET_AUTH_ERRORS]: (state: State): Array<FieldError> => {
			return state.authErrors;
		},
		[_GET_AUTH_BASE_ERROR]: (state: State): string => {
			const base = state.authErrors.find(e => e.field == BASE_ERROR_MESSAGE);
			return base ? base.message : '';
		},
		[_IS_AUTH]: (state: State): boolean => {
			return !!state.authUser.id;
		}
	},
	mutations: {
		[_SET_AUTH_USER](state: State, user: User): void {
			state.authUser = user;
			if (user.id) {
				localStorage.setItem(COOKIE_AUTH_USER_ID, user.id);
			}
		},
		[_SET_AUTH_LOADING](state: State, flag: boolean): void {
			state.authLoading = flag;
		},
		[_SET_AUTH_ERRORS](state: State, errors: Array<FieldError>): void {
			state.authErrors = errors;
		}
	},
	actions: {}
};
