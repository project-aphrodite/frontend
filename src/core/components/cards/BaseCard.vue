<template>
	<v-card v-if="!isSmall" class="pa-5 card" width="100%" max-width="370" elevation="4">
		<div v-height="35" class="d-flex justify-space-between" @click="true">
			<div class="f-20 weight-700 tertiary--text">{{ title }}</div>
			<v-btn v-if="editable" icon height="28" width="28" color="primary"><v-icon>mdi-square-edit-outline</v-icon></v-btn>
		</div>
		<slot></slot>
	</v-card>
	<v-card v-else class="full-width">
		<v-expansion-panels>
			<v-expansion-panel>
				<v-expansion-panel-header>
					<div class="f-20 weight-700 tertiary--text">
						{{ title }}
					</div>
				</v-expansion-panel-header>
				<v-expansion-panel-content>
					<div class="d-flex justify-end pb-2">
						<v-btn v-if="editable" icon height="28" width="28" color="primary"><v-icon>mdi-square-edit-outline</v-icon></v-btn>
					</div>

					<slot></slot>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels>
	</v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: {
		title: {
			type: String,
			default: 'Default title'
		},
		editable: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		isSmall(): boolean {
			return this.$vuetify.breakpoint.smAndDown;
		}
	}
});
</script>

<style scoped>
.card {
	height: fit-content;
}
</style>
