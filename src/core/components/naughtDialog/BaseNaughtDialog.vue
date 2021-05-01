<template>
	<v-card elevation="1" tile class="expanded-container d-flex flex-column flex-lg-row">
		<v-card class="expanded-image" max-width="600" height="720">
			<slot name="image-slot" />
			<v-img
				v-if="!imageSlotProvided"
				height="100%"
				width="100%"
				src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80"
			>
				<template v-slot:placeholder>
					<image-loader />
				</template>
			</v-img>
			<div class="d-lg-none d-flex justify-end" style="position: absolute; top: 0; right: 0px;">
				<v-btn class="ma-2" icon min-height="64" min-width="64" :color="btnColor" @click="emitClose"><v-icon size="64">mdi-close-circle-outline</v-icon></v-btn>
			</div>
		</v-card>
		<v-card class="expanded-content pb-5" max-width="600" width="600">
			<slot />
		</v-card>
		<v-card v-if="sideSlotProvided" max-height="720" width="300" max-width="600" tile class="expanded-last pt-5 pb-5 px-2 px-lg-5" style="overflow-y: auto;">
			<slot name="side-slot" />
		</v-card>
	</v-card>
</template>

<script lang="ts">
import Vue from 'vue';

import ImageLoader from '@/core/components/loaders/ImageLoader.vue';
import { getCurrentBreakpoint } from '@/core/utils/breakPointUtil';

export default Vue.extend({
	components: { ImageLoader },
	props: {
		imageUrl: {
			type: String,
			default: ''
		},

		btnColor: {
			type: String,
			default: 'white'
		}
	},
	computed: {
		currentBreakpoint(): string {
			return getCurrentBreakpoint(this);
		},
		imageSlotProvided(): boolean {
			return !!this.$slots['image-slot'];
		},
		sideSlotProvided(): boolean {
			return !!this.$slots['side-slot'];
		}
	},
	methods: {
		emitClose(): void {
			this.$emit('close');
		}
	}
});
</script>

<style scoped>
.expanded-container {
	max-width: fit-content;
}

.expanded-content {
	margin-left: 1px;
	margin-top: 1px;
	border-radius: 0px !important;
}

.expanded-image {
	width: 600px;
}
</style>

<style lang="scss">
.xs {
	.expanded-container.v-card,
	.expanded-content.v-card,
	.expanded-image {
		width: 100% !important;
		min-width: 100% !important;
	}
}

.sm,
.md {
	.expanded-container.v-card {
		width: 100% !important;
		min-width: 600px !important;
	}
}

.lg,
.xl {
	.expanded-last {
		min-width: 300px !important;
	}
}

.expanded-container .expanded-image,
.expanded-container .expanded-image .v-image {
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

	.expanded-container .expanded-image,
	.expanded-container .expanded-image .v-image {
		border-radius: 10px !important;
		border-bottom-left-radius: 0px !important;
		border-bottom-right-radius: 0px !important;
	}

	.expanded-container .v-card:not(:last-child) {
		border-top-left-radius: 0px !important;
		border-top-right-radius: 0px !important;
	}

	.expanded-container .v-card:first-child {
		border-top-left-radius: 10px !important;
		border-top-right-radius: 10px !important;
	}

	.expanded-container .v-card:last-child {
		border-top-left-radius: 0px !important;
		border-top-right-radius: 0px !important;
		border-bottom-left-radius: 10px !important;
		border-bottom-right-radius: 10px !important;
		width: 100% !important;
	}
}

.expanded-container .v-card:last-child {
	border-top-right-radius: 10px !important;
	border-bottom-right-radius: 10px !important;
}
</style>
