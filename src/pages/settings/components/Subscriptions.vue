<template>
	<div>
		<div class="d-flex flex-column">
			<div class="f-24 weight-700 lh-54 tertiary--text mb-7">Subscriptions</div>
		</div>
		<div class="d-flex flex-wrap">
			<user-card class="mb-5 mr-5" dense></user-card>
			<user-card class="mb-5 mr-5" dense></user-card>
			<user-card class="mb-5 mr-5" dense></user-card>
			<user-card class="mb-5 mr-5" dense></user-card>
			<user-card class="mb-5 mr-5" dense></user-card>
			<user-card class="mb-5 mr-5" dense></user-card>
		</div>
	</div>
</template>

<script lang="ts">
import UserCard from '@/core/components/cards/search/UserCard.vue';
import Vue from 'vue';
export default Vue.extend({
	components: { UserCard },
	mounted(): void {
		// I <3 code
	}
});
</script>
