<template>
	<v-card elevation="1" tile class="expanded-container d-flex flex-column flex-lg-row" max-width="1500">
		<v-img class="expanded-image" max-width="600" height="720" src="https://wallpapershome.com/images/wallpapers/kitten-2560x1440-cat-cute-4k-18289.jpg">
			<template v-slot:placeholder>
				<imager-loader />
			</template>
			<div class="white--text d-lg-none d-flex justify-end">
				<v-btn class="ma-2" icon min-height="64" min-width="64" color="white" @click="emitClose"><v-icon size="64">mdi-close-circle-outline</v-icon></v-btn>
			</div>
		</v-img>
		<v-card elevation="0" class="expanded-content pt-5" min-width="600" width="600">
			<slot />
		</v-card>
		<v-card max-height="720" tile elevation="1" min-width="300" class="expanded-last pt-5 pb-5 px-2 px-lg-5" style="overflow-y: auto;">
			<slot name="side-slot" />
		</v-card>
	</v-card>
</template>

<script lang="ts">
import Vue from 'vue';

import ImagerLoader from '@/core/components/loaders/ImageLoader.vue';
import { getCurrentBreakpoint } from '@/core/utils/breakPointUtil';

export default Vue.extend({
	components: { ImagerLoader },
	computed: {
		currentBreakpoint(): string {
			return getCurrentBreakpoint(this);
		}
	},
	methods: {
		emitClose(): void {
			this.$emit('close');
		}
	}
});
</script>

<style lang="scss">
.xs {
	.expanded-container.v-card,
	.expanded-content.v-card {
		width: 100% !important;
		min-width: 100% !important;
	}
}

.sm,
.md {
	.expanded-container.v-card {
		width: 600px !important;
		min-width: 600px !important;
	}
}

.expanded-container .expanded-image.v-image,
.expanded-content.v-card {
	border-radius: 10px !important;
	border-top-right-radius: 0px !important;
	border-bottom-right-radius: 0px !important;
}

.expanded-container.v-card {
	border-radius: 10px !important;
}

.xs,
.sm,
.md {
	.expanded-container.v-card {
		border-radius: 10px !important;
	}

	.expanded-container .expanded-image.v-image,
	.expanded-content.v-card {
		border-radius: 10px !important;
		border-bottom-left-radius: 0px !important;
		border-bottom-right-radius: 0px !important;
	}

	.expanded-container .expanded-last {
		border-bottom-left-radius: 10px !important;
		border-bottom-right-radius: 10px !important;
		max-width: 100% !important;
	}
}

.expanded-container .expanded-last {
	border-top-right-radius: 10px !important;
	border-bottom-right-radius: 10px !important;
}
</style>
