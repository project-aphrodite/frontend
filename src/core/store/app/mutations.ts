import User from '@/core/models/user';
import * as types from './types';

export default {
	[types._SET_CONNECTION_CONFIGURATION](state: types.State, configs: string): void {
		state.connectionConfiguration = configs;
	},
	[types._SET_USER_METATDATA](state: types.State, user: User): void {
		state.userMetaData = user;
	}
};
