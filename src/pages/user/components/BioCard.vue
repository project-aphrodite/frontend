<template>
	<base-card title="Bio" editable>
		<div class="f-12 quaternary--text">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, morbi mollis dolor convallis. Consequat in sed placerat libero. Purus magna quam orci egestas sit.
			Nunc, pulvinar vivamus non pretium at quis scelerisque mollis. Hendrerit ipsum et, sapien pellentesque enim sollicitudin. Nisl, vel pellentesque sollicitudin
			<br /><br />
			varius pellentesque risus, sed lacinia. Tempus, est morbi eu, malesuada sit. Feugiat egestas arcu scelerisque turpis vulputate orci nulla malesuada. At dui feugiat
			posuere sed augue sed turpis facilisis tincidunt.
		</div>
	</base-card>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseCard from '@/core/components/cards/BaseCard.vue';

export default Vue.extend({
	components: {
		BaseCard
	}
});
</script>
