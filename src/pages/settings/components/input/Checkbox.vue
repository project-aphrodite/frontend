<template>
	<div class="d-flex">
		<v-checkbox class="mt-n1"></v-checkbox>
		<div class="d-flex flex-column" style="padding-top: 2px;">
			<div class="f-16 weight-500 lh-22 tertiary--text">{{ title }}</div>
			<div class="f-14 weight-400 lh-16 quaternary--text">{{ subtitle }}</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	props: {
		value: {
			type: Boolean,
			default: true
		},
		title: {
			type: String,
			default: ''
		},
		subtitle: {
			type: String,
			default: ''
		}
	}
});
</script>
