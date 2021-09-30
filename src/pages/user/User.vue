<template>
	<div>
		<div v-if="errorState" style="height: 40vh;" class="d-flex justify-center align-center f-54 primary--text">
			User does not exit
		</div>
		<div v-else>
			<user-header />

			<br />

			<div class="d-flex flex-column">
				<template v-if="!isAuth">
					<v-container>
						<v-row justify="center">
							<v-col cols="12" lg="3" class="d-flex flex-column align-center">
								<bio-card :user="viewUser" class="mb-0 mb-md-5" />
								<media-card class="d-none d-lg-block" />
							</v-col>
							<v-col cols="12" lg="6" class="px-0 d-flex flex-column feed-wrapper">
								<create-post v-if="true" class="mb-5"></create-post>
								<feed />
							</v-col>
							<v-col cols="12" lg="3" class="d-flex flex-column align-center">
								<top-subscribers-card class="mb-5 d-none d-lg-block" />
								<top-contributors-card class="d-none d-lg-block" />
							</v-col>
						</v-row>
					</v-container>
				</template>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import UserHeader from '@/pages/user/components/UserHeader.vue';

import User from '@/core/models/user';

import BioCard from '@/pages/user/components/BioCard.vue';
import Feed from './components/Feed.vue';
import MediaCard from './components/MediaCard.vue';
import TopSubscribersCard from './components/TopSubscribersCard.vue';
import TopContributorsCard from './components/TopContributorsCard.vue';
import CreatePost from './components/createPost/CreatePost.vue';

export default Vue.extend({
	components: {
		UserHeader,
		BioCard,
		CreatePost,
		Feed,
		MediaCard,
		TopSubscribersCard,
		TopContributorsCard
	},
	props: {
		id: {
			type: String,
			default: ''
		}
	},
	data() {
		return { activeTab: 0, viewUser: undefined as User | undefined, errorState: false };
	},
	computed: {
		isAuth(): boolean {
			return false;
		},
		isSmall(): boolean {
			return this.$vuetify.breakpoint.mdAndDown;
		}
	}
});
</script>

<style scoped lang="scss">
.lg,
.xl {
	.feed-wrapper {
		max-width: min(50%, 700px);
	}
}
</style>
