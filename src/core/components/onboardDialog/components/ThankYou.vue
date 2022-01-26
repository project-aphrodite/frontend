<template>
	<div v-min-height="370" v-max-width="400" class="d-flex flex-column justify-space-between align-center px-6 px-sm-0" style="width:100%;">
		<div class="d-flex flex-column align-center">
			<div class="tertiary--text f-38 weight-500">Reviewing</div>
			<div class="primary--text f-24 weight-600">{{ username }}</div>
		</div>
		<div class="quaternary--text f-12 weight-600 text-center px-5 mt-12">
			Your verification is in progress. You will receive an email and notification as soon as you are verified.
		</div>
		<v-spacer />

		<div class="tertiary-text text-center f-16 weight-600 px-2">While you wait for the review, customise your profile!</div>
		<v-btn width="100%" max-width="400" height="55" depressed color="primary" class="text-decoration-none f-18 weight-700 mt-4" @click="close">Go to my profile</v-btn>
	</div>
</template>

<script lang="ts">
// import User from '@/core/models/entities/user';
import Vue from 'vue';
export default Vue.extend({
	computed: {
		username(): string {
			// const user = this.$store.getters['getUser'] as User | undefined;
			// if (user) {
			// 	return user.username;
			// }

			// return '';
			return 'Meepo Maapo';
		}
	},
	methods: {
		close(): void {
			this.$emit('close');
		}
	}
});
</script>
