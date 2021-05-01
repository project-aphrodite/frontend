<template>
	<div v-height="420" v-width="400" class="d-flex flex-column align-center">
		<div class="full-width tertiary--text f-38 weight-500 mb-12">Connect <span class="quaternary--text f-18 weight-600">Your Wallet</span></div>
		<div class="full-width d-flex flex-column">
			<v-card
				height="60"
				class=" py-5 px-7 d-flex justify-space-between align-center elevation-3 tertiary--text text-capitalize f-18 weight-700 mb-5"
				color="white"
				@click.stop=""
			>
				MetaMask
			</v-card>
			<v-card
				height="60"
				class=" py-5 px-7 d-flex justify-space-between align-center elevation-3 tertiary--text text-capitalize f-18 weight-700 mb-5"
				color="white"
				@click.stop=""
			>
				WalletConnect
			</v-card>
		</div>
		<div class="full-width text-right">
			<v-btn v-width="200" height="55" depressed color="primary" class="text-capitalize f-18 weight-700" @click="next">Next</v-btn>
		</div>
		<div class="quaternary--text f-12 weight-600 text-center px-5 mt-5">
			By connecting your wallet, you agree to our <a>Terms of Service</a> and our <a>Privacy Policy</a>
		</div>
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
