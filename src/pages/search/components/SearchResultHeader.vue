<template>
	<div v-height="306" class="d-flex flex-column align-center full-width user-header-container">
		<div class="header-image-container full-width">
			<v-img class="header-image white--text primary tertiary" height="177" :src="user.bannerUrl">
				<div v-if="user.creator && user.creator.verified" class="full-width d-flex justify-end pa-2">
					<v-icon color="white">mdi-shield-check</v-icon>
				</div>
				<template v-slot:placeholder>
					<div v-height="80" class="d-flex flex-column justify-center align-center mt-4">
						<v-progress-circular indeterminate color="primary"></v-progress-circular>
					</div>
				</template>
			</v-img>
		</div>
		<div class="d-flex flex-column align-center justify-space-between" style="width: 60%; position: absolute; top: 106px;">
			<div class="d-flex align-end tertiary--text">
				<v-avatar size="200" class="mx-3">
					<v-img class="header-profile-picture primary" :src="user.profileUrl" alt="John">
						<template v-slot:placeholder>
							<imager-loader color="white" />
						</template>
					</v-img>
				</v-avatar>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

import ImagerLoader from '@/core/components/loaders/ImageLoader.vue';
import User from '@/core/models/user';

export default Vue.extend({
	components: {
		ImagerLoader
	},
	props: {
		user: {
			type: User,
			required: true
		}
	}
});
</script>

<style scoped>
.header-image {
	border-radius: 10px;
	clip-path: polygon(0% 0%, 0% 90%, 5% 91.5%, 15% 94.5%, 25% 97%, 30% 97.8%, 40% 98.5%, 50% 98.8%, 60% 98.5%, 70% 97.8%, 75% 97%, 85% 94.5%, 95% 91.5%, 100% 90%, 100% 0%);
}

.header-profile-picture {
	border: 6px var(--v-primary-base) solid;
}
</style>
