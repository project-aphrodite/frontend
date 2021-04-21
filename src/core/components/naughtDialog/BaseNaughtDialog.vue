<template>
	<v-card elevation="1" tile class="expanded-container d-flex" min-width="1200" width="1200">
		<v-img class="expanded-image" max-width="600" height="720" src="https://wallpapershome.com/images/wallpapers/kitten-2560x1440-cat-cute-4k-18289.jpg">
			<template v-slot:placeholder>
				<imager-loader />
			</template>
		</v-img>
		<v-card elevation="0" class="expanded-content pt-5" min-width="600" width="600">
			<slot />
		</v-card>
		<v-card max-height="720" tile elevation="1" min-width="300" max-width="300" class="expanded-last pt-5 px-5" style="overflow-y: auto;">
			<slot name="side-slot" />
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
.expanded-container.v-card,
.expanded-container .expanded-image.v-image,
.expanded-content.v-card {
	border-radius: 10px !important;
	border-top-right-radius: 0px !important;
	border-bottom-right-radius: 0px !important;
}

.expanded-container .expanded-last {
	border-top-right-radius: 10px !important;
	border-bottom-right-radius: 10px !important;
}
</style>
