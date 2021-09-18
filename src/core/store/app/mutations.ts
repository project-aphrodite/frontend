import * as types from './types';

export default {
    [types._SET_CONNECTION_CONFIGURATION](state: types.State, configs: string): void {
        state.connectionConfiguration = configs;
    }
}