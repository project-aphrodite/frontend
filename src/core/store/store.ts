export class Store {
	userId: string;
	walletId: string;

	constructor() {
		this.userId = '';
		this.walletId = '';
	}
}

export default new Store();
