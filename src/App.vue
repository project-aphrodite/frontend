<template>
	<v-app :class="currentBreakpoint">
		<app-bar />

		<v-main>
			<div v-intersect="onIntersect"></div>
			<v-container fluid class="pa-0 pb-4">
				<router-view />
			</v-container>
		</v-main>
		<v-btn v-if="!isIntersecting" height="60" width="60" icon class="primary white--text elevation-4 scroll-btn" @click="scrollToTop"
			><v-icon size="38">mdi-arrow-up</v-icon></v-btn
		>
	</v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import AppBar from '@/core/components/AppBar.vue';

import { getCurrentBreakpoint } from '@/core/utils/breakPointUtil';

export default Vue.extend({
	components: { AppBar },

	data: () => ({
		isIntersecting: false
	}),
	computed: {
		currentBreakpoint(): string {
			return getCurrentBreakpoint(this);
		}
	},
	methods: {
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
