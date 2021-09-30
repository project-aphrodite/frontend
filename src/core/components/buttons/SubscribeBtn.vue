<template>
	<v-btn :color="value ? 'tertiary' : 'primary'" class="text-capitalize white--text" height="40" :width="value ? 120 : 200" elevation="0" @click="click">
		<div v-height="40" v-width="120" class="d-flex justify-center align-center border-left-4">
			{{ value ? 'Subscribed' : 'Subscribe' }}
		</div>
		<div v-if="!value" v-height="40" v-width="80" class="primary darken-1 d-flex justify-center align-center border-right-4">
			$20
		</div>
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
