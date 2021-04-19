<template>
	<v-card class="expanded-container d-flex" style="width: fit-content;">
		<v-img class="expanded-image" max-width="600" height="720" src="https://wallpapershome.com/images/wallpapers/kitten-2560x1440-cat-cute-4k-18289.jpg">
			<template v-slot:placeholder>
				<imager-loader />
			</template>
		</v-img>
		<v-card flat width="600" class="pt-5">
			<slot />
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
