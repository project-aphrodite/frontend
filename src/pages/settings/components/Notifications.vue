<template>
	<div>
		<div class="d-flex flex-column">
			<div class="f-24 weight-700 lh-54 tertiary--text mb-7">Notifications</div>
		</div>
		<div class="mt-2">
			<v-row>
				<v-col cols="12" md="6">
					<checkbox title="Subscription Activity" subtitle="New posts, messages and updates from your subscriptions" />
				</v-col>
				<v-col cols="12" md="6">
					<checkbox title="Payment Activity" subtitle="Eveything to do with payments" />
				</v-col>
				<v-col cols="12" md="6">
					<checkbox title="Weekly Report" subtitle="Weekly updates on your activity" />
				</v-col>
				<v-col cols="12" md="6">
					<checkbox title="Post Activity" subtitle="Likes, comments and general activity on your posts" />
				</v-col>
			</v-row>
		</div>
		<div class="d-flex justify-end pt-12">
			<v-btn height="40" outlined color="secondary" class="f-16 weight-700 text-decoration-none mr-2" width="200px">Discard</v-btn>
			<v-btn height="40" color="primary" depressed class="f-16 weight-700 text-decoration-none" width="200px">Save</v-btn>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Checkbox from './input/Checkbox.vue';
export default Vue.extend({
	components: { Checkbox }
});
</script>
