<template>
	<v-card class="create-post pa-5 pb-3 mx-3 md-md-0" elevation="4" @mouseenter="hovering = true" @mouseleave="hovering = false">
		<div class="d-flex">
			<v-avatar size="40" class="profile-picture mr-5 ">
				<v-img
					class="rounded-circle"
					src="https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/19/UP4396-CUSA04449_00-AV00000000000194/image?w=320&h=320&bg_color=000000&opacity=100&_version=00_09_000"
					alt="John"
			/></v-avatar>
			<div class="d-flex flex-column full-width">
				<div style="width:100%; min-width: 100%; max-width:100%">
					<v-text-field v-model="title" solo hide-details dense flat height="40" class="mb-2 image-input-background weight-500" placeholder="Create a desire...">
						<template v-slot:append>
							<!-- @update:error="setErrorState" -->
							<v-file-input
								ref="file"
								v-model="inputImages"
								prepend-icon="mdi-file-image-outline"
								hide-input
								hide-details
								multiple
								:rules="rules"
								accept="image/png, image/jpeg, image/svg+xml"
								class="file-input pa-0 ma-0"
							>
								<template v-slot:message="{ message }">
									<div class="text-right">{{ message }}</div>
								</template>
							</v-file-input>
						</template>
					</v-text-field>
				</div>
				<v-expand-transition>
					<div v-if="showPrivacy" class=" d-flex flex-column align-center flex-md-row">
						<v-btn
							depressed
							color="transparent"
							class="button px-1 d-flex justify-center justify-md-start align-center text-decoration-none"
							width="155"
							height="24"
							@click="setForSubscribers"
						>
							<v-icon :color="isForSubscribers ? 'primary' : 'secondary'" class="pr-2">mdi-star-outline</v-icon>
							<div class="f-12 weight-500" :class="isForSubscribers ? 'primary--text' : 'tertiary--text'">For Subscribers</div>
						</v-btn>
						<v-btn
							depressed
							color="transparent"
							class="button px-1 ml-0 ml-md-1 mt-2 mt-md-0 d-flex justify-center justify-md-start align-center text-decoration-none"
							width="140"
							height="24"
							@click="setForPurchase"
						>
							<v-icon :color="isForPurchase ? 'primary' : 'secondary'" class="pr-2">mdi-currency-usd</v-icon>
							<div class="f-12 weight-500" :class="isForPurchase ? 'primary--text' : 'tertiary--text'">For Payment</div>
						</v-btn>
						<v-btn
							depressed
							color="transparent"
							class="button px-1 ml-0 ml-md-1 mt-2 mt-md-0 d-flex justify-center justify-md-start align-center text-decoration-none"
							width="125"
							height="24"
							@click="setForPublic"
						>
							<v-icon :color="isForPublic ? 'primary' : 'secondary'" class="pr-2">mdi-earth</v-icon>
							<div class="f-12 weight-500" :class="isForPublic ? 'primary--text' : 'tertiary--text'">For Public</div>
						</v-btn>
					</div>
				</v-expand-transition>
				<v-expand-transition>
					<div v-if="isAnyImageSelected">
						<!-- <v-img v-for="image in images" :key="image.url" :src="image.url" class="border-radius-5 mr-4" height="100" min-width="100" width="100" max-width="100"> -->
						<div class="full-width" style="height: 116px;">
							<div v-height="16"></div>
							<div ref="imagesListElement" class="mx-0 pb-2 d-flex align-center uploaded-images border-radius-5 ">
								<div v-for="(url, i) in urls" :key="url + i" class="d-flex">
									<div v-if="i == 0" v-intersect="mostLeftImageVisible"></div>
									<v-img :src="url" class="border-radius-5 mr-4" height="100" min-width="100" width="100" max-width="100">
										<div class="d-flex justify-end pa-1">
											<v-btn icon color="primary" class="white" x-small @click="removeImage(image)"><v-icon size="20">mdi-close-circle</v-icon></v-btn>
										</div>
										<template v-slot:placeholder>
											<image-loader />
										</template>
									</v-img>
									<div v-if="i == urls.length - 1" v-intersect="mostRighImageVisible"></div>
								</div>
							</div>
							<div class="d-flex full-width justify-space-between scroll-button-container">
								<v-btn v-if="showScrollLeft" icon class="primary white--text elevation-4 left-scroll-btn" @click="scrollImagesLeft">
									<v-icon>mdi-arrow-left</v-icon>
								</v-btn>
								<div v-else></div>
								<v-btn v-if="showScrollRight" icon class="primary white--text elevation-4 right-scroll-btn" @click="scrollImagesRight">
									<v-icon>mdi-arrow-right</v-icon>
								</v-btn>
								<div v-else></div>
							</div>
						</div>
					</div>
				</v-expand-transition>
				<v-expand-transition>
					<div v-if="isAnyImageSelected">
						<div class="d-flex align-end" style="height: 70px;">
							<v-textarea hide-details="" outlined no-resize height="60" class="f-12 lh-16"></v-textarea>
						</div>
						<!--  align-end -->
						<div class="d-flex flex-wrap justify-space-between align-end" style="min-height: 60px;">
							<v-btn color="secondary" class="button mt-3 mt-md-0" width="64" height="40" outlined @click="clearAll"
								><v-icon>mdi-trash-can-outline</v-icon></v-btn
							>

							<div class="d-flex align-center justify-center flex-wrap button">
								<div v-if="isForPurchase" v-height="40" class="d-flex align-center pr-0 pr-md-5 mt-3 mt-md-0 currency-text button">
									<v-text-field v-model="sellPrice" v-width="150" v-min-height="40" class="button" hide-details outlined placeholder="0.00" type="number">
										<template v-slot:prepend-inner>
											<v-chip v-height="40" v-width="40" label color="secondary" class="border-right-none">
												<v-icon size="24">mdi-currency-usd</v-icon>
											</v-chip>
										</template>
									</v-text-field>
								</div>

								<v-btn depressed color="primary" width="200" height="40" class="f-16 weight-700 text-decoration-none button mt-3 mt-md-0">Post</v-btn>
							</div>
						</div>
					</div>
				</v-expand-transition>
			</div>
		</div>
	</v-card>
