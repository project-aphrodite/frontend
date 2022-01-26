<template>
	<v-app :class="currentBreakpoint">
		<app-bar @sign-in="signInClicked" @register="registerClicked" />

		<v-main>
			<div v-intersect="onIntersect" style="position: absolute; top: 30vh;"></div>
			<v-container fluid class="pa-0 ">
				<router-view style="" @openDialog="openDialog" />

				<base-footer v-if="hasFooter" />
			</v-container>
		</v-main>

		<v-btn v-if="!isIntersecting && false" height="60" width="60" icon class="primary white--text elevation-4 scroll-btn" @click="scrollToTop">
			<v-icon size="38">mdi-arrow-up</v-icon>
		</v-btn>
		<v-dialog v-model="showOnboardDialog" persistent content-class="onboard-dialog" transition="scale-transition">
			<onboard-dialog v-if="showOnboardDialog" :login-screen-prop="signInMode" @close="closeOnboardDialog" />
		</v-dialog>
	</v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import AppBar from '@/core/components/AppBar.vue';
import OnboardDialog from '@/core/components/onboardDialog/OnboardDialog.vue';

import BaseFooter from '@/core/components/footer/BaseFooter.vue';

import { getCurrentBreakpoint } from '@/core/utils/breakPointUtil';

export default Vue.extend({
	components: { AppBar, BaseFooter, OnboardDialog },

	data: () => ({
		isIntersecting: false,
		showDialog: false,
		showOnboardDialog: false,
		signInMode: false
	}),
	computed: {
		currentBreakpoint(): string {
			return getCurrentBreakpoint(this);
		},
		hasFooter(): boolean {
			return this.$route.name == 'home' || this.$route.name == 'search';
		}
	},
	mounted() {
		// auth code?
		// const walletAddress = localStorage.getItem(WALLET_ADDRESS_STORAGE_STRING);
		// const walletNetwork = localStorage.getItem(WALLET_NETWORK_STORAGE_STRING);
		// if (walletAddress && walletNetwork) {
		// 	login(
		// 		walletAddress,
		// 		walletNetwork,
		// 		r => {
		// 			this.$store.commit('setAuthToken', r.data.token);
		// 			this.$store.commit('setUser', toUser(r.data));
		// 		},
		// 		() => {
		// 			// do nothing on error
		// 		}
		// 	);
		// }
	},
	methods: {
		openDialog(): void {
			this.showDialog = true;
		},
		closeDialog(): void {
			this.showDialog = false;
		},
		signInClicked(): void {
			this.showOnboardDialog = true;
			this.signInMode = true;
		},
		registerClicked(): void {
			this.showOnboardDialog = true;
			this.signInMode = false;
		},
		closeOnboardDialog(): void {
			this.showOnboardDialog = false;
		},
		onIntersect(entries: any): void {
			this.isIntersecting = entries[0].isIntersecting;
		},
		scrollToTop(): void {
			setTimeout(() => this.$el.scrollIntoView({ behavior: 'smooth' }), 200);
		}
	}
});
</script>

<style scoped>
.scroll-btn {
	position: fixed;
	top: 90vh;
	right: 36px;
}
</style>

<style lang="scss">
.naught-dialog {
	min-height: 721px;
	max-width: 620px;
	top: -3vh;
}

.onboard-dialog {
	max-width: fit-content;
	min-height: 721px;
	border-radius: 10px;
}

.lg,
.xl {
	.naught-dialog,
	.onboard-dialog {
		width: fit-content;
		max-width: fit-content;
	}
}
</style>
