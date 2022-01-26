export default class CreatorForm {
	name: string;
	surname: string;
	email: string;
	password: string;
	displayName: string;
	username: string;
	explicit: boolean;
	creatorVerificationId?: File;
	creatorVerificationPhoto?: File;

	constructor() {
		this.name = '';
		this.surname = '';
		this.email = '';
		this.password = '';
		this.displayName = '';
		this.username = '';
		this.explicit = false;
	}

	setMock(): void {
		this.name = 'Sarel';
		this.surname = 'Kiriakis';
		this.email = 'meepo@gmail.com';
		this.password = 'Okay?';
		this.displayName = 'noo';
		this.username = 'Meepo';
	}

	toRequestBody(): Map<string, string> {
		const requestBody = new Map<string, any>();
		requestBody.set('name', this.name);
		requestBody.set('surname', this.surname);
		requestBody.set('email', this.email);
		requestBody.set('username', this.username);
		requestBody.set('explicit', Number(this.explicit));
		requestBody.set('creator_verification_id', this.creatorVerificationId);
		requestBody.set('creator_verification_photo', this.creatorVerificationPhoto);

		return requestBody;
	}
}
