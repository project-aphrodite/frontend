<template>
	<v-app :class="currentBreakpoint">
		<app-bar />
		<v-main>
			<v-container fluid class="pa-0 pb-4">
				<router-view />
			</v-container>
		</v-main>
	</v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import AppBar from '@/core/components/AppBar.vue';

import { getCurrentBreakpoint } from '@/core/utils/breakPointUtil';

export default Vue.extend({
	components: { AppBar },

	data: () => ({
		//
	}),
	computed: {
		currentBreakpoint(): string {
			return getCurrentBreakpoint(this);
		}
	}
});
</script>
