<template>
	<div class="primary" style="height:200vh">
		<div v-min-height="780" class="intro-section-container tertiary">
			<div class="white intro-section pb-4 d-flex flex-column flex-lg-row align-center justify-space-between flex-wrap home-page">
				<div class="width-45 d-flex flex-column align-center justify-center mt-10 mt-lg-0">
					<div class="d-flex flex-column align-start">
						<div class="f-54 weight-700 tertiary--text">General Title</div>
						<div class="f-20 weight-600 quaternary--text mb-7">Some generic description of the site</div>
						<v-text-field v-width="340" prepend-inner-icon="mdi-magnify" dense placeholder="Search Creators" outlined></v-text-field>
					</div>
				</div>
				<div v-min-height="755" class="d-flex flex-column flex-lg-row align-center align-lg-start justify-start width-55">
					<naught-card class="mr-lg-7 mt-4" :style="bigScreen ? 'margin-top: 25% !important' : ''" />
					<naught-card class="mr-lg-7 mt-4" :style="bigScreen ? 'margin-top: 10% !important' : ''" />
					<naught-card class="mt-4" :style="bigScreen ? 'margin-top: 20% !important' : ''" />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import NaughtCard from '@/core/components/NaughtCard.vue';
import { getCurrentBreakpoint } from '@/core/utils/breakPointUtil';

export default Vue.extend({
	components: { NaughtCard },
	computed: {
		bigScreen(): boolean {
			const breakpoint = getCurrentBreakpoint(this);
			return ['lg', 'xl'].includes(breakpoint);
		}
	}
});
</script>

<style scoped>
.intro-section {
	clip-path: polygon(0% 0%, 0% 90%, 5% 91.5%, 15% 94.5%, 25% 97%, 30% 97.8%, 40% 98.5%, 50% 98.8%, 60% 98.5%, 70% 97.8%, 75% 97%, 85% 94.5%, 95% 91.5%, 100% 90%, 100% 0%);
}
.intro-section-container {
	clip-path: polygon(
		0% 0%,
		0% 89.8%,
		5% 91.8%,
		15% 95.2%,
		25% 97.8%,
		30% 98.6%,
		40% 99.5%,
		50% 99.8%,
		60% 99.5%,
		70% 98.6%,
		75% 97.8%,
		85% 95.2%,
		95% 91.8%,
		100% 89.8%,
		100% 0%
	);
}
</style>
