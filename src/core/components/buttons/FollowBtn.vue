<template>
	<v-btn color="secondary" :outlined="value" height="40" :width="value ? 64 : 120" elevation="0" @click="click">
		<v-icon>mdi-heart-outline</v-icon>
		<div v-if="!value" class="pl-2 f-16 weight-700 text-capitalize">Follow</div>
	</v-btn>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: {
		value: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		click(): void {
			this.$emit('input', !this.value);
		}
	}
});
</script>
