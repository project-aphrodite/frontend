<template>
	<v-card max-width="365" height="500" class="d-flex flex-column search-result" @click="go">
		<template v-if="!loading">
			<search-result-header :creator="creator" />

			<div class="d-flex flex-column justify-center align-center mt-2">
				<div class="weight-700 f-30 tertiary--text">{{ creator.name }} {{ creator.surname }}</div>
				<v-btn depressed color="secondary" width="140" height="40" class="mt-1 f-16 weight-700 text-capitalize" @click.stop.prevent="" @mousedown.stop>Follow</v-btn>
			</div>
		</template>
		<v-skeleton-loader v-else max-width="365" width="365" height="100%" type="image"></v-skeleton-loader>
		<v-spacer />
		<v-divider />
		<search-result-stats v-if="!loading" v-height="80" :creator="creator" />
		<div v-else v-min-height="80" v-height="80" class="d-flex justify-center align-center">
			<v-skeleton-loader v-for="i in 3" :key="i" width="120" type="avatar" class="d-flex justify-center skeleton-stat"></v-skeleton-loader>
		</div>
	</v-card>
</template>

<script lang="ts">
import Vue from 'vue';

import Creator from '@/core/models/creator';

import SearchResultHeader from './SearchResultHeader.vue';
import SearchResultStats from './SearchResultStats.vue';

export default Vue.extend({
	components: {
		SearchResultHeader,
		SearchResultStats
	},

	props: {
		creator: {
			type: Creator,
			default: undefined
		},
		loading: {
			type: Boolean,
			default: false
		}
	},

	methods: {
		go(): void {
			this.$router.push({ name: 'view', params: { id: 'test' } });
		}
	}
});
</script>

<style>
.search-result .v-skeleton-loader__image {
	height: 100%;
}
.skeleton-stat .v-skeleton-loader__avatar.v-skeleton-loader__bone {
	border-radius: 10px !important;
}
</style>
