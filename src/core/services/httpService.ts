import axios from 'axios';
import HttpRequest from '@/core/models/http/httpRequest';

export const BASE_URL = 'https://project-aphrodite.herokuapp.com/api';

export function doGet(request: HttpRequest): Promise<{ code: number; data: { data: Array<any>; next_page_url: string; total: number } }> {
	return new Promise(resolve => axios.get(BASE_URL + request.generateQueryUrl()).then(response => resolve(response.data)));
}

export function doPost(request: HttpRequest): Promise<{ code: number; data: { data: Array<any> } }> {
	return new Promise(resolve => axios.post(BASE_URL + request.endpoint, Object.fromEntries(request.queryParams)).then(response => resolve(response.data)));
}
