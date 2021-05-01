<template>
	<div v-height="420" v-width="400" class="d-flex flex-column align-center">
		<div class="full-width tertiary--text f-38 weight-500 mb-12">Setup <span class="quaternary--text f-18 weight-600">Your Account</span></div>
		<div class="full-width">
			<v-text-field hide-details label="Name" placeholder="Name" class="mb-5" outlined />
			<v-text-field hide-details label="Email" class="mb-5" outlined />
			<v-text-field hide-details label="Username" class="mb-5" outlined />
		</div>
		<div class="full-width text-right">
			<v-btn v-width="200" height="55" depressed color="primary" class="text-capitalize f-18 weight-700" @click="next">Confirm</v-btn>
		</div>
		<div class="quaternary--text f-12 weight-600 text-center px-5 mt-5">By confirming, you agree to our <a>Terms of Service</a> and our <a>Privacy Policy</a></div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	methods: {
		next(): void {
			this.$emit('next');
		}
	}
});
</script>
