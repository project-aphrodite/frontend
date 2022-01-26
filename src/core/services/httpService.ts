import axios from 'axios';
import HttpRequest from '@/core/models/http/httpRequest';
import PostResponse from '../models/http/postResponse';

export const COOKIE_URL = 'https://project-aphrodite.herokuapp.com/sanctum/csrf-cookie';
export const BASE_URL = 'https://project-aphrodite.herokuapp.com/api';

export function doGet(request: HttpRequest): Promise<{ success: boolean; code: number; data: { data: any; next_page_url: string; total: number } }> {
	return new Promise(resolve =>
		axios
			.get(BASE_URL + request.generateQueryUrl())
			.then(response => resolve(response.data))
			.catch(() => resolve({ success: false } as any))
	);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function doPost(request: HttpRequest, _fileUpload = false): Promise<PostResponse> {
	// if (fileUpload) {
	// 	config.header = { 'Content-Type': 'multipart/form-data' };
	// }

	const formData = new FormData();
	request.queryParams.forEach((value, key) => {
		formData.append(key, value);
	});
	// return new Promise(resolve => axios.post(BASE_URL + request.endpoint, formData, config).then(response => resolve(response.data)));
	return new Promise(resolve => axios.post(BASE_URL + request.endpoint, formData).then(response => resolve({ data: response.data, success: response.status == 200 })));
}
