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
		console.log(response);
		this.id = response.id;

		this.username = response.username;

		this.followerCount = response.followerCount;
		this.followingCount = response.followingCount;

		const profileFind = response.files.find((f: any): any => f.type == 0);
		const bannerUrl = response.files.find((f: any): any => f.type == 1);

		this.profileUrl = profileFind ? (profileFind as any).path : '';
		this.bannerUrl = bannerUrl ? (bannerUrl as any).path : '';

		this.createdAt = new Date(response.created_at);
		this.updatedAt = new Date(response.updated_at);
	}
}
