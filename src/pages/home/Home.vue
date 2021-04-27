<template>
	<div class="home-background" style="height:200vh">
		<div class="primary">
			<div v-min-height="780" class="intro-section-container tertiary">
				<div class="home-background intro-section pb-4 d-flex flex-column flex-lg-row align-center justify-space-between flex-wrap home-page">
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
		<div class="home-background">
			<div v-min-height="600" class="content-section-container tertiary">
				<div v-height="575" class="content-section primary d-flex justify-center full-height" style="padding-top: 2%">
					<div class="d-flex flex-column width-30">
						<div v-width="320" v-height="130" class="white--text">
							<div class="f-32 weight-700 mb-1">Explore</div>
							<div class="f-24 weight-400">Search for your favourite content creators</div>
						</div>
						<div v-width="320" v-height="130" class="white--text align-self-end text-right">
							<div class="f-32 weight-700 mb-1">Collect</div>
							<div class="f-24 weight-400">Buy NFTs and expand your collection</div>
						</div>
						<div v-width="320" v-height="130" class="white--text">
							<div class="f-32 weight-700 mb-1">Trade</div>
							<div class="f-24 weight-400">Resell and trade your collection</div>
						</div>
					</div>
					<v-spacer style="min-width:10%; width:10%; max-width:10%;"></v-spacer>
					<div class="d-flex flex-column width-30 mx-3">
						<div v-width="320" v-height="130" class="white--text">
							<div class="f-32 weight-700 mb-1">Create</div>
							<div class="f-24 weight-400">Create content for your fans</div>
						</div>
						<div v-width="320" v-height="130" class="white--text align-self-end text-right">
							<div class="f-32 weight-700 mb-1">Sell</div>
							<div class="f-24 weight-400">Put your NFTs on the market</div>
						</div>
						<div v-width="320" v-height="130" class="white--text">
							<div class="f-32 weight-700 mb-1">Earn</div>
							<div class="f-24 weight-400">Earn crypto or cash for every NFT traded</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div>
			<div class="d-flex justify-center home-background">
				<div class="d-flex flex-column justify-center align-center pb-10 " style="width:fit-content">
					<div class="d-flex flex-column pt-12">
						<div class="px-2 d-flex justify-space-between align-end mb-5">
							<div class="f-38 weight-700 tertiary--text">Featured</div>
							<v-btn text class="f-24 weight-700 tertiary--text d-flex align-center text-none px-0" @click.stop="">See all</v-btn>
						</div>
						<div class="d-flex">
							<follow-card v-for="i in 4" :key="i" class="mx-2" />
						</div>
					</div>
					<div class="d-flex flex-column pt-12 mt-10 full-width">
						<div class="px-2 d-flex justify-space-between align-end mb-5">
							<div class="f-38 weight-700 tertiary--text">Top Desires</div>
							<v-btn text class="f-24 weight-700 tertiary--text d-flex align-center text-none px-0" @click.stop="">See all</v-btn>
						</div>
						<div class="d-flex justify-center">
							<naught-card v-for="i in 5" :key="i" class="mx-2" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import NaughtCard from '@/core/components/NaughtCard.vue';
import { getCurrentBreakpoint } from '@/core/utils/breakPointUtil';
import FollowCard from '@/pages/search/components/SearchResult.vue';

export default Vue.extend({
	components: { NaughtCard, FollowCard },
	computed: {
		bigScreen(): boolean {
			const breakpoint = getCurrentBreakpoint(this);
			return ['lg', 'xl'].includes(breakpoint);
		}
	}
});
</script>

<style scoped lang="scss">
.lg,
.xl {
	.intro-section {
		clip-path: polygon(
			0% 0%,
			0% 90%,
			5% 91.5%,
			15% 94.5%,
			25% 97%,
			30% 97.8%,
			40% 98.5%,
			50% 98.8%,
			60% 98.5%,
			70% 97.8%,
			75% 97%,
			85% 94.5%,
			95% 91.5%,
			100% 90%,
			100% 0%
		);
	}
}
.lg,
.xl {
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
}

.lg,
.xl {
	.content-section {
		clip-path: polygon(
			0% 0%,
			0% 99%,
			5% 97.5%,
			15% 94.5%,
			25% 92.5%,
			30% 91.8%,
			40% 90.5%,
			50% 90.2%,
			60% 90.5%,
			70% 91.2%,
			75% 92%,
			85% 94.5%,
			95% 97.5%,
			100% 99%,
			100% 0%
		);
	}
}
.lg,
.xl {
	.content-section-container {
		clip-path: polygon(
			0% 0%,
			0% 95.9%,
			5% 95%,
			15% 93%,
			25% 91.2%,
			30% 90.4%,
			40% 89.5%,
			50% 89.2%,
			60% 89.5%,
			70% 90.4%,
			75% 91.2%,
			85% 93%,
			95% 95%,
			100% 95.9%,
			100% 0%
		);
	}
}
</style>
