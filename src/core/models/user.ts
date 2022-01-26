export default class User {
	id: number;
	displayName: string;
	username: string;
	creator: any | undefined;
	followersCount: number;
	followingCount: number;
	subscribedCount: number;
	subscribersCount: number;
	files: { profileBanner: any | undefined; profilePicture: any | undefined };

	constructor(data: any) {
		this.id = data.id;
		this.displayName = data.displayName;
		this.username = data.username;
		// TODO add creater
		this.followersCount = data.followersCount;
		this.followingCount = data.followingCount;
		this.subscribedCount = data.subscribedCount;
		this.subscribersCount = data.subscribersCount;
		// TODO files
		this.files = { profileBanner: undefined, profilePicture: undefined };
	}
}

export const EMPTY_USER = new User({
	id: 95,
	displayName: 'zeepzorp',
	username: 'zeepzorp',
	creator: null,
	followersCount: 0,
	followingCount: 0,
	subscribedCount: 0,
	subscribersCount: 0,
	files: {
		profileBanner: null,
		profilePicture: null
	}
});
