import HttpRequest from '../models/http/httpRequest';
import PostResponse from '../models/http/postResponse';
import { doGet, doPost } from './httpService';
import axios from 'axios';
import User from '../models/user';
import { SET_USER_METATDATA } from '../store/app/types';
import store from '@/plugins/store';

export function register(
	displayName: string,
	email: string,
	password: string,
	passwordConfirmation: string,
	onSuccess: (response: PostResponse) => void,
	onFail: (response: PostResponse) => void
): void {
	const requestBody = new Map<string, string>();
	requestBody.set('display_name', displayName);
	requestBody.set('email', email);
	requestBody.set('password', password);
	requestBody.set('password_confirmation', passwordConfirmation);

	axios.get('https://project-aphrodite.herokuapp.com/sanctum/csrf-cookie').then(response => {
		const request = new HttpRequest('/register', requestBody);
		doPost(request).then((r): void => {
			if (r.success) {
				console.log('REGISTER success');
				store.commit(SET_USER_METATDATA, new User(r.data.user));
				onSuccess(r);
			} else {
				console.log('FAILURE');
				onFail(r);
			}
		});
	});
}

export function login(email: string, password: string, onSuccess: (response: PostResponse) => void, onFail: (response: PostResponse) => void): void {
	const requestBody = new Map<string, string>();
	requestBody.set('email', email);
	requestBody.set('password', password);

	axios.get('https://project-aphrodite.herokuapp.com/sanctum/csrf-cookie').then(response => {
		const request = new HttpRequest('/login', requestBody);
		doPost(request).then((r): void => {
			if (r.success) {
				console.log('LOGIN success');
				onSuccess(r);
			} else {
				onFail(r);
			}
		});
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
