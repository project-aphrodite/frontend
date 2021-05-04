<template>
	<v-app :class="currentBreakpoint">
		<app-bar @onboard="openOnboardDialog" />
		<v-main>
			<div v-intersect="onIntersect"></div>
			<v-container fluid class="pa-0 ">
				<router-view style="padding-bottom: 200px;" @openDialog="openDialog" />

				<base-footer />
			</v-container>
		</v-main>

		<v-btn v-if="!isIntersecting" height="60" width="60" icon class="primary white--text elevation-4 scroll-btn" @click="scrollToTop">
			<v-icon size="38">mdi-arrow-up</v-icon>
		</v-btn>
		<v-dialog v-model="showDialog" content-class="naught-dialog" transition="scale-transition">
			<details-naught-dialog @close="closeDialog" />
		</v-dialog>
		<v-dialog v-model="showOnboardDialog" persistent content-class="onboard-dialog" transition="scale-transition">
			<onboard-dialog v-if="showOnboardDialog" @close="closeOnboardDialog" />
		</v-dialog>
	</v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import AppBar from '@/core/components/AppBar.vue';
import DetailsNaughtDialog from '@/core/components/naughtDialog/DetailsNaughtDialog.vue';
import OnboardDialog from '@/core/components/onboardDialog/OnboardDialog.vue';

import BaseFooter from '@/core/components/footer/BaseFooter.vue';

import { getCurrentBreakpoint } from '@/core/utils/breakPointUtil';

export default Vue.extend({
	components: { AppBar, DetailsNaughtDialog, BaseFooter, OnboardDialog },

	data: () => ({
		isIntersecting: false,
		showDialog: false,
		showOnboardDialog: false
	}),
	computed: {
		currentBreakpoint(): string {
			return getCurrentBreakpoint(this);
		}
	},
	methods: {
		openDialog(): void {
			this.showDialog = true;
		},
		closeDialog(): void {
			this.showDialog = false;
		},
		openOnboardDialog(): void {
			this.showOnboardDialog = true;
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
	max-width: 520px;
	min-height: 721px;
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
