export default class Creator {
	creatorId: string;

	bio: string;
	verified: boolean;

	name: string;
	surname: string;

	createdAt: Date;
	updatedAt: Date;

	constructor(data: any) {
		this.creatorId = data.id;

		this.bio = data.bio;
		this.verified = data.status == 2;

		this.name = data.name;
		this.surname = data.surname;

		this.createdAt = new Date(data.created_at);
		this.updatedAt = new Date(data.updated_at);
	}
}
