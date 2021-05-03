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
			<div v-for="creator in creators" :key="creator.id" class="d-flex flex-column align-center">
				<search-result :creator="creator" class="mr-6 mt-6" />
			</div>
			<div v-if="!loading && !loadingMore && creators.length > 0 && !!nextPageUrl" v-intersect="requestMore" class="transparent--text">load more text</div>
			<template v-if="loadingMore || loading">
				<search-result v-for="i in 8" :key="i + 'search-result-skeleton'" loading class="mr-6 mt-6" />
			</template>
		</div>
	</v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import SearchResult from './components/SearchResult.vue';

import HttpRequest from '@/core/models/http/httpRequest';
import Creator from '@/core/models/creator';
import { doGet } from '@/core/services/httpService';

export default Vue.extend({
	components: { SearchResult },
	props: {
		searchTerm: {
			type: String,
			default: ''
		}
	},
	data() {
		return { loading: false, loadingMore: false, creators: [] as Array<Creator>, nextPageUrl: '', total: 0 };
	},
	watch: {
		searchTerm: {
			handler(): void {
				const searchTerm = this.searchTerm ? this.searchTerm : "''";
				const request = new HttpRequest('/search/' + searchTerm);
				this.loading = true;
				doGet(request).then(r => {
					this.loading = false;
					this.creators = r.data.data.map(e => new Creator(e));
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
					this.creators.push(...r.data.data.map(e => new Creator(e)));
					this.nextPageUrl = r.data.next_page_url;
				});
			}
		}
	}
});
</script>
