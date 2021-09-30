import Vue from 'vue';
import Vuetify from 'vuetify';

// import colors from 'vuetify/lib/util/colors';
import HomeLogoIcon from '@/assets/icons/HomeLogoIcon.vue';
import HomeCameraIcon from '@/assets/icons/HomeCameraIcon.vue';
import HomePlusIcon from '@/assets/icons/HomePlusIcon.vue';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		options: {
			customProperties: true
		},
		themes: {
			light: {
				primary: '#D65273',
				secondary: '#52D6B5',
				tertiary: '#454F51',
				quaternary: '#A2A7B0',
				quinary: '#4CA0F0',

				'image-input-background': '#EBEFF3',

				'home-background': '#F5F5F6',
				text: '#454F51',
				'input-border-color': '#E6ECF5',
				'input-border-color-active': '#4CA0F0',
				'file-upload-border': '#E5E8EB'
			}
		}
	},
	icons: {
		values: {
			home: {
				component: HomeLogoIcon
			},
			camera: {
				component: HomeCameraIcon
			},
			plus: {
				component: HomePlusIcon
			}
		}
	}
});
