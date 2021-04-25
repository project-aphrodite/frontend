<template>
	<base-naught-dialog class="details-naught-dialog" @close="emitClose()">
		<naught-dialog-actions v-if="!bigScreen && !owned" />
		<naught-dialog-title class=" pt-5" />
		<div class="px-2 px-lg-7 pt-7 pb-5 d-flex flex-column" style="height: calc(100% - 68px)">
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
					<v-expansion-panel-content v-height="180" class="pt-6 pb-2">
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
						<div v-height="70" class="px-2 px-lg-6 d-flex justify-space-between align-center f-14 weight-500">
							<div class="d-flex align-center tertiary--text mr-lg-7 mr-2 flex-wrap flex-sm-nowrap">
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
							<div class="d-flex align-center flex-wrap flex-sm-nowrap ml-2">
								<div class="d-flex tertiary--text weight-600 mr-4">
									<v-icon color="tertiary">mdi-currency-eth</v-icon>
									0.16
								</div>
								<v-btn outlined width="80" height="24" color="secondary" class="f-12 weight-700">Buy</v-btn>
							</div>
						</div>
					</v-expansion-panel-content>
				</v-expansion-panel>
			</v-expansion-panels>

			<div v-if="owned" class="d-flex flex-column justify-end full-height mb-6 mt-10 mt-lg-0">
				<div v-height="100" class="d-flex flex-column justify-center align-center  tertiary--text">
					<div class="f-14 weight-700">Price</div>
					<div class="f-30 weight-400 d-flex align-center py-3">
						<v-btn icon color="white" height="24" width="24" class="primary elevation-3" @click="decrementPrice"><v-icon>mdi-minus</v-icon></v-btn>
						<div v-max-width="105" class="mx-2">
							<v-text-field
								ref="text-field"
								v-model="sellPrice"
								class="price-text-field"
								hide-details
								dense
								placeholder="0.00"
								solo
								type="number"
								prepend-inner-icon="mdi-currency-eth"
							></v-text-field>
						</div>
						<v-btn icon color="white" height="24" width="24" class="primary elevation-3" @click="incrementPrice"><v-icon>mdi-plus</v-icon></v-btn>
					</div>
					<div class="f-10 weight-400">Includes the 2% service fee</div>
				</div>
			</div>
			<div class="d-flex justify-space-between align-center f-12 weight-500 tertiary--text mt-5 mt-lg-auto">
				<v-menu open-on-hover top offset-y nudge-top="8">
					<template v-slot:activator="{ on }">
						<v-icon class="mt-4" v-on="on">mdi-ethereum</v-icon>
					</template>
					<v-card class="white pa-5">
						<crypto-information class="f-12 weight-500" />
					</v-card>
				</v-menu>
				<v-btn v-if="owned" min-width="200" color="primary" class="text-capitalize f-16 weight-700">Sell item</v-btn>
				<naught-dialog-actions v-else-if="bigScreen" />
			</div>
		</div>
		<template v-slot:side-slot><trading-history /></template>
	</base-naught-dialog>
</template>

<script lang="ts">
import Vue from 'vue';

import BaseNaughtDialog from './BaseNaughtDialog.vue';
import NaughtDialogTitle from './components/NaughtDialogTitle.vue';
import CryptoInformation from './components/CryptoInformation.vue';

import NaughtDialogActions from './components/NaughtDialogActions.vue';
import TradingHistory from './components/TradingHistory.vue';

import { Chart, CategoryScale, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';
import { getCurrentBreakpoint } from '@/core/utils/breakPointUtil';

export default Vue.extend({
	components: { BaseNaughtDialog, NaughtDialogTitle, TradingHistory, NaughtDialogActions, CryptoInformation },
	props: {
		owned: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			priceHistoryShowing: 0,
			listingsShowing: -1,
			chart: undefined as undefined | Chart,
			sellPrice: undefined as undefined | number
		};
	},
	computed: {
		bigScreen(): boolean {
			const breakpoint = getCurrentBreakpoint(this);
			return ['lg', 'xl'].includes(breakpoint);
		}
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
		emitClose(): void {
			this.$emit('close');
		},
		decrementPrice(): void {
			this.sanitize();

			if (this.sellPrice != undefined) {
				this.sellPrice = parseFloat((this.sellPrice - 0.01).toFixed(2));
				if (this.sellPrice < 0) {
					this.sellPrice = 0;
				}
			}
		},
		incrementPrice(): void {
			this.sanitize();

			if (this.sellPrice != undefined) {
				this.sellPrice = parseFloat((this.sellPrice + 0.01).toFixed(2));
			}
		},
		sanitize(): void {
			if (!this.sellPrice) {
				this.sellPrice = 0.0;
			}
			const replaced = this.sellPrice
				.toString()
				.replaceAll('e', '')
				.replaceAll('+', '')
				.replaceAll('-', '');
			this.sellPrice = parseFloat(replaced);
		},
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
					responsive: true,
					maintainAspectRatio: false,
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

.details-naught-dialog input::-webkit-outer-spin-button,
.details-naught-dialog input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

.details-naught-dialog input[type='number'] {
	-moz-appearance: textfield;
	text-align: end;
}

.details-naught-dialog .listings .v-expansion-panel-content__wrap {
	padding: 0;
}

.details-naught-dialog .price-text-field.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control > .v-input__slot {
	box-shadow: none;
}
</style>
