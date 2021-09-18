import * as types from './types';

export default {
    [types._GET_CONNECTION_CONFIGURATION]: (state: types.State): string => {
        return state.connectionConfiguration;
    }
}