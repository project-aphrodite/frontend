<template>
	<div v-min-height="370" class="d-flex flex-column justify-space-between align-center">
		<div class="d-flex flex-column align-center">
			<div class="tertiary--text f-38 weight-500">Thank you!</div>
			<div class="primary--text f-24 weight-600">Roaring Kitty</div>
		</div>
		<div class="quaternary--text f-12 weight-600 text-center px-5 mt-12">
			Your verification is in progress. You will receive an email and notification as soon as you are verified.
		</div>
		<v-spacer />
		<v-btn v-width="400" height="55" depressed color="primary" class="text-capitalize f-18 weight-700">Okay!</v-btn>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>
