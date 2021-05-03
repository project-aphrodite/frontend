import User from './user';

export default class Creator extends User {
	creatorId: number;

	bio: string;
	verified: boolean;

	name: string;
	surname: string;

	createdAt: Date;
	updatedAt: Date;

	constructor(response: any) {
		super(response);
		this.creatorId = response.creator.id;

		this.bio = response.creator.bio;
		this.verified = response.creator.status == 2;

		this.name = response.creator.name;
		this.surname = response.creator.surname;

		this.createdAt = new Date(response.creator.created_at);
		this.updatedAt = new Date(response.creator.updated_at);
	}
}