</template>

<script lang="ts">
import ImageLoader from '@/core/components/loaders/ImageLoader.vue';
import { Privacy } from '@/core/models/privacy';
import InputImage from '@/pages/user/models/inputImage';

import Vue from 'vue';
export default Vue.extend({
	components: { ImageLoader },
	data() {
		return {
			title: '',
			description: '',
			grow: false,
			privacy: -1,
			hovering: false,

			sellPrice: undefined as undefined | number,

			showScrollLeft: true,
			showScrollRight: true,

			rules: [
				(value: File[]): any => (!!value && !!value.length) || 'Field required',
				(value: File[]): any => !value || !value.length || value.length == value.filter(file => file.size < 2097152).length || 'Max size 2MB'
			],
			inputImages: [] as File[],
			images: [] as Array<InputImage>,
			urls: [
				'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmg1o1wBgvA37dWyCR0AWV2R4AtCMWEsuQ_g&usqp=CAU',
				'https://mocah.org/uploads/posts/531080-cat-4k-large.jpg',
				'https://persiancatcorner.com/wp-content/uploads/2018/09/Cute-Persian-Kitten-e1537133479384.jpg',
				'https://dollfacepersiankittens.com/wp-content/uploads/2014/06/1f7a0977EDSM.jpg',
				'https://wallpaperaccess.com/full/1209274.jpg',
				'https://is2-ssl.mzstatic.com/image/thumb/Purple125/v4/9e/0f/d7/9e0fd7e0-c936-f33f-7ef6-d78fe5764ff1/source/512x512bb.jpg',
				'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmg1o1wBgvA37dWyCR0AWV2R4AtCMWEsuQ_g&usqp=CAU',
				'https://mocah.org/uploads/posts/531080-cat-4k-large.jpg'
			]
		};
	},
	computed: {
		showPrivacy(): boolean {
			return this.isPrivacySelected || this.hovering;
		},
		isPrivacySelected(): boolean {
			return true;
			// TODO return this.privacy != -1;
		},
		isForPublic(): boolean {
			return this.privacy == Privacy.Public;
		},
		isForSubscribers(): boolean {
			return this.privacy == Privacy.Subscribers;
		},
		isForPurchase(): boolean {
			return this.privacy == Privacy.Purchase;
		},
		isAnyImageSelected(): boolean {
			// TODO return !!this.images.length;
			return true;
		},
		imagesListElement(): HTMLElement {
			return this.$refs.imagesListElement as HTMLElement;
		}
	},
	watch: {
		inputImages(): void {
			if (this.inputImages.length == 0) {
				return;
			}

			if (!this.isPrivacySelected) {
				this.setForPublic();
			}

			this.inputImages.forEach(inputImage => {
				const image = new InputImage(URL.createObjectURL(inputImage), inputImage);
				if (!this.images.find(i => i.url == image.url)) {
					this.images.push(image);
				}
			});
			this.inputImages = [];
		}
	},
	methods: {
		resetPrivacy(): void {
			this.privacy = -1;
		},
		setForPublic(): void {
			if (!this.isForPublic) {
				this.privacy = Privacy.Public;
			} else {
				this.resetPrivacy();
			}
		},
		setForSubscribers(): void {
			if (!this.isForSubscribers) {
				this.privacy = Privacy.Subscribers;
			} else {
				this.resetPrivacy();
			}
		},
		setForPurchase(): void {
			if (!this.isForPurchase) {
				this.privacy = Privacy.Purchase;
			} else {
				this.resetPrivacy();
			}
		},
		clearAll(): void {
			this.title = '';
			this.description = '';
			this.resetPrivacy();
			this.images = [];
		},
		removeImage(image: InputImage): void {
			const index = this.images.findIndex(i => i.url == image.url);
			if (index != -1) {
				this.images.splice(index, 1);
			}
		},
		scrollImagesLeft(): void {
			this.imagesListElement.scrollTo({
				top: 0,
				left: this.imagesListElement.scrollLeft - 235,
				behavior: 'smooth'
			});
		},
		scrollImagesRight(): void {
			this.imagesListElement.scrollTo({
				top: 0,
				left: this.imagesListElement.scrollLeft + 235,
				behavior: 'smooth'
			});
		},
		mostLeftImageVisible(observers: Array<IntersectionObserverEntry>): void {
			this.showScrollLeft = !observers[0].isIntersecting;
		},
		mostRighImageVisible(observers: Array<IntersectionObserverEntry>): void {
			this.showScrollRight = !observers[0].isIntersecting;
		}
	}
});
</script>

