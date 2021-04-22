<template>
	<div class="d-flex justify-space-between px-3 px-lg-7 px-lg-0 mb-6 mb-lg-0 flex-wrap flex-sm-nowrap">
		<div class="d-flex flex-column full-width">
			<div class="d-flex flex-column align-end">
				<div class="d-flex mb-1"><v-icon color="tertiary" size="18">mdi-currency-eth</v-icon> 0.18</div>
				<v-btn color="primary" class="px-2 text-capitalize weight-700 full-width" depressed>Buy from Creator</v-btn>
			</div>
		</div>
		<div class="d-flex flex-column ml-0 ml-sm-6 mx-lg-2 full-width">
			<div class="d-flex flex-column align-end">
				<div class="d-flex mb-1"><v-icon color="tertiary" size="18">mdi-currency-eth</v-icon> 0.18</div>
				<v-btn color="secondary" class="px-2 text-capitalize weight-700 full-width" depressed>Buy Cheapest</v-btn>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style scoped></style>
