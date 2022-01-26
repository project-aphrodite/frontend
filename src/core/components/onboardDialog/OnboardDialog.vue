<template>
	<v-card elevation="1" class="onboard-container d-flex flex-column flex-column-reverse flex-lg-row" min-height="720" max-width="1000" style="width: fit-content;">
		<div v-width="500" v-min-height="720" class="d-flex flex-column align-center justify-space-between py-7 px-0 px-md-12" style="max-width: 84vw;">
			<onboard-progress-indicator v-if="activeSlide != 0" :value="activeSlide" :slides="slides.length" />

			<div class="full-height d-flex flex-column" :class="[activeSlide == 1 ? 'justify-start setup-wrapper' : 'justify-center']">
				<login v-if="loginScreen" @go-create="loginScreen = false">Login</login>
				<template v-else>
					<create v-if="activeSlide == 0" @next="next" @showError="showError" @go-login="loginScreen = true" />
					<personalise v-else-if="activeSlide == 1" :creator-form="creatorForm" @back="back" @next="next" @showError="showError" />
					<verify v-else-if="activeSlide == 2" :creator-form="creatorForm" @back="back" @next="next" @showError="showError" />
					<thank-you v-else @close="close" />
				</template>
			</div>
			<v-spacer></v-spacer>
		</div>

		<v-img width="500" height="720" class="onboard-image primary d-none d-md-flex" style="max-width: 84vw;" :src="image">
			<div class="full-height d-flex flex-column justify-center align-center text-center white--text f-38 weight-700">
				<!-- eslint-disable-next-line vue/no-v-html -->
				<div v-if="imageText" v-html="imageText"></div>
			</div>
			<template v-slot:placeholder>
				<image-loader />
			</template>
		</v-img>
		<div class="d-flex justify-end" style="position: absolute; top: 0; right: 0px;">
			<v-btn class="ma-2" :class="[$vuetify.breakpoint.smAndDown ? 'tertiary--text' : 'white--text']" icon min-height="64" min-width="64" @click="close"
				><v-icon size="64">mdi-close-circle-outline</v-icon></v-btn
			>
		</div>

		<v-snackbar v-model="showSnackbarError" timeout="5000" outlined color="error" multi-line>
			<!-- eslint-disable-next-line vue/no-v-html -->
			<div v-html="snackbarErrorMessage"></div>
			<template v-slot:action="{ attrs }">
				<v-btn color="error" text v-bind="attrs" icon @click="showSnackbarError = false">
					<v-icon>
						mdi-close-circle
					</v-icon>
				</v-btn>
			</template>
		</v-snackbar>
	</v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import OnboardProgressIndicator from './OnboardProgressIndicator.vue';
import ImageLoader from '@/core/components/loaders/ImageLoader.vue';

import Create from './components/Create.vue';
import Personalise from './components/Personalise.vue';
import Verify from './components/Verify.vue';
import ThankYou from './components/ThankYou.vue';

import CreatorForm from '@/core/models/forms/creatorForm';
import Login from './components/Login.vue';

export default Vue.extend({
	components: {
		ImageLoader,
		OnboardProgressIndicator,
		Create,
		Personalise,
		Verify,
		ThankYou,
		Login
	},
	props: {
		loginScreenProp: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			creatorForm: new CreatorForm(),
			activeSlide: 0,
			loginScreen: false,
			loginSlide: {
				img: require('@/assets/dialog/setup.svg'),
				text: 'Let me in!'
			},
			slides: [
				{
					img: require('@/assets/dialog/setup.svg'),
					text: "Let's get started!"
				},
				{
					img: require('@/assets/dialog/setup.svg'),
					text: 'We only need a <br /> bit more info <br /> for a personalised <br /> experience!'
				},
				{
					img: require('@/assets/dialog/verify.svg'),
					text: ''
				},
				{
					img: require('@/assets/dialog/thankYou.svg'),
					text: 'Almost there! <br /> We’re glad to have <br /> you onboard.'
				}
			],
			showSnackbarError: false,
			snackbarErrorMessage: ''
		};
	},
	computed: {
		image(): string {
			if (this.loginScreen) {
				return this.loginSlide.img;
			}
			return this.slides[this.activeSlide].img;
		},
		imageText(): string {
			if (this.loginScreen) {
				return this.loginSlide.text;
			}
			return this.slides[this.activeSlide].text;
		},
		walletAddress(): string {
			return 'test'; //this.$store.getters['getWalletAddress'];
		}
	},
	created() {
		this.creatorForm.setMock();
	},
	mounted() {
		this.loginScreen = this.loginScreenProp;
	},
	methods: {
		close(): void {
			this.activeSlide = 0;
			this.$emit('close');
		},
		back(): void {
			this.activeSlide--;
		},
		next(): void {
			this.activeSlide++;
		},
		showError(message: string, toSlide?: number): void {
			this.showSnackbarError = true;
			this.snackbarErrorMessage = message;
			if (toSlide) {
				this.activeSlide = toSlide;
			}
		}
	}
});
</script>

<style lang="scss">
.onboard-container .onboard-image.v-image {
	border-radius: 0px !important;
	border-top-right-radius: 10px !important;
	border-bottom-right-radius: 10px !important;
}

.onboard-container .setup-wrapper {
	padding-top: 61px;
}

.xs,
.sm {
	.onboard-container .setup-wrapper {
		padding-top: 0px;
		margin-top: -95px;
	}
}

.xs,
.sm {
	.onboard-container .onboard-image.v-image {
		border-radius: 0px !important;
		border-top-left-radius: 10px !important;
		border-top-right-radius: 10px !important;
	}
}

.onboard-image .v-image__image {
	background-size: auto !important;
}
</style>
