import User from '@/core/models/user';
import * as types from './types';

export default {
	[types._GET_CONNECTION_CONFIGURATION]: (state: types.State): string => {
		return state.connectionConfiguration;
	},
	[types._GET_USER_METADATA]: (state: types.State): User => {
		return state.userMetaData;
	}
};
