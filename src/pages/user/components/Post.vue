<template>
	<v-card tile flat class="py-2 px-0 post" width="100%">
		<div class="d-flex justify-space-between">
			<div class="pl-5 pt-2 pb-2 d-flex flex-column">
				<div class="f-24 weight-700 tertiary--text" :class="{ 'f-16': isSmall }">
					At the beach
				</div>
				<div class="f-12 weight-500 quaternary--text">
					3 days ago
				</div>
				<div v-if="!isForPublic" class="">
					<div class="d-flex pt-1">
						<div v-if="!isCreator">
							<v-icon v-if="isLocked">mdi-lock</v-icon>
							<v-icon v-else color="primary">mdi-lock-open</v-icon>
						</div>
						<div v-if="count > 1" class="d-flex">
							<v-icon v-if="!isCreator">mdi-circle-small</v-icon>

							<div class="d-flex align-center">
								<v-icon class="pr-1">mdi-image-multiple-outline</v-icon>
								<div class="f-12 weight-500 quaternary--text">{{ count }}</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="d-flex pr-1">
				<small-profile />
				<v-btn icon small>
					<v-icon>mdi-dots-vertical</v-icon>
				</v-btn>
			</div>
		</div>
		<div v-if="!isCreator && isLocked" class="d-flex justify-center mt-n4 width-100" style="position: absolute; z-index: 10;">
			<v-btn v-if="isForSubscribers" color="primary" elevation="4" height="35" class="f-16 weight-700 text-decoration-none">Subscribe to view</v-btn>
			<v-btn v-else-if="isForPurchase" color="secondary" elevation="4" height="35" class="f-16 weight-700 text-decoration-none">Unlock for $37</v-btn>
		</div>
		<v-carousel v-model="selectedItem" :show-arrows="count > 1 && !isLocked" :hide-delimiters="isLocked || count <= 1" hide-delimiter-background>
			<v-carousel-item v-for="i in count" :key="i">
				<v-img
					width="100%"
					src="https://dogtrainingobedienceschool.com/pic/3224729_full-beach-view-quotes-for-instagram-30-summer-captions-for-your-insta-worthy-posts-updated-sofiasolisb.jpg"
					class="block-selection"
					@dblclick="liked = !liked"
				>
					<div class="height-100 d-flex flex-column justify-space-between">
						<!-- Top image content -->
						<div class="d-flex justify-end py-2 px-3 block-selection">
							<v-badge content="12" offset-x="16" offset-y="44" color="transparent">
								<v-btn v-if="!isLocked" icon @click.stop.prevent="liked = !liked" @mousedown.stop @dblclick.stop>
									<v-icon v-if="!liked" size="28" color="white">mdi-heart-outline</v-icon>
									<v-icon v-else size="28" color="primary">mdi-heart</v-icon>
								</v-btn>
								<v-icon v-else size="28" color="white">mdi-heart-outline</v-icon>
							</v-badge>
						</div>

						<!-- Bottom image content -->
						<div v-if="isCreator" class="d-flex justify-start align-end pa-2" style="position: absolute; bottom: 0;" @dblclick.stop>
							<v-btn v-if="isForPublic" min-width="50" width="50" height="35"><v-icon color="secondary">mdi-earth</v-icon></v-btn>
							<v-btn v-else-if="isForSubscribers" min-width="50" width="50" height="35"><v-icon color="secondary">mdi-heart-outline</v-icon></v-btn>
							<v-btn v-else-if="isForPurchase" min-width="95" width="95" height="35">
								<span v-width="21" class="secondary white--text rounded-circle mr-2" style="padding: 1px">$</span>
								<div class="f-12 tertiary--text">37.00</div>
							</v-btn>
						</div>
					</div>
					<template v-slot:placeholder>
						<image-loader />
					</template>
				</v-img>
			</v-carousel-item>
		</v-carousel>
		<div class="pt-2 f-12 weight-500 lh-12 quaternary--text px-2 px-md-5">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, morbi mollis dolor convallis. Consequat in sed placerat libero. Purus magna quam orci egestas sit.
			Nunc, pulvinar vivamus non pretium at quis scelerisque mollis. Hendrerit ipsum et, sapien pellentesque enim sollicitudin.
		</div>
	</v-card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Privacy } from '@/core/models/entities/privacy';
import ImageLoader from '@/core/components/loaders/ImageLoader.vue';
import SmallProfile from '@/core/components/SmallProfile.vue';

export default Vue.extend({
	components: { SmallProfile, ImageLoader },
	props: {
		privacy: {
			type: Number as PropType<Privacy>,
			default: Privacy.Public
		},
		/**
		 * Is being viewed by a user who has already bought this post.
		 */
		isPurchased: {
			type: Boolean,
			default: false
		},
		/**
		 * Is being viewed by a user who is currently subscribed to the post's creator.
		 */
		isSubscribed: {
			type: Boolean,
			default: false
		},
		/**
		 * Is being viewed by the owner.
		 */
		isCreator: {
			type: Boolean,
			default: true
		},
		count: {
			type: Number,
			default: 1
		}
	},
	data() {
		return {
			selectedItem: 0,
			liked: false
		};
	},
	computed: {
		isForPublic(): boolean {
			return this.privacy == Privacy.Public;
		},
		isForSubscribers(): boolean {
			return this.privacy == Privacy.Subscribers;
		},
		isForPurchase(): boolean {
			return this.privacy == Privacy.Purchase;
		},
		isLocked(): boolean {
			if (this.isCreator || this.isForPublic) {
				return false;
			} else if (this.isForSubscribers) {
				return !this.isSubscribed;
			} else if (this.isForPurchase) {
				return !this.isPurchased;
			}

			return true;
		},
		isSmall(): boolean {
			return this.$vuetify.breakpoint.mdAndDown;
		}
	}
});
</script>

<style scoped lang="scss">
.xs,
.sm {
	.f-24 {
		font-size: 16px !important;
	}
}
</style>

<style lang="scss">
.post {
	.v-window,
	.v-window__container,
	.v-window-item,
	.v-image.v-responsive,
	.v-responsive__content {
		height: fit-content !important;
	}
}
</style>
