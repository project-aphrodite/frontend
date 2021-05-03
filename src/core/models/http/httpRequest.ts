import { BASE_URL } from '@/core/services/httpService';

export default class HttpRequest {
	endpoint: string;
	queryParams: Map<string, string>;

	constructor(endpoint: string, queryParams: Map<string, string> = new Map<string, string>()) {
		this.endpoint = endpoint.replace(BASE_URL, '');
		this.queryParams = queryParams;
	}

	generateQueryUrl(): string {
		const queryParamString = [...this.queryParams].forEach((key, value) => {
			key + '=' + value + '&';
		});

		if (this.queryParams.size > 0) {
			return this.endpoint + '?' + queryParamString;
		}
		return this.endpoint;
	}
}
