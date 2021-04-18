<template>
	<v-app>
		<app-bar />
		<v-main>
			<v-container fluid class="pa-0 pb-4"><content-creator /></v-container>
		</v-main>
	</v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import AppBar from '@/core/components/AppBar.vue';

import ContentCreator from './core/pages/ContentCreator.vue';

export default Vue.extend({
	components: { AppBar, ContentCreator },

	data: () => ({
		//
	})
});
</script>
