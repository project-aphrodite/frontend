<template>
	<div>
		<div class="d-flex flex-column">
			<div class="f-24 weight-700 lh-54 tertiary--text mb-7">Security</div>
		</div>
		<div class="f-16 weight-700 lh-40 tertiary--text">
			Change Password
		</div>
		<div class="mt-2">
			<v-row>
				<v-col cols="12" md="6"><v-text-field hide-details outlined label="Password" type="password"></v-text-field></v-col>
				<v-col cols="12" md="6"><v-text-field hide-details outlined label="Confirm New Password" type="password"></v-text-field></v-col>
			</v-row>
		</div>
		<div class="d-flex justify-end pt-7">
			<v-btn height="40" outlined color="secondary" class="f-16 weight-700 text-decoration-none mr-2" width="200px">Discard</v-btn>
			<v-btn height="40" color="primary" depressed class="f-16 weight-700 text-decoration-none" width="200px">Save</v-btn>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>
