import store from '@/plugins/store';
import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { EMPTY_USER } from '../models/entities/user';
import authService from '../services/authService';
// import { login, register } from '../services/authService';
import { COOKIE_AUTH_USER_ID, IS_AUTH, SET_AUTH_USER } from '../store/auth';

describe('Test', () => {
	jest.setTimeout(12000);
	beforeEach(() => {
		store.commit(SET_AUTH_USER, EMPTY_USER);
	});

	test('register', async () => {
		const localVue = createLocalVue();
		localVue.use(Vuex);

		const email = (Math.random() * 1000000).toString() + '@123.co.za';

		authService.register(email, 'fancy123', 'fancy123', 'HeinNewTest');
		await new Promise(r => setTimeout(r, 4000));
		expect(store.getters[IS_AUTH]).toBeTruthy();
	});

	// test('login', async () => {
	// 	const localVue = createLocalVue();
	// 	localVue.use(Vuex);

	// 	expect(store.getters[IS_AUTH]).toBeFalsy();

	// 	const email = 'meaaepo@gmail.com';
	// 	const password = 'meepo123';

	// 	authService.login(email, password);
	// 	await new Promise(r => setTimeout(r, 4000));

	// 	expect(store.getters[IS_AUTH]).toBeTruthy();
	// });

	// test('login failure', async () => {
	// 	const localVue = createLocalVue();
	// 	localVue.use(Vuex);

	// 	expect(store.getters[IS_AUTH]).toBeFalsy();

	// 	const email = 'meaaepo@gmail.com';
	// 	const password = 'DUD_PW';

	// 	authService.login(email, password);
	// 	await new Promise(r => setTimeout(r, 4000));

	// 	expect(store.getters[IS_AUTH]).toBeTruthy();
	// });

	// test('load session user', async () => {
	// 	const localVue = createLocalVue();
	// 	localVue.use(Vuex);

	// 	// Getting an authed id

	// 	authService.login('1@gmail.com', '1@gmail.com');
	// 	await new Promise(r => setTimeout(r, 4000));
	// 	expect(store.getters[IS_AUTH]).toBeTruthy();

	// 	const email = 'meaaepo@gmail.com';
	// 	const password = 'DUD_PW';

	// 	// COOKIE_AUTH_USER_ID
	// 	localStorage.setItem(COOKIE_AUTH_USER_ID, '5');
	// 	authService.loadSessionUser();
	// 	await new Promise(r => setTimeout(r, 4000));

	// 	// expect(store.getters[IS_AUTH]).toBeTruthy();
	// });
});
