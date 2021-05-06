export class Store {
	userId: string;
	walletId: string;
	authToken: string;

	constructor() {
		this.userId = '';
		this.walletId = '';
		this.authToken = '';
	}
}

export default new Store();
