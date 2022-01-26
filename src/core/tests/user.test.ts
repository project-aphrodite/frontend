import store from '@/plugins/store';
import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { register } from '../services/userService';
import { GET_USER_METADATA } from '../store/user';

test('register', async () => {
	const localVue = createLocalVue();
	localVue.use(Vuex);
	console.log(1, store.getters[GET_USER_METADATA].id);

	const email = (Math.random() * 1000000).toString() + '@123.co.za';

	register('HeinNewTest', email, 'fancy123', 'fancy123');
	await new Promise(r => setTimeout(r, 4000));
	console.log(3, store.getters[GET_USER_METADATA].id);
	expect(store.getters[GET_USER_METADATA].email).toBe(email);
});
