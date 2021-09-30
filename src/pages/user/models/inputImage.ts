export default class InputImage {
	url: string;
	file: File;

	constructor(url: string, file: File) {
		this.url = url;
		this.file = file;
	}
}
