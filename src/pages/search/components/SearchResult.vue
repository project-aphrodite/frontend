<template>
	<v-card max-width="365" height="500" class="d-flex flex-column" @click="go">
		<search-result-header />

		<div class="d-flex flex-column justify-center align-center mt-2">
			<div class="weight-700 f-30 tertiary--text">Roaring Kitty</div>
			<v-btn depressed color="secondary" width="140" height="40" class="mt-1 f-16 weight-700 text-capitalize" @click.stop.prevent="" @mousedown.stop>Follow</v-btn>
		</div>
		<v-spacer />
		<v-divider />
		<search-result-stats v-height="80" />
	</v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import SearchResultHeader from './SearchResultHeader.vue';
import SearchResultStats from './SearchResultStats.vue';

export default Vue.extend({
	components: {
		SearchResultHeader,
		SearchResultStats
	},

	methods: {
		go(): void {
			this.$router.push({ name: 'view', params: { id: 'test' } });
		}
	}
});
</script>
