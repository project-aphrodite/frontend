<template>
	<base-card title="Top Subscribers" class="pb-0" editable>
		<div class="d-flex flex-wrap pt-2">
			<small-profile-stat v-for="i in 6" :key="i" class="mb-3 mb-lg-5" />
			<div></div>
		</div>
	</base-card>
</template>

<script lang="ts">
import Vue from 'vue';

import BaseCard from '@/core/components/cards/BaseCard.vue';
import SmallProfileStat from '@/core/components/SmallProfileStat.vue';

export default Vue.extend({
	components: {
		BaseCard,
		SmallProfileStat
	}
});
</script>
