import Creator from './creator';

class Wallet {
	address: string;
	network: number;

	constructor(address: string, network: number) {
		this.address = address;
		this.network = network;
	}
}

export default class User {
	id: string;

	username: string;

	followingCount: number;
	followerCount: number;

	profileUrl: string;
	bannerUrl: string;

	createdAt: Date;
	updatedAt: Date;

	creator?: Creator;

	wallet: Wallet;

	constructor(data: any) {
		this.id = data.id;
		this.username = data.username;

		this.followerCount = data.followerCount;
		this.followingCount = data.followingCount;

		const profileFind = data.files.find((f: any): any => f.type == 0);
		const bannerUrl = data.files.find((f: any): any => f.type == 1);

		this.profileUrl = profileFind ? (profileFind as any).path : '';
		this.bannerUrl = bannerUrl ? (bannerUrl as any).path : '';

		this.createdAt = new Date(data.created_at);
		this.updatedAt = new Date(data.updated_at);

		this.wallet = new Wallet(data.wallets[0].address, data.wallets[0].network);
	}
}

export const EMPTY_USER = new User({
	id: '',
	username: '',
	followerCount: 0,
	followingCount: 0,
	files: [
		{ type: 0, path: '' },
		{ type: 1, path: '' }
	],
	// eslint-disable-next-line @typescript-eslint/camelcase
	created_at: '',
	// eslint-disable-next-line @typescript-eslint/camelcase
	updated_at: '',
	wallets: [{ address: '', network: '' }]
});
