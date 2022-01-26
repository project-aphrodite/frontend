import { ActionContext } from 'vuex';
import * as types from './types';

export default {
	// [types.RESET_ERROR_MESSAGE](context: ActionConext<types.State, any>): void {
	//     context.commit(types._REMOVE_ERROR_MESSAGE)
	// }

	[types._SET_USER_METATDATA](context: ActionContext<types.State, any>): void {
		context.commit(types._GET_USER_METADATA);
	}
};
