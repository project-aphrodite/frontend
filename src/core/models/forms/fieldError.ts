export const BASE_ERROR_MESSAGE = 'ERROR_MESSAGE';

export default class FieldError {
	field: string;
	message: string;

	constructor(field: string, message: string) {
		this.field = field;
		this.message = message;
	}
}
