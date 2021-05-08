import User from '../models/user';

// export class Store {
// 	user?: User;
// 	walletId: string;
// 	authToken: string;
// 	network: number;

// 	constructor() {
// 		this.walletId = '';
// 		this.authToken = '';
// 		this.network = -1;
// 	}
// }

// default new Store();

import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);
export const WALLET_ADDRESS_STORAGE_STRING = 'walletAddress';
export const WALLET_NETWORK_STORAGE_STRING = 'walletNetwork';

const store = new Vuex.Store({
	state: {
		user: undefined as User | undefined,
		authToken: ''
	},
	mutations: {
		setUser(state, user: User): void {
			state.user = user;
			localStorage.setItem(WALLET_ADDRESS_STORAGE_STRING, user.wallet.address);
			localStorage.setItem(WALLET_NETWORK_STORAGE_STRING, String(user.wallet.network));
		},
		setAuthToken(state, authToken: string): void {
			state.authToken = authToken;
		}
	},
	getters: {
		getUser(state): User | undefined {
			return state.user;
		},
		getAuthToken(state): string {
			return state.authToken;
		},
		getWalletAddress(state): string {
			if (state.user) {
				return state.user.wallet.address;
			}

			return '';
		},
		getWalletNetwork(state): number {
			if (state.user) {
				return state.user.wallet.network;
			}

			return -1;
		}
	}
});

export default store;
