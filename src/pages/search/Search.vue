<template>
	<v-container v-max-width="1580" class="d-flex flex-column justify-center" style="padding-top:80px;">
		<div class="d-flex justify-center justify-md-start mb-7">
			<div v-if="searchTerm" class="d-flex flex-column">
				<div class="tertiary--text f-54 weight-700">Results for "{{ searchTerm }}"</div>
				<div v-height="24" class="tertiary--text f-16 weight-700">
					<template v-if="!loading">
						<span class="primary--text">{{ total }}</span> found
					</template>
				</div>
			</div>
			<div v-else class="tertiary--text f-54 weight-700">
				Content Creators
			</div>
		</div>

		<div v-min-height="300" class="d-flex flex-md-row flex-column align-center flex-wrap">
			<div v-for="user in users" :key="user.id" class="d-flex flex-column align-center">
				<user-card :user="user" class="mr-6 mt-6" />
			</div>
			<div v-if="!loading && !loadingMore && users.length > 0 && !!nextPageUrl" v-intersect="requestMore" class="transparent--text">load more text</div>
			<template v-if="loadingMore || loading">
				<user-card v-for="i in 8" :key="i + 'search-result-skeleton'" loading class="mr-6 mt-6" />
			</template>
		</div>
	</v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import UserCard from '@/core/components/cards/search/UserCard.vue';

import HttpRequest from '@/core/models/http/httpRequest';
import { doGet } from '@/core/services/httpService';
import User from '@/core/models/user';
import { toUser } from '@/core/translators/userTranslator';

export default Vue.extend({
	components: { UserCard },
	props: {
		searchTerm: {
			type: String,
			default: ''
		}
	},
	data() {
		return { loading: false, loadingMore: false, users: [] as Array<User>, nextPageUrl: '', total: 0 };
	},
	watch: {
		searchTerm: {
			handler(): void {
				const searchTerm = this.searchTerm ? this.searchTerm : "''";
				const request = new HttpRequest('/search/' + searchTerm);
				this.loading = true;
				doGet(request).then(r => {
					this.loading = false;
					this.users = r.data.data.map((response: any) => toUser(response));
					this.nextPageUrl = r.data.next_page_url;
					this.total = r.data.total;
				});
			},
			immediate: true
		}
	},
	methods: {
		requestMore(entries: Array<IntersectionObserverEntry>): void {
			if (entries[0].isIntersecting && !this.loadingMore && this.nextPageUrl && !this.loading) {
				const request = new HttpRequest(this.nextPageUrl);
				this.loadingMore = true;

				doGet(request).then(r => {
					this.loadingMore = false;
					this.users.push(...r.data.data.map((response: any) => toUser(response)));
					this.nextPageUrl = r.data.next_page_url;
				});
			}
		}
	}
});
</script>
