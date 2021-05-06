import axios from 'axios';
import HttpRequest from '@/core/models/http/httpRequest';
import { Store } from '../store/store';

export const BASE_URL = 'https://project-aphrodite.herokuapp.com/api';

export function doGet(request: HttpRequest): Promise<{ code: number; data: { data: Array<any>; next_page_url: string; total: number } }> {
	return new Promise(resolve => axios.get(BASE_URL + request.generateQueryUrl()).then(response => resolve(response.data)));
}

export function doPost(request: HttpRequest, store?: Store, fileUpload = false): Promise<{ code: number; data: { data: Array<any> } }> {
	const config = {
		auth: {
			username: store ? store.walletId : '',
			password: store ? store.authToken : ''
		},
		header: {}
	};
	if (fileUpload) {
		config.header = { 'Content-Type': 'multipart/form-data' };
	}

	const formData = new FormData();
	request.queryParams.forEach((value, key) => {
		console.log(key, value);
		formData.append(key, value);
	});
	return new Promise(resolve => axios.post(BASE_URL + request.endpoint, formData, config).then(response => resolve(response.data)));
}
