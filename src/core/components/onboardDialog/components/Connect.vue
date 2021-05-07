<template>
	<div v-height="420" v-max-width="400" class="connect d-flex flex-column align-center px-6 px-sm-0">
		<div class="full-width tertiary--text f-38 weight-500 mb-12">Connect <span class="quaternary--text f-18 weight-600">Your Wallet</span></div>
		<div class="full-width d-flex flex-column">
			<v-card
				light
				height="60"
				max-width="100%"
				:class="{ 'no-pointer': connectingMetaMask || connectingWalletConnect, selected: connectedMetaMask }"
				class="py-2 px-7 d-flex justify-space-between align-center elevation-3 tertiary--text text-capitalize f-18 weight-700 mb-5"
				@click="connect"
			>
				<template v-if="connectingMetaMask">
					<div class="d-flex align-center">
						<v-progress-circular class="mr-2 p" size="22" indeterminate color="primary"></v-progress-circular>
						<div class="pt-1">Connecting</div>
					</div>
				</template>
				<template v-else>
					MetaMask
				</template>
				<v-img
					max-height="50"
					max-width="50"
					src="data:image/png;base64,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"
				/>
			</v-card>
			<v-card
				height="60"
				max-width="100%"
				disabled
				:class="connectingMetaMask || connectingWalletConnect ? 'no-pointer' : ''"
				class=" py-5 px-7 d-flex justify-space-between align-center elevation-3 tertiary--text text-capitalize f-18 weight-700 mb-5"
				color="white"
			>
				<template v-if="connectingWalletConnect">
					<div class="d-flex align-center">
						<v-progress-circular class="mr-2 p" size="22" indeterminate color="primary"></v-progress-circular>
						<div class="pt-1">Connecting</div>
					</div>
				</template>
				<template v-else>
					WalletConnect
				</template>

				<v-img max-height="50" max-width="50" src="https://gblobscdn.gitbook.com/spaces%2F-LJJeCjcLrr53DcT1Ml7%2Favatar.png?alt=media" />
			</v-card>
		</div>
		<div class="full-width text-right">
			<v-btn v-width="190" :disabled="!valid" max-width="47%" height="55" depressed color="primary" class="text-capitalize f-18 weight-700" @click="next">Next</v-btn>
		</div>
		<div class="quaternary--text f-12 weight-600 text-center px-5 mt-5">
			By connecting your wallet, you agree to our <a>Terms of Service</a> and our <a>Privacy Policy</a>
		</div>
	</div>
</template>

<script lang="ts">
import HttpRequest from '@/core/models/http/httpRequest';
import { doPost } from '@/core/services/httpService';
import { toUser } from '@/core/translators/userTranslator';

import Vue from 'vue';
export default Vue.extend({
	data() {
		return {
			connectingMetaMask: false,
			connectingWalletConnect: false
		};
	},
	computed: {
		valid(): boolean {
			return !!this.walletAddress;
		},
		walletAddress(): string {
			return this.$store.getters['getWalletAddress'];
		},
		walletNetwork(): number {
			return this.$store.getters['getWalletNetwork'];
		},
		connectedMetaMask(): boolean {
			return this.walletNetwork == 1;
		}
	},
	methods: {
		connect(): void {
			const requestBody = new Map<string, string>();
			requestBody.set(
				'address',
				Math.random()
					.toString(36)
					.replace(/[^a-z]+/g, '')
					.substr(0, 10)
			);
			requestBody.set('network', '1');
			this.connectingMetaMask = true;
			const request = new HttpRequest('/login', requestBody);
			doPost(request).then((r): void => {
				this.connectingMetaMask = false;

				if (r.success) {
					this.$store.commit('setAuthToken', r.data.token);
					this.$store.commit('setUser', toUser(r.data));
				} else {
					this.$emit('showError', Object.values(r.data).join(' <br/>'));
				}
			});
		},
		next(): void {
			this.$emit('next');
		}
	}
});
</script>

<style>
.connect .no-pointer {
	pointer-events: none;
}

.connect .selected.v-card {
	border: 2px var(--v-primary-base) solid;
}
</style>
