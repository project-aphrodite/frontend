<template>
	<base-card title="Media" editable>
		<div class="d-flex flex-wrap justify-space-between">
			<v-img
				v-for="i in 9"
				:key="i"
				class="border-radius-5"
				:class="{ 'mb-5': i < 6 }"
				src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=1.00xw:0.749xh;0,0.154xh&resize=980:*"
				max-width="100"
				width="100"
				max-height="100"
				height="100"
			>
				<template v-slot:placeholder>
					<image-loader />
				</template>
			</v-img>
		</div>
	</base-card>
</template>

<script lang="ts">
import Vue from 'vue';

import BaseCard from '@/core/components/cards/BaseCard.vue';
import ImageLoader from '@/core/components/loaders/ImageLoader.vue';

export default Vue.extend({
	components: {
		BaseCard,
		ImageLoader
	}
});
</script>
