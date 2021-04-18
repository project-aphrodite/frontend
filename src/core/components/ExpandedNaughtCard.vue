<template>
	<v-card class="expanded-container d-flex">
		<v-img class="expanded-image" max-width="600" height="720" src="https://wallpapershome.com/images/wallpapers/kitten-2560x1440-cat-cute-4k-18289.jpg">
			<template v-slot:placeholder>
				<imager-loader />
			</template>
		</v-img>
		<v-card flat width="600" class="pt-5">
			<div class="d-flex justify-space-between align-center full-width px-7">
				<div class="big-header">
					<div class="d-flex flex-column">
						<div class="mb-1">Plain Jane</div>
						<v-row class="ml-0 mb-1">
							<div class="mr-3">
								<v-icon left size="20" color="quaternary">
									mdi-account-multiple
								</v-icon>
								<span class="primary--text sub-text weight-medium ">2</span> <span class="quaternary--text sub-text"> Owner</span>
							</div>
							<div>
								<v-icon left size="20" color="quaternary">
									mdi-layers-triple-outline
								</v-icon>
								<span class="primary--text sub-text weight-medium ">3</span> <span class="quaternary--text sub-text"> Total</span>
							</div>
						</v-row>
					</div>
				</div>
				<div class="d-flex align-center">
					<div class="d-flex flex-column align-end mr-2">
						<div class="sub-text quaternary--text weight-medium">Created by</div>
						<div class="sub-text tertiary--text weight-regular creator-title">Roaring Kitty</div>
					</div>

					<v-avatar color="primary" size="56" class="profile-picture d-flex align-center">
						<v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
					</v-avatar>
				</div>
			</div>
			<v-divider class="mx-1" />
		</v-card>
	</v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import ImagerLoader from '@/core/components/loaders/ImageLoader.vue';
export default Vue.extend({
	components: { ImagerLoader }
});
</script>

<style>
.expanded-container .expanded-image.v-image {
	border-top-right-radius: 0px !important;
	border-bottom-right-radius: 0px !important;
}
</style>

<style scoped>
.profile-picture {
	border: 3px var(--v-primary-base) solid;
}

.creator-title {
	font-size: 16px;
}
</style>
