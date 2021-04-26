<template>
	<v-card class="mt-0 pa-7 full-height" width="1130">
		<div class="f-20 weight-700 tertiary--text mb-10">Following</div>
		<div class="d-flex flex-wrap flex-column flex-lg-row justify-center align-center">
			<follow-card v-for="i in 6" :key="i" class="mr-5 mb-5" />
		</div>
	</v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import FollowCard from './FollowCard.vue';

export default Vue.extend({
	components: {
		FollowCard
	}
});
</script>
