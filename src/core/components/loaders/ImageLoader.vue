<template>
	<div class="d-flex flex-column justify-center align-center full-height">
		<v-progress-circular indeterminate :color="color"></v-progress-circular>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	props: {
		color: {
			type: String,
			default: 'primary'
		}
	}
});
</script>
