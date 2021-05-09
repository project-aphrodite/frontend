<template>
	<div v-if="user" v-height="500" class="d-flex flex-column align-center full-width user-header-container">
		<div class="tertiary header-image-container full-width">
			<v-img class="header-image white--text" height="400px" :src="user.bannerUrl">
				<div class="d-flex flex-column align-center full-width full-height">
					<div class="page-title f-54 weight-700">{{ displayName }}</div>
				</div>
				<template v-slot:placeholder>
					<div v-height="150" class="d-flex flex-column justify-center align-center mt-4">
						<v-progress-circular indeterminate color="primary"></v-progress-circular>
					</div>
				</template>
			</v-img>
		</div>
		<div class="d-flex flex-column align-center justify-space-between px-4" style="width: 100%; max-width: 1560px; position: absolute; top: 230px;">
			<div class="d-flex align-end tertiary--text">
				<div class="weight-700 d-flex flex-column align-end stat-container">
					<div class="stat-value tertiary--text ">0</div>
					<div class="stat-text primary--text">NFTs</div>
				</div>
				<v-avatar size="200" class="mx-3">
					<v-img class="header-profile-picture primary" :src="user.profileUrl" alt="John">
						<template v-slot:placeholder>
							<imager-loader color="white" />
						</template>
					</v-img>
				</v-avatar>
				<div class="weight-700 d-flex flex-column align-start stat-container">
					<div class="stat-value tertiary--text ">{{ user.followerCount }}</div>
					<div class="stat-text primary--text">Followers</div>
				</div>
			</div>
			<div class="ml-auto my-2 my-md-0">
				<v-btn class="primary text-capitalize" depressed width="140">Create</v-btn>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import ImagerLoader from '@/core/components/loaders/ImageLoader.vue';
import User, { EMPTY_USER } from '@/core/models/user';

export default Vue.extend({
	components: { ImagerLoader },
	props: {
		user: {
			type: User,
			default: (): User => EMPTY_USER as User
		}
	},
	computed: {
		displayName(): string {
			if (this.user.creator) {
				return this.user.creator.name + ' ' + this.user.creator.surname;
			}
			return this.user.username;
		}
	}
});
</script>

<style scoped>
.user-header-container {
	margin-bottom: 10px;
}

.page-title {
	top: 30%;
	position: absolute;
}

.header-image {
	clip-path: polygon(0% 0%, 0% 70%, 5% 71.5%, 15% 74.5%, 25% 77%, 30% 77.8%, 40% 78.5%, 50% 78.8%, 60% 78.5%, 70% 77.8%, 75% 77%, 85% 74.5%, 95% 71.5%, 100% 70%, 100% 0%);
}

.stat-container {
	width: 100px;
}

.stat-value {
	font-size: 38px;
	height: 45px;
}

.xs .stat-value,
.sm .stat-value {
	font-size: 20px;
	height: 27px;
}

.stat-text {
	font-size: 16px;
}

.xs .stat-text,
.sm .stat-text {
	font-size: 12px;
}

.header-image-container {
	padding-bottom: 5px;
	clip-path: polygon(
		0% 0%,
		0% 69.9%,
		5% 71.7%,
		15% 74.7%,
		25% 77.2%,
		30% 78%,
		40% 78.9%,
		50% 79.2%,
		60% 78.9%,
		70% 78%,
		75% 77.2%,
		85% 74.7%,
		95% 71.7%,
		100% 69.9%,
		100% 0%
	);
}

.header-profile-picture {
	border: 6px var(--v-primary-base) solid;
}
</style>
<style>
.header-image-container .v-image__image.v-image__image--cover {
	filter: brightness(95%) !important;
}
</style>
