import { login, register } from '@/core/services/heinUserTest';
import { GET_USER_METADATA, State, _GET_USER_METADATA } from '@/core/store/app/types';
import store from '@/plugins/store';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import mutations from '@/core/store/app/mutations';
import getters from '@/core/store/app/getters';

const email = (Math.random() * 1000000).toString() + '@123.co.za';

// USER REGISTER
test('register', done => {
	const localVue = createLocalVue();
	localVue.use(Vuex);
	console.log(1, store.getters[GET_USER_METADATA].id);

	const registerTest = register(
		'HeinNewTest',
		email,
		'fancy123',
		'fancy123',
		() => {
			console.log(2, store.getters[GET_USER_METADATA].id);
			done();
		},
		() => {
			done();
		}
	);
	console.log(3, store.getters[GET_USER_METADATA].id);
	// console.log(registerTest);
	// console.log(store.state['app'].userMetaData);
	// console.log(store.getters.GET_USER_METADATA());
});

// // USER LOGIN
// test('login', done => {
// 	const loginTest = login(
// 		email,
// 		'fancy123',
// 		() => {
// 			done();
// 		},
// 		() => {
// 			done();
// 		}
// 	);
// 	console.log(loginTest);
// });

// RETRIEVE USER
// test('retrieveUser', done => {
// 	const loginTest = login(
// 		email,
// 		'fancy123',
// 		() => {
// 			done();
// 		},
// 		() => {
// 			done();
// 		}
// 	);
// 	console.log(loginTest);
// });
