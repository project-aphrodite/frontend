<template>
	<div class="home-background" style="height:100%;">
		<div class="primary">
			<div class="intro-section-container tertiary">
				<div class="home-background intro-section pb-4 d-flex flex-column flex-lg-row align-center justify-center justify-lg-space-between flex-wrap home-page">
					<div class="width-45 d-flex flex-column align-center justify-center mt-10 mt-lg-0">
						<div class="d-flex flex-column align-start">
							<div class="f-54 weight-700 tertiary--text">General Title</div>
							<div class="f-20 weight-600 quaternary--text mb-7">Some generic description of the site</div>
							<v-text-field v-width="340" prepend-inner-icon="mdi-magnify" dense placeholder="Search Creators" outlined></v-text-field>
						</div>
					</div>
					<div v-if="bigScreen" v-min-height="755" class="d-flex align-center align-lg-start justify-start width-55">
						<naught-card class="mr-lg-7 mt-4" :style="bigScreen ? 'margin-top: 22% !important' : ''" @openDialog="openDialog" />
						<naught-card class="mr-lg-7 mt-4" :style="bigScreen ? 'margin-top: 7% !important' : ''" @openDialog="openDialog" />
						<naught-card class="mt-4" :style="bigScreen ? 'margin-top: 17% !important' : ''" @openDialog="openDialog" />
					</div>
				</div>
			</div>
		</div>
		<div class="home-background">
			<div class="content-section-container tertiary">
				<div class="content-section primary d-flex flex-column flex-lg-row align-center align-lg-start justify-center full-height" style="padding-top: 2%;">
					<div class="d-flex flex-column content-description">
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
					<div class="d-flex flex-column content-description mx-3">
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
				<div class="d-flex flex-column justify-center align-center " style="width:fit-content">
					<div class="d-flex flex-column pt-12 follows-container">
						<div class="px-2 d-flex justify-space-between align-end mb-5">
							<div class="f-38 weight-700 tertiary--text">Featured</div>
							<v-btn text class="f-24 weight-700 tertiary--text d-flex align-center text-none px-0" @click.stop="">See all</v-btn>
						</div>
						<div>
							<div ref="followsList" class="d-flex align-center follows mx-0 pb-2">
								<search-result v-for="creator in creators" :key="creator.id" :creator="creator" class="mx-1 mx-sm-2" />
							</div>
							<div class="d-flex full-width justify-space-between follows-scroll-container">
								<v-btn height="60" width="60" icon class="primary white--text elevation-4 left-scroll-btn" @click="followsLeft">
									<v-icon size="38">mdi-arrow-left</v-icon>
								</v-btn>
								<v-btn height="60" width="60" icon class="primary white--text elevation-4 right-scroll-btn" @click="followsRight">
									<v-icon size="38">mdi-arrow-right</v-icon>
								</v-btn>
							</div>
						</div>
					</div>
					<div class="d-flex flex-column pt-12 mt-10 full-width top-desires-container">
						<div class="px-2 d-flex justify-space-between align-end mb-5">
							<div class="f-38 weight-700 tertiary--text">Top Desires</div>
							<v-btn text class="f-24 weight-700 tertiary--text d-flex align-center text-none px-0" @click.stop="">See all</v-btn>
						</div>
						<div>
							<div ref="topDesiresList" class="mx-0 pb-2 d-flex align-center top-desires">
								<naught-card v-for="i in 12" :key="i" class="mx-1 md-sm-2" @openDialog="openDialog"></naught-card>
							</div>
							<div class="d-flex full-width justify-space-between desire-scroll-container">
								<v-btn height="60" width="60" icon class="primary white--text elevation-4 left-scroll-btn" @click="desiresLeft">
									<v-icon size="38">mdi-arrow-left</v-icon>
								</v-btn>
								<v-btn height="60" width="60" icon class="primary white--text elevation-4 right-scroll-btn" @click="desiresRight">
									<v-icon size="38">mdi-arrow-right</v-icon>
								</v-btn>
							</div>
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
import SearchResult from '@/pages/search/components/SearchResult.vue';
import Creator from '@/core/models/creator';
import { doGet } from '@/core/services/httpService';
import HttpRequest from '@/core/models/http/httpRequest';

export default Vue.extend({
	components: { NaughtCard, SearchResult },
	data() {
		return { desiresScroll: 0, creators: [] as Array<Creator> };
	},
	computed: {
		bigScreen(): boolean {
			const breakpoint = getCurrentBreakpoint(this);
			return ['lg', 'xl'].includes(breakpoint);
		},
		followsListElement(): HTMLElement {
			return this.$refs.followsList as HTMLElement;
		},
		desiresListElement(): HTMLElement {
			return this.$refs.topDesiresList as HTMLElement;
		}
	},
	mounted() {
		this.desiresListElement.scrollLeft = 0;

		const request = new HttpRequest("/search/''");
		doGet(request).then(r => {
			this.creators = r.data.data.map(e => new Creator(e));
		});
	},
	methods: {
		followsLeft(): void {
			this.followsListElement.scrollTo({
				top: 0,
				left: this.followsListElement.scrollLeft - 380.2,
				behavior: 'smooth'
			});
		},
		followsRight(): void {
			this.followsListElement.scrollTo({
				top: 0,
				left: this.followsListElement.scrollLeft + 381.2,
				behavior: 'smooth'
			});
		},
		desiresLeft(): void {
			this.desiresListElement.scrollTo({
				top: 0,
				left: this.desiresListElement.scrollLeft - 530,
				behavior: 'smooth'
			});
		},
		desiresRight(): void {
			this.desiresListElement.scrollTo({
				top: 0,
				left: this.desiresListElement.scrollLeft + 530,
				behavior: 'smooth'
			});
		},
		openDialog(): void {
			this.$emit('openDialog');
		}
	}
});
</script>

<style scoped lang="scss">
.follows-scroll-container,
.desire-scroll-container {
	pointer-events: none;

	.left-scroll-btn {
		left: -25px;
		pointer-events: all;
	}

	.right-scroll-btn {
		right: -25px;
		pointer-events: all;
	}
}

.desire-scroll-container,
.follows-scroll-container {
	position: relative;
	top: -55%;
}

.top-desires-container,
.follows-container {
	max-width: 1523px;
}

.xs {
	.follows-container,
	.top-desires-container {
		max-width: 365px;
	}
}

.sm {
	.follows-container,
	.top-desires-container {
		max-width: 450px;
	}
}

.md {
	.follows-container,
	.top-desires-container {
		max-width: 850px;
	}
}

.lg {
	.follows-container,
	.top-desires-container {
		max-width: 1200px;
	}
}

.follows,
.top-desires {
	-ms-overflow-style: none; /* Internet Explorer 10+ */
	scrollbar-width: none; /* Firefox */
	overflow-x: auto;
}
.follows::-webkit-scrollbar,
.top-desires::-webkit-scrollbar {
	display: none; /* Safari and Chrome */
}

.intro-section-container {
	height: 510px;
}

.intro-section {
	height: 500px;
}

.lg,
.xl {
	.intro-section-container {
		height: 780px;
	}
	.intro-section {
		height: 770px;
	}
}

.content-section-container {
	height: 820px;
}

.content-section {
	height: 805px;
}

.lg,
.xl {
	.content-section-container {
		height: 600px;
	}

	.content-section {
		height: 575px;
	}
}

.content-description {
	width: 80%;
}

.lg,
.xl {
	.content-description {
		width: 30%;
	}
}

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
