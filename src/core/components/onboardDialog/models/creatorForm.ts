export default class CreatorForm {
	name: string;
	surname: string;
	email: string;
	username: string;
	explicit: boolean;
	creatorVerificationId?: File;
	creatorVerificationPhoto?: File;

	constructor() {
		this.name = '';
		this.surname = '';
		this.email = '';
		this.username = '';
		this.explicit = false;
	}

	setMock(): void {
		this.name = 'Sarel';
		this.surname = 'Kiriakis';
		this.email = 'meepo@gmail.com';
		this.username = 'Meepo';
	}
}
