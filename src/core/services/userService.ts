import HttpRequest from '../models/http/httpRequest';
import PostResponse from '../models/http/postResponse';
import { COOKIE_URL, doGet, doPost } from './httpService';
import axios from 'axios';
import store from '@/plugins/store';
import User from '../models/entities/user';
import { SET_USER_METATDATA } from '../store/user';

export function register(displayName: string, email: string, password: string, passwordConfirmation: string): void {
	const requestBody = new Map<string, string>();
	requestBody.set('display_name', displayName);
	requestBody.set('email', email);
	requestBody.set('password', password);
	requestBody.set('password_confirmation', passwordConfirmation);

	axios.get(COOKIE_URL).then(() => {
		console.log('HERE');
		const request = new HttpRequest('/register', requestBody);
		doPost(request).then((r): void => {
			console.log('ASD');
			if (r.success) {
				store.commit(SET_USER_METATDATA, new User(r.data.user));
			} else {
				console.log('FAILURE TO REGISTER');
				// TODO: Add registrastion error
			}
		});
	});
}

export function login(email: string, password: string, onSuccess: (response: PostResponse) => void, onFail: (response: PostResponse) => void): void {
	const requestBody = new Map<string, string>();
	requestBody.set('email', email);
	requestBody.set('password', password);

	axios.get(COOKIE_URL).then(() => {
		const request = new HttpRequest('/login', requestBody);
		doPost(request).then((r): void => {
			if (r.success) {
				onSuccess(r);
			} else {
				onFail(r);
			}
		});
	});
}

export function retrieveCreator(id: string, onSuccess: (response: PostResponse) => void, onFail: (response: PostResponse) => void): void {
	const request = new HttpRequest('/creator/' + id);
	doGet(request).then((r): void => {
		if (r.success) {
			onSuccess(r);
		} else {
			onFail(r);
		}
	});
}
