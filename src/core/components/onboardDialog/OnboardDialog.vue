<template>
	<v-card elevation="1" class="onboard-container d-flex flex-column flex-column-reverse flex-lg-row" min-height="720" max-width="1000" style="width: fit-content;">
		<div v-width="500" v-min-height="720" class="d-flex flex-column align-center justify-space-between py-7 px-0 px-md-12" style="max-width: 84vw;">
			<onboard-progress-indicator :value="activeSlide" :slides="slides.length" />

			<v-spacer></v-spacer>
			<div class="full-height d-flex flex-column" :class="[activeSlide == 1 ? 'justify-start setup-wrapper' : 'justify-center']">
				<connect v-if="activeSlide == 0" @next="next" @showError="showError" />
				<setup v-else-if="activeSlide == 1" :creator-form="creatorForm" @back="back" @next="next" @showError="showError" />
				<verify v-else-if="activeSlide == 2" :creator-form="creatorForm" @back="back" @next="next" @showError="showError" />
				<thank-you v-else @close="close" />
			</div>
			<v-spacer></v-spacer>
		</div>

		<v-img width="500" height="720" class="onboard-image primary" style="max-width: 84vw;" :src="image">
			<div class="full-height d-flex flex-column justify-center align-center text-center white--text f-38 weight-700">
				<!-- eslint-disable-next-line vue/no-v-html -->
				<div v-if="imageText" v-html="imageText"></div>
			</div>
			<template v-slot:placeholder>
				<image-loader />
			</template>
		</v-img>
		<div class="d-flex justify-end" style="position: absolute; top: 0; right: 0px;">
			<v-btn class="ma-2" icon min-height="64" min-width="64" :color="btnColor" @click="close"><v-icon size="64">mdi-close-circle-outline</v-icon></v-btn>
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

import Connect from './components/Connect.vue';
import Setup from './components/Setup.vue';
import Verify from './components/Verify.vue';
import ThankYou from './components/ThankYou.vue';

import CreatorForm from './models/creatorForm';

export default Vue.extend({
	components: {
		ImageLoader,
		OnboardProgressIndicator,
		Connect,
		Setup,
		Verify,
		ThankYou
	},
	props: {
		btnColor: {
			type: String,
			default: 'white'
		}
	},
	data() {
		return {
			creatorForm: new CreatorForm(),
			activeSlide: 0,
			slides: [
				{
					img: require('@/assets/dialog/connect.svg'),
					text: 'Connect your wallet <br /> and explore the NFT <br /> world'
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
			return this.slides[this.activeSlide].img;
		},
		imageText(): string {
			return this.slides[this.activeSlide].text;
		},
		walletAddress(): string {
			return this.$store.getters['getWalletAddress'];
		}
	},
	mounted() {
		if (this.walletAddress) {
			this.next();
		}
		this.creatorForm = new CreatorForm();
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
