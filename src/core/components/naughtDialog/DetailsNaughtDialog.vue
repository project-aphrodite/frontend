<template>
	<base-naught-dialog class="details-naught-dialog">
		<naught-dialog-title />
		<div class="px-7 pt-7 pb-5">
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
					<v-expansion-panel-content class="pt-6 pb-2 grey lighten-4">
						<canvas id="priceHistoryChart"></canvas>
					</v-expansion-panel-content>
				</v-expansion-panel>
			</v-expansion-panels>

			<v-expansion-panels class="elevation-0 mt-4">
				<v-expansion-panel>
					<v-expansion-panel-header class="f-14 weight-700 tertiary--text">
						<div>
							<v-icon left size="20" color="tertiary">mdi-tag</v-icon>
							Listings
						</div>
					</v-expansion-panel-header>
					<v-expansion-panel-content>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</v-expansion-panel-content>
				</v-expansion-panel>
			</v-expansion-panels>
			<div></div>
		</div>
	</base-naught-dialog>
</template>

<script lang="ts">
import Vue from 'vue';

import BaseNaughtDialog from './BaseNaughtDialog.vue';
import NaughtDialogTitle from './NaughtDialogTitle.vue';

import { Chart, CategoryScale, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';

export default Vue.extend({
	components: { BaseNaughtDialog, NaughtDialogTitle },
	data() {
		return {
			priceHistoryShowing: 0,
			chart: undefined as undefined | Chart
		};
	},
	watch: {
		priceHistoryShowing: {
			handler(value: number): void {
				if (value == 0) {
					this.$nextTick(() => {
						this.renderPriceHistoryChart();
					});
				}
			},
			immediate: true
		}
	},
	methods: {
		renderPriceHistoryChart(): void {
			if (this.chart) {
				this.chart.destroy();
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
	border: 3px var(--v-primary-base) solid;
}
</style>

<style>
.details-naught-dialog .v-expansion-panel-header__icon i {
	color: var(--v-primary-base) !important;
}
</style>
