<template>
	<div v-height="20" class="d-flex">
		<v-icon v-for="(n, i) in slides" :key="i" :size="i == value ? 16 : 12" class="mx-2" :color="i == value ? 'primary' : 'input-border-color'">mdi-circle</v-icon>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	props: {
		value: {
			type: Number,
			default: 0
		},
		slides: {
			type: Number,
			default: 1
		}
	}
});
</script>
