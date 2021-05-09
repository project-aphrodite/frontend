import HttpRequest from '../models/http/httpRequest';
import PostResponse from '../models/http/postResponse';
import { doGet, doPost } from './httpService';

export function login(address: string, network: string, onSuccess: (response: PostResponse) => void, onFail: (response: PostResponse) => void): void {
	const requestBody = new Map<string, string>();
	requestBody.set('address', address);
	requestBody.set('network', network);

	const request = new HttpRequest('/login', requestBody);

	doPost(request).then((r): void => {
		if (r.success) {
			onSuccess(r);
		} else {
			onFail(r);
		}
	});
}

export function retrieveUser(id: string, onSuccess: (response: PostResponse) => void, onFail: (response: PostResponse) => void): void {
	const request = new HttpRequest('/user/' + id);
	doGet(request).then((r): void => {
		if (r.success) {
			onSuccess(r);
		} else {
			onFail(r);
		}
	});
}
