<template>
	<base-naught-dialog class="details-naught-dialog">
		<naught-dialog-title />
		<div class="px-7 pt-7 pb-5 d-flex flex-column" style="height: calc(100% - 68px)">
			<div class="f-12 weight-500 quaternary--text mb-3">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, morbi mollis dolor convallis. Consequat in sed placerat libero. Purus magna quam orci egestas
				sit. Nunc, pulvinar vivamus non pretium at quis scelerisque mollis. Hendrerit ipsum et, sapien pellentesque enim sollicitudin.
			</div>
			<v-expansion-panels v-model="priceHistoryShowing" class="elevation-0">
				<v-expansion-panel v>
					<v-expansion-panel-header class="f-14 weight-700 tertiary--text">
						<div>
							<v-icon left size="20" color="tertiary">mdi-chart-line</v-icon>
							Price History
						</div>
					</v-expansion-panel-header>
					<v-divider />
					<v-expansion-panel-content class="pt-6 pb-2">
						<canvas id="priceHistoryChart"></canvas>
					</v-expansion-panel-content>
				</v-expansion-panel>
			</v-expansion-panels>

			<v-expansion-panels v-model="listingsShowing" class="elevation-0 mt-4">
				<v-expansion-panel>
					<v-expansion-panel-header class="f-14 weight-700 tertiary--text">
						<div>
							<v-icon left size="20" color="tertiary">mdi-tag</v-icon>
							Listings
						</div>
					</v-expansion-panel-header>
					<v-divider />
					<v-expansion-panel-content class="listings">
						<div v-height="70" class="px-6 d-flex justify-space-between align-center f-14 weight-500">
							<div class="d-flex align-center tertiary--text mr-7">
								<v-avatar size="30" class="profile-picture mr-2">
									<v-img
										src="https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/19/UP4396-CUSA04449_00-AV00000000000194/image?w=320&h=320&bg_color=000000&opacity=100&_version=00_09_000"
										alt="John"
								/></v-avatar>
								<div>
									@skulljoke1p
								</div>
							</div>
							<div class="tertiary--text "><span class="primary--text">1</span> listed</div>
							<v-spacer />
							<div class="d-flex align-center">
								<div class="tertiary--text weight-600 mr-4">
									<v-icon color="tertiary">mdi-currency-eth</v-icon>
									0.16
								</div>
								<v-btn outlined width="80" height="24" color="secondary" class="f-12 weight-700">Buy</v-btn>
							</div>
						</div>
						<v-divider />
						<div v-height="70" class="px-6 d-flex justify-space-between align-center f-14 weight-500">
							<div class="d-flex align-center tertiary--text mr-7">
								<v-avatar size="30" class="profile-picture mr-2">
									<v-img
										src="https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/19/UP4396-CUSA04449_00-AV00000000000194/image?w=320&h=320&bg_color=000000&opacity=100&_version=00_09_000"
										alt="John"
								/></v-avatar>
								<div>
									@skulljoke1p
								</div>
							</div>
							<div class="tertiary--text "><span class="primary--text">1</span> listed</div>
							<v-spacer />
							<div class="d-flex align-center">
								<div class="tertiary--text weight-600 mr-4">
									<v-icon color="tertiary">mdi-currency-eth</v-icon>
									0.18
								</div>
								<v-btn outlined width="80" height="24" color="primary" class="f-12 weight-700">Buy</v-btn>
							</div>
						</div>
					</v-expansion-panel-content>
				</v-expansion-panel>
			</v-expansion-panels>

			<div class="d-flex justify-space-between f-12 weight-500 tertiary--text mt-auto">
				<div v-width="200" class="d-flex flex-column justify-center">
					<div class="d-flex justify-space-between">
						<div>Contract</div>
						<div class="quinary--text">0xc8059...4fba</div>
					</div>
					<div class="d-flex justify-space-between">
						<div>Token ID</div>
						<div class="quaternary--text">4866</div>
					</div>
					<div class="d-flex justify-space-between">
						<div>Blockchain</div>
						<div class="quaternary--text">Ethereum</div>
					</div>
				</div>
				<div class="d-flex justify-space-between">
					<div class="d-flex flex-column">
						<div class="d-flex flex-column align-end">
							<div class="d-flex mb-1"><v-icon color="tertiary" size="18">mdi-currency-eth</v-icon> 0.18</div>
							<div><v-btn color="primary" class="px-2 text-capitalize weight-700" depressed>Buy from Creator</v-btn></div>
						</div>
					</div>
					<div class="d-flex flex-column mx-2">
						<div class="d-flex flex-column align-end">
							<div class="d-flex mb-1"><v-icon color="tertiary" size="18">mdi-currency-eth</v-icon> 0.18</div>
							<div><v-btn color="secondary" class="px-2 text-capitalize weight-700" depressed>Buy Cheapest</v-btn></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<template v-slot:side-slot><naught-dialog-trading-history /></template>
	</base-naught-dialog>
</template>

<script lang="ts">
import Vue from 'vue';

import BaseNaughtDialog from './BaseNaughtDialog.vue';
import NaughtDialogTitle from './NaughtDialogTitle.vue';
import NaughtDialogTradingHistory from './NaughtDialogTradingHistory.vue';

import { Chart, CategoryScale, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';

export default Vue.extend({
	components: { BaseNaughtDialog, NaughtDialogTitle, NaughtDialogTradingHistory },
	data() {
		return {
			priceHistoryShowing: 0,
			listingsShowing: -1,
			chart: undefined as undefined | Chart
		};
	},
	watch: {
		priceHistoryShowing: {
			handler(value: number): void {
				if (value == 0) {
					this.listingsShowing = -1;
					this.$nextTick(() => {
						this.renderPriceHistoryChart();
					});
				}
			},
			immediate: true
		},
		listingsShowing(value: number): void {
			if (value == 0) {
				this.priceHistoryShowing = -1;
			}
		}
	},
	methods: {
		renderPriceHistoryChart(): void {
			if (this.chart) {
				return;
			}
			const labels = ['4 / 10', '4 / 17 ', '4 / 25', '5 / 01', '5 / 08'];
			const data = {
				labels: labels,
				datasets: [
					{
						label: 'My First dataset',
						backgroundColor: '#D65273',
						pointRadius: 0,
						borderColor: '#D65273',
						data: [0.2, 0.3, 0.8, 0.3, 0.5],
						tension: 0.6
					}
				]
			};

			const config = {
				type: 'line',
				data,
				options: {
					scales: {
						y: {
							ticks: {
								autoSkip: true,
								maxTicksLimit: 3
							},
							grid: {
								drawBorder: false
							}
						},
						x: {
							grid: {
								drawBorder: false,
								color: 'transparent'
							}
						}
					}
				}
			};

			Chart.register(LineController, LineElement, PointElement, CategoryScale, LinearScale, Title);
			const ctx = document.getElementById('priceHistoryChart') as any;
			this.chart = new Chart(ctx, config as any);
		}
	}
});
</script>

<style scoped>
.profile-picture {
	border: 1px var(--v-primary-base) solid;
}
</style>

<style>
.details-naught-dialog .v-expansion-panel-header__icon i {
	color: var(--v-primary-base) !important;
}

.listings .v-expansion-panel-content__wrap {
	padding: 0;
}
</style>
