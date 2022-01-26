import Creator from './creator';

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

	constructor(data: any) {
		console.log(data);
		this.id = data.id;
		this.username = data.username;

		this.followerCount = data.followerCount;
		this.followingCount = data.followingCount;

		this.profileUrl = data.files.profilePicture ? data.files.profilePicture : '';
		this.bannerUrl = data.files.profileBanner ? data.files.profileBanner : '';

		this.createdAt = new Date(data.created_at);
		this.updatedAt = new Date(data.updated_at);
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
