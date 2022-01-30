import HttpRequest from '../models/http/httpRequest';
import PostResponse from '../models/http/postResponse';
import { COOKIE_URL, doGet, doPost } from './httpService';
import axios from 'axios';
import store from '@/plugins/store';
import User from '../models/entities/user';
import { SET_AUTH_LOADING, SET_AUTH_USER, SET_AUTH_ERRORS, COOKIE_AUTH_USER_ID } from '../store/auth';
import FieldError, { BASE_ERROR_MESSAGE } from '../models/forms/fieldError';

axios.defaults.withCredentials = true;

function parseErrors(r: PostResponse): Array<FieldError> {
	const fieldErrors = new Array<FieldError>();
	fieldErrors.push(new FieldError(BASE_ERROR_MESSAGE, r.data.message));
	if (r.data.errors) {
		fieldErrors.push(...Object.keys(r.data.errors).map(k => new FieldError(k, r.data.errors[k])));
	}

	return fieldErrors;
}

class AuthService {
	loadSessionUser(): void {
		const id = localStorage.getItem(COOKIE_AUTH_USER_ID);
		if (!id) {
			return;
		}
		console.log(id);
		store.commit(SET_AUTH_LOADING, true);
		axios.get(COOKIE_URL).then(() => {
			const request = new HttpRequest('/user/' + 5);
			doGet(request).then();
		});
	}

	register(email: string, password: string, passwordConfirmation: string, displayName: string): void {
		const requestBody = new Map<string, string>();
		requestBody.set('email', email);
		requestBody.set('password', password);
		requestBody.set('password_confirmation', passwordConfirmation);
		requestBody.set('display_name', displayName);

		store.commit(SET_AUTH_LOADING, true);
		store.commit(SET_AUTH_ERRORS, []);

		axios.get(COOKIE_URL).then(() => {
			const request = new HttpRequest('/register', requestBody);
			doPost(request).then((r): void => {
				if (r.success) {
					store.commit(SET_AUTH_USER, new User(r.data.user));
				} else {
					console.log(parseErrors(r));
					store.commit(SET_AUTH_ERRORS, parseErrors(r));
				}
				store.commit(SET_AUTH_LOADING, false);
			});
		});
	}

	login(email: string, password: string): void {
		const requestBody = new Map<string, string>();
		requestBody.set('email', email);
		requestBody.set('password', password);

		store.commit(SET_AUTH_LOADING, true);
		store.commit(SET_AUTH_ERRORS, []);

		axios.get(COOKIE_URL).then(() => {
			const request = new HttpRequest('/login', requestBody);
			doPost(request).then((r): void => {
				if (r.success) {
					store.commit(SET_AUTH_USER, new User(r.data.user));
				} else {
					console.log(parseErrors(r));
					store.commit(SET_AUTH_ERRORS, parseErrors(r));
				}
				store.commit(SET_AUTH_LOADING, false);
			});
		});
	}

	// export function retrieveCreator(id: string, onSuccess: (response: PostResponse) => void): void {
	// 	const request = new HttpRequest('/creator/' + id);
	// 	doGet(request).then((r): void => {
	// 		if (r.success) {
	// 			onSuccess(r);
	// 		} else {
	// 			onFail(r);
	// 		}
	// 	});
	// }
}

export default new AuthService();
