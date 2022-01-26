<template>
	<div class="home-background" style="height:100%;">
		<div class="tertiary">
			<div class="width-100 home-background pb-4 d-flex flex-column-reverse flex-lg-row align-center justify-center justify-lg-space-between flex-wrap home-page">
				<div class="width-45 d-flex flex-column flex-column-reverse align-center justify-center mt-10 mt-lg-0">
					<div class="d-flex flex-column align-center align-lg-start">
						<div class="f-54 lh-54 weight-700 tertiary--text text-center">Personalised Content</div>
						<div class="f-20 weight-600 quaternary--text mb-7 text-center">By your favourite Creators</div>
						<v-text-field v-width="340" prepend-inner-icon="mdi-magnify" dense placeholder="Search Creators" outlined></v-text-field>
					</div>
				</div>
				<div class="d-flex align-center align-lg-start justify-start pt-4 pt-lg-12 pr-0 pr-lg-12" :class="{ 'width-55': !isSmall, 'width-100': isSmall }">
					<v-img src="@/assets/home/profile_banner.png"></v-img>
				</div>
			</div>
		</div>
		<img src="@/assets/wave_small_cut_2.png" style="transform: scaleY(-1);" class="full-width" />
		<div class="tertiary">
			<div class=" home-background d-flex flex-column align-center justify-center full-height" style="padding-top: 2%;">
				<div class="d-flex flex-column pt-12 follows-container">
					<div class="px-2 d-flex justify-space-between align-end mb-5">
						<div class="f-38 weight-700 tertiary--text">Featured</div>
						<v-btn text class="f-24 weight-700 tertiary--text d-flex align-center text-none px-0" @click.stop="">See all</v-btn>
					</div>
					<div>
						<div ref="featuredList" class="d-flex align-center follows mx-0 pb-2">
							<user-card v-for="i in 5" :key="i" class="mx-1 mx-sm-2" />
						</div>
						<div class="d-flex full-width justify-space-between follows-scroll-container">
							<v-btn height="60" width="60" icon class="primary white--text elevation-4 left-scroll-btn" @click="featuredLeft">
								<v-icon size="38">mdi-arrow-left</v-icon>
							</v-btn>
							<v-btn height="60" width="60" icon class="primary white--text elevation-4 right-scroll-btn" @click="featuredRight">
								<v-icon size="38">mdi-arrow-right</v-icon>
							</v-btn>
						</div>
					</div>
				</div>

				<div class="d-flex flex-column pt-12 follows-container">
					<div class="px-2 d-flex justify-space-between align-end mb-5">
						<div class="f-38 weight-700 tertiary--text">Top New</div>
						<v-btn text class="f-24 weight-700 tertiary--text d-flex align-center text-none px-0" @click.stop="">See all</v-btn>
					</div>
					<div>
						<div ref="newList" class="d-flex align-center follows mx-0 pb-2">
							<user-card v-for="i in 5" :key="i" class="mx-1 mx-sm-2" />
						</div>
						<div class="d-flex full-width justify-space-between follows-scroll-container">
							<v-btn height="60" width="60" icon class="primary white--text elevation-4 left-scroll-btn" @click="newLeft">
								<v-icon size="38">mdi-arrow-left</v-icon>
							</v-btn>
							<v-btn height="60" width="60" icon class="primary white--text elevation-4 right-scroll-btn" @click="newRight">
								<v-icon size="38">mdi-arrow-right</v-icon>
							</v-btn>
						</div>
					</div>
				</div>
			</div>
		</div>
		<img src="@/assets/wave_small.png" class="full-width" />

		<div class="full-width d-flex mt-n2">
			<v-row no-gutters>
				<v-col cols="12" lg="6" class="primary d-flex flex-column justify-center">
					<div class="tertiary pt-2">
						<v-img v-if="!isSmall" src="@/assets/test2.png" class="mt-n4" />
					</div>
					<v-img src="@/assets/home/home_stance.png" class="ml-0 ml-lg-12" :class="{ 'stance-image-mobile': isSmall }">
						<div class=" full-width d-flex justify-center pt-8">
							<div class="f-75 lh-75 weight-700 font-italic white--text width-70 text-left">START YOUR DESIARY!</div>
						</div>
					</v-img>
				</v-col>
				<v-col cols="12" lg="6" class="tertiary">
					<v-row class="pt-12" no-gutters>
						<v-col cols="6" lg="12" class="d-flex justify-center justify-lg-start">
							<home-stat-card title="2542" subtitle="Creator" icon="$vuetify.icons.home" class="stat-card" :class="{ 'left-20': !isSmall }" />
						</v-col>
						<v-col cols="6" lg="12" class="d-flex justify-center justify-lg-start">
							<home-stat-card title="21322" subtitle="Posts" icon="$vuetify.icons.camera" class="stat-card" :class="{ 'mt-n2 left-50': !isSmall }" />
						</v-col>
						<v-col cols="6" lg="12" class="d-flex justify-center justify-lg-start">
							<home-stat-card title="4233" subtitle="Monthly Subscribers" icon="$vuetify.icons.plus" class="stat-card" :class="{ 'mt-n2 left-25': !isSmall }" />
						</v-col>
						<v-col cols="6" lg="12" class="d-flex justify-center justify-lg-start">
							<home-stat-card title="$2342" subtitle="Average Income" icon="$vuetify.icons.home" class="stat-card " :class="{ 'mt-n2 left-55': !isSmall }" />
						</v-col>
						<v-col cols="6" lg="12" class="d-flex justify-center justify-lg-start">
							<home-stat-card title="234" subtitle="Average Subscribers" icon="$vuetify.icons.camera" class="stat-card" :class="{ 'mt-n2 left-15': !isSmall }" />
						</v-col>
						<v-col cols="6" lg="12" class="d-flex justify-center justify-lg-start">
							<home-stat-card title="5%" subtitle="Subscription Fee" icon="$vuetify.icons.plus" class="stat-card" :class="{ 'mt-n2 left-45': !isSmall }" />
						</v-col>
					</v-row>
					<div class="d-flex justify-center pt-12 pb-12">
						<v-btn width="350" elevation="5" height="52" color="primary" class="f-24 weight-700">Start my Desiary</v-btn>
					</div>
				</v-col>
			</v-row>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import UserCard from '@/core/components/cards/search/UserCard.vue';
