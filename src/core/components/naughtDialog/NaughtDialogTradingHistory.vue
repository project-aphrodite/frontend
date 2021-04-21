<template>
	<div class="d-flex flex-column full-height trading-history">
		<div class="f-14 weight-700 tertiary--text"><v-icon size="24" color="tertiary">mdi-swap-horizontal</v-icon> Trading History</div>
		<div class="full-height">
			<v-container class="d-flex justify-center full-height">
				<v-timeline dense :style="timelineStyle" class="d-flex timeline-background flex-column justify-space-between pt-0">
					<v-timeline-item color="white" icon-color="grey lighten-2" small> </v-timeline-item>
					<v-timeline-item color="white" class="pb-0" icon-color="yellow lighten-2" small> </v-timeline-item>
				</v-timeline>
				<div class="d-flex flex-column">
					<!-- <v-card height="50" width="260" >
						<div>
							
						</div>
					</v-card> -->
					<!-- {{ openExpansionPanel }} -->
					<v-expansion-panels v-model="openExpansionPanel">
						<v-expansion-panel v-for="n in entries" :key="n" :class="[n == 1 ? 'mt-8' : 'mt-6']">
							<v-expansion-panel-header v-height="50" v-width="260" class="pa-2">
								<div class="d-flex justify-start align-center">
									<v-avatar size="34" class="profile-picture mr-4">
										<v-img
											src="https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/19/UP4396-CUSA04449_00-AV00000000000194/image?w=320&h=320&bg_color=000000&opacity=100&_version=00_09_000"
											alt="John"
									/></v-avatar>
									<div class="d-flex flex-column weight-500">
										<div class=" f-12 tertiary--text"><span class="primary--text f-16"> Listed</span> 1 item</div>
										<div class="quaternary--text f-10">
											13 / 04 / 21
										</div>
									</div>
									<v-spacer />
									<div class="mr-4">
										<div class="d-flex flex-column align-end">
											<div class="d-flex align-end ">
												<v-icon size="16" color="tertiary">mdi-currency-eth</v-icon>
												<div class="tertiary--text f-14 weight-600">0.33</div>
											</div>
											<div class="quaternary--text f-10">
												$510.84
											</div>
										</div>
									</div>
								</div>
							</v-expansion-panel-header>
							<v-expansion-panel-content v-height="110" class="pa-2">
								Lorem ipsum dolor sit amet asd asd asdas
							</v-expansion-panel-content>
						</v-expansion-panel>
					</v-expansion-panels>
				</div>
			</v-container>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	data() {
		return {
			entries: 3,
			openExpansionPanel: -1
		};
	},
	computed: {
		timelineStyle(): string {
			const offset = this.openExpansionPanel >= 0 ? 17 : 0;
			return 'height:' + (offset + 15 + 11 * (this.entries - 1)) + '%;';
		}
	}
});
</script>

<style scoped>
.timeline-background {
	position: absolute;
	z-index: 1;
}

.profile-picture {
	border: 1px var(--v-primary-base) solid;
	border-radius: 30px;
}
.v-expansion-panel {
	border-radius: 10px !important;
	border-top: none;
}

.trading-history .v-expansion-panels .v-expansion-panel:not(:first-child):after {
	border: none;
}
</style>

<style>
.v-timeline-item__dot.v-timeline-item__dot--small {
	height: 12px;
	left: calc(50% - 6px);
	width: 12px;
	background-color: var(--v-primary-base) !important;
}

.v-timeline-item__dot.v-timeline-item__dot--small .v-timeline-item__inner-dot {
	height: 8px;
	left: calc(50%);
	padding-top: 1px;
	width: 8px;
	margin: 2px;
}

.trading-history .v-expansion-panel-content__wrap {
	padding: 0px !important;
}
</style>
