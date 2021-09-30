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
import User from '@/core/models/user';

export default Vue.extend({
	props: {
		user: {
			type: User,
			required: true
		}
	},
	computed: {
		stats(): Array<{ key: string; value: number }> {
			return [
				{ key: 'Posts', value: 171 },
				{ key: 'Subscribers', value: 831 },
				{ key: 'Followers', value: 1555 }
			];
		}
	}
});
</script>