// import { doGet } from '@/core/services/httpService';
// import HttpRequest from '@/core/models/http/httpRequest';
import User from '@/core/models/entities/user';
import HomeStatCard from './HomeStatCard.vue';

export default Vue.extend({
	components: { UserCard, HomeStatCard },
	data() {
		return { desiresScroll: 0, users: [] as Array<User> };
	},
	computed: {
		featuredListElement(): HTMLElement {
			return this.$refs.featuredList as HTMLElement;
		},
		newListElement(): HTMLElement {
			return this.$refs.newList as HTMLElement;
		},
		isSmall(): boolean {
			return this.$vuetify.breakpoint.smAndDown;
		}
	},
	mounted() {
		// const request = new HttpRequest("/search/''");
		// doGet(request).then(r => {
		// 	// this.users = r.data.data.map((response: any) => toUser(response));
		// });
	},
	methods: {
		featuredLeft(): void {
			this.featuredListElement.scrollTo({
				top: 0,
				left: this.featuredListElement.scrollLeft - 380.2,
				behavior: 'smooth'
			});
		},
		featuredRight(): void {
			this.featuredListElement.scrollTo({
				top: 0,
				left: this.featuredListElement.scrollLeft + 381.2,
				behavior: 'smooth'
			});
		},
		newLeft(): void {
			this.newListElement.scrollTo({
				top: 0,
				left: this.newListElement.scrollLeft - 380.2,
				behavior: 'smooth'
			});
		},
		newRight(): void {
			this.newListElement.scrollTo({
				top: 0,
				left: this.newListElement.scrollLeft + 381.2,
				behavior: 'smooth'
			});
		},
		openDialog(): void {
			this.$emit('openDialog');
		}
	}
});
</script>

<style scoped lang="scss">
.profile-picture {
	border-width: 6px;
	border-style: solid;
}

.stance-image-top {
	height: 60px;
	width: 100vw;
}

.stance-image-mobile {
	height: 300px;
	width: 90vw;

	.f-75 {
		font-size: 50px !important;
		line-height: 50px;
	}
}

.border-tertiary {
	border-color: var(--v-tertiary-base);
}

.stat-card {
	position: relative;
	width: fit-content;
}

.follows-scroll-container {
	pointer-events: none;

	.left-scroll-btn {
		left: -25px;
		pointer-events: all;
	}

	.right-scroll-btn {
		right: -25px;
		pointer-events: all;
	}
}

.follows-scroll-container {
	position: relative;
	top: -300px;
}

.follows-container {
	max-width: 1523px;
}

.xs {
	.follows-container {
		max-width: 365px;
	}
}

.sm {
	.follows-container {
		max-width: 450px;
	}
}

.md {
	.follows-container {
		max-width: 850px;
	}
}

.lg {
	.follows-container {
		max-width: 1200px;
	}
}

.follows {
	-ms-overflow-style: none; /* Internet Explorer 10+ */
	scrollbar-width: none; /* Firefox */
	overflow-x: auto;
}
.follows::-webkit-scrollbar {
	display: none; /* Safari and Chrome */
}

.left-15 {
	left: 15%;
}

.left-20 {
	left: 20%;
}

.left-25 {
	left: 25%;
}

.left-45 {
	left: 45%;
}

.left-50 {
	left: 50%;
}

.left-55 {
	left: 55%;
}
</style>
