<template>
	<v-card min-width="250" width="250" :height="dense ? 300 : 400">
		<v-img height="300" class="naught-card" src="https://wallpapershome.com/images/wallpapers/kitten-2560x1440-cat-cute-4k-18289.jpg" style>
			<template v-slot:placeholder>
				<imager-loader />
			</template>
			<div>
				<div class="d-flex justify-space-between pa-4 white--text">
					<div class="card-title">
						<v-icon small color="secondary">mdi-circle</v-icon>
						<span class="ml-2 f-12">Owner Name</span>
					</div>
					<v-badge content="12" offset-x="16" offset-y="44" color="transparent">
						<v-btn icon>
							<v-icon size="28" color="white">mdi-heart-outline</v-icon>
						</v-btn>
					</v-badge>
				</div>
				<div v-if="dense" class="d-flex flex-column justify-space-between align-center white--text dense-content">
					<div class="mt-6">
						<v-icon size="46" color="white">mdi-currency-eth</v-icon>
						<span class="eth-price f-38 weight-700">33.18</span>
					</div>
					<div class="f-12 text-center px-12">Description of NFT something something this is very cool my top nft</div>
					<div class="f-12 flavour-text-container full-width text-center d-flex flex-column justify-center">
						<div class="pt-2">Most Valuable Sold</div>
					</div>
				</div>
			</div>
		</v-img>

		<v-card-text v-if="!dense" class="pb-1 px-3">
			<div>
				<div class="text-center primary--text f-16 weight-700">
					Item Name
				</div>
				<div class="text-center description tertiary--text weight-500">
					NFT Description
				</div>
			</div>
			<div class="d-flex justify-space-between mt-3">
				<div>
					<span class="primary--text f-14 weight-600">6</span>
					<span class="f-12 quaternary--text"> listings</span>
				</div>
				<div>
					<v-icon color="tertiary">mdi-currency-eth</v-icon>
					<span class="eth-price f-17 weight-700 tertiary--text">0.18</span>
				</div>
			</div>
		</v-card-text>
	</v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import ImagerLoader from '@/core/components/loaders/ImageLoader.vue';

export default Vue.extend({
	components: { ImagerLoader },
	props: {
		dense: {
			type: Boolean,
			default: false
		}
	}
});
</script>

<style scoped>
.card-title {
	height: 28px;
}

.dense-content {
	height: 232px;
}

.owner-name {
	vertical-align: middle;
}

.eth-price {
	vertical-align: bottom;
}

.flavour-text-container {
	height: 40px;
	background-image: linear-gradient(rgba(255, 0, 0, 0), var(--v-primary-base));
}

.dense-content .eth-price {
	vertical-align: middle;
}
</style>

<style>
.naught-card .v-image__image.v-image__image--cover {
	filter: blur(1px) brightness(85%) !important;
}
</style>
