<template>
	<v-card elevation="1" class="onboard-container d-flex flex-column flex-column-reverse flex-lg-row" min-height="720" max-width="1000" style="width: fit-content;">
		<div v-width="500" v-min-height="720" class="d-flex flex-column align-center justify-space-between py-7 px-12">
			<onboard-progress-indicator :value="activeSlide" :slides="slides.length" />
			<v-spacer></v-spacer>
			<div class="full-height d-flex flex-column justify-start" style="padding-top: 100px;">
				<connect v-if="activeSlide == 0" @next="next" />
				<setup v-else-if="activeSlide == 1" @next="next" />
				<thank-you v-else />
			</div>
			<v-spacer></v-spacer>
		</div>

		<v-img width="500" max-width="500" height="720" class="onboard-image primary" :src="image">
			<div class="image-gradient full-height d-flex flex-column justify-center align-center text-center white--text f-38 weight-700">
				{{ imageText }}
			</div>
			<template v-slot:placeholder>
				<image-loader />
			</template>
		</v-img>
		<div class="d-flex justify-end" style="position: absolute; top: 0; right: 0px;">
			<v-btn class="ma-2" icon min-height="64" min-width="64" :color="btnColor" @click="emitClose"><v-icon size="64">mdi-close-circle-outline</v-icon></v-btn>
		</div>
	</v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import OnboardProgressIndicator from './OnboardProgressIndicator.vue';
import ImageLoader from '@/core/components/loaders/ImageLoader.vue';

import Connect from './components/Connect.vue';
import Setup from './components/Setup.vue';
import ThankYou from './components/ThankYou.vue';

export default Vue.extend({
	components: {
		ImageLoader,
		OnboardProgressIndicator,
		Connect,
		Setup,
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
			activeSlide: 0,
			slides: [
				{
					img: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80',
					text: 'The number one NFT site for content creators'
				},
				{
					img:
						'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d',
					text: 'Something something please verify'
				},
				{
					img: 'https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg',
					text: 'Zeep zorp for the fans'
				}
			]
		};
	},
	computed: {
		image(): string {
			return this.slides[this.activeSlide].img;
		},
		imageText(): string {
			return this.slides[this.activeSlide].text;
		}
	},
	methods: {
		emitClose(): void {
			this.activeSlide = 0;
			this.$emit('close');
		},
		next(): void {
			this.activeSlide++;
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

.xs,
.sm {
	.onboard-container .onboard-image.v-image {
		border-radius: 0px !important;
		border-top-left-radius: 10px !important;
		border-top-right-radius: 10px !important;
	}
}
</style>

<style scoped>
.onboard-image .image-gradient {
	background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
}
</style>
