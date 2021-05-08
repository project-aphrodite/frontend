export default class PostResponse {
	success: boolean;
	code: number;
	data: any;

	constructor() {
		this.success = false;
		this.code = 0;
	}
}
