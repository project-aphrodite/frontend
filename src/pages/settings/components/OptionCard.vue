<template>
	<v-card plain tile flat class="d-flex pl-1 pt-7 block-selection" min-height="108px" width="100%" @click="select">
		<v-avatar class="elevation-4 mt-1" size="34" :color="value ? 'primary' : 'white'">
			<v-icon :color="value ? 'white' : 'tertiary'" size="20">{{ icon }}</v-icon>
		</v-avatar>
		<div class="d-flex flex-column ml-4 option-content width-100">
			<div class="d-flex pr-6">
				<div class="f-16 lh-40 weight-700" :class="{ 'tertiary--text': value, 'quaternary--text': !value }">
					{{ title }}
				</div>
				<v-spacer></v-spacer>
				<v-icon color="tertiary">mdi-chevron-right</v-icon>
			</div>
			<div class="f-14 lh-16 weight-400 quaternary--text">
				{{ subtitle }}
			</div>
		</div>
	</v-card>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	props: {
		value: {
			type: Boolean,
			default: false
		},
		icon: {
			type: String,
			default: 'mdi-home'
		},
		title: {
			type: String,
			default: 'Default title'
		},
		subtitle: {
			type: String,
			default: 'Default subtitle'
		}
	},
	methods: {
		select(): void {
			this.$emit('select');
		}
	}
});
</script>

<style scoped>
.option-content {
	border-bottom: 1px var(--v-option-card-border-base) solid;
}
</style>
