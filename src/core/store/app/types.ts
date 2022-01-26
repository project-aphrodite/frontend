import User, { EMPTY_USER } from '@/core/models/user';

export const NAMESPACE = 'app';

/**
 * Getters
 */

export const _GET_CONNECTION_CONFIGURATION = 'getConnectionConfiguration';
export const GET_CONNECTION_CONFIGURATION = NAMESPACE + '/' + _GET_CONNECTION_CONFIGURATION;

// user
export const _GET_USER_METADATA = 'getUserMetaData';
export const GET_USER_METADATA = NAMESPACE + '/' + _GET_USER_METADATA;

/**
 * Setters
 */
export const _SET_CONNECTION_CONFIGURATION = 'setConnectionConfiguration';

// user
export const _SET_USER_METATDATA = 'setUserMetaData';
export const SET_USER_METATDATA = NAMESPACE + '/' + _SET_USER_METATDATA;

export class State {
	connectionConfiguration: string;
	userMetaData: User;
	// user login loading flag
	// user error message
	constructor() {
		this.connectionConfiguration = '123';
		this.userMetaData = EMPTY_USER;
	}
}
