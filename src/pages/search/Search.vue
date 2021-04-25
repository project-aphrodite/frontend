<template>
	<!-- <div class="d-flex flex-column justify-center align-center align-md-start mx-2 mx-md-0 red"> -->
	<v-container v-max-width="1580" class="d-flex flex-column justify-center" style="padding-top:80px;">
		<div class="d-flex justify-center justify-md-start mb-7">
			<div v-if="searchTerm" class="d-flex flex-column">
				<div class="tertiary--text f-54 weight-700">Results for "{{ searchTerm }}"</div>
				<div class="tertiary--text f-16 weight-700">
					<span class="primary--text">{{ entries }}</span> found
				</div>
			</div>
			<div v-else class="tertiary--text f-54 weight-700">
				Content Creators
			</div>
		</div>
		<!-- <v-card>test</v-card> -->
		<!-- <div v-max-width="1130" class="orange"> -->

		<div class="d-flex flex-md-row flex-column align-center flex-wrap">
			<div v-for="i in entries" :key="i" class="d-flex flex-column align-center">
				<search-result class="mr-6 mt-6" />
			</div>
		</div>
	</v-container>
	<!-- </div> -->
	<!-- </div> -->
</template>

<script lang="ts">
import Vue from 'vue';
import SearchResult from './components/SearchResult.vue';

export default Vue.extend({
	components: { SearchResult },
	props: {
		searchTerm: {
			type: String,
			default: ''
		}
	},
	data() {
		return { entries: 7 };
	}
});
</script>
