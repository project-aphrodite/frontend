<template>
	<div class="d-flex justify-space-between align-center">
		<div v-for="stat in stats" :key="stat.key" v-width="122" class="d-flex flex-column justify-center align-center">
			<div class="f-24 weight-700 tertiary--text">{{ stat.value }}</div>
			<div class="f-16 weight-700 primary--text">{{ stat.key }}</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	data() {
		return {
			stats: [
				{ key: 'NFTs', value: '232' },
				{ key: 'Followers', value: '3234' },
				{ key: 'Collected', value: '18' }
			]
		};
	}
});
</script>