<style scoped lang="scss">
.profile-picture {
	border: 2px var(--v-primary-base) solid;
}

.follows-scroll-container,
.scroll-button-container {
	pointer-events: none;

	.left-scroll-btn {
		left: -20px;
		pointer-events: all;
	}

	.right-scroll-btn {
		right: -20px;
		pointer-events: all;
	}
}

.scroll-button-container {
	position: relative;
	top: -75px;
}

.uploaded-images {
	-ms-overflow-style: none; /* Internet Explorer 10+ */
	scrollbar-width: none; /* Firefox */
	overflow-x: auto;
}

.xs .uploaded-images {
	max-width: 250px;
}

.sm .uploaded-images {
	max-width: 450px;
}

.md .uploaded-images {
	max-width: 775px;
}

.lg .uploaded-images {
	max-width: 465px;
}

.xl .uploaded-images {
	max-width: 575px;
}

.uploaded-images::-webkit-scrollbar {
	display: none; /* Safari and Chrome */
}

.xs,
.sm {
	.button {
		width: 100% !important;
	}
}
</style>

<style>
.image-input-background.v-input .v-input__slot {
	/* image-input-background */
	background: var(--v-image-input-background) !important;
}

.image-input-background .v-text-field__slot {
	-webkit-user-select: none; /* Safari */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* IE10+/Edge */
	user-select: none; /* Standard */
}

.create-post textarea {
	line-height: 16px;
}

.create-post .file-input .v-input__prepend-outer {
	margin-top: 6px !important;
}

.create-post .file-input button {
	color: var(--v-secondary-base);
}

.currency-text .v-input__control,
.currency-text .v-input__slot {
	height: 40px !important;
	min-height: 40px !important;
}

.currency-text input[type='number'] {
	-moz-appearance: textfield !important;
	text-align: end;
}

.currency-text input::-webkit-outer-spin-button,
.currency-text input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

.currency-text .v-input__prepend-inner {
	margin-top: 0px;
}

.currency-text .v-input__slot {
	padding-left: 1px !important;
}

.currency-text input {
	text-align: left !important;
	padding-left: 4px;
}

.currency-text .v-input__prepend-inner {
	margin-top: 0px;
}
</style>
