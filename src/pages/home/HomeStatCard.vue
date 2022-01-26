<template>
	<div class="d-flex flex-column align-center pb-6 pb-lg-0">
		<v-icon v-if="icon" size="30">{{ icon }}</v-icon>
		<div class="f-38 weight-700 white--text">{{ title }}</div>
		<div class="f-18 weight-700 primary--text">{{ subtitle }}</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	props: {
		title: {
			type: String,
			default: '-'
		},
		subtitle: {
			type: String,
			default: 'Unknown'
		},
		icon: {
			type: String,
			default: ''
		}
	}
});
</script>
