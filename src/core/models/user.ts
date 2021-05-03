export default class User {
	id: number;

	username: string;

	followingCount: number;
	followerCount: number;

	profileUrl: string;
	bannerUrl: string;

	createdAt: Date;
	updatedAt: Date;

	constructor(response: any) {
		this.id = response.id;

		this.username = response.username;

		this.followerCount = response.followerCount;
		this.followingCount = response.followingCount;

		this.profileUrl = response.files.find((f: any): any => f.type == 0).path;
		this.bannerUrl = response.files.find((f: any): any => f.type == 1).path;

		this.createdAt = new Date(response.created_at);
		this.updatedAt = new Date(response.updated_at);
	}
}
