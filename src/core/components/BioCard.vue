<template>
	<v-card class="pa-5 bio-card" width="370">
		<div v-height="35" class="d-flex justify-space-between">
			<div class="header">Bio</div>
			<v-btn icon height="28" width="28" color="primary"><v-icon>mdi-square-edit-outline</v-icon></v-btn>
		</div>
		<div v-width="310" class="bio-description quaternary--text">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, morbi mollis dolor convallis. Consequat in sed placerat libero. Purus magna quam orci egestas sit.
			Nunc, pulvinar vivamus non pretium at quis scelerisque mollis. Hendrerit ipsum et, sapien pellentesque enim sollicitudin. Nisl, vel pellentesque sollicitudin
			<br /><br />
			varius pellentesque risus, sed lacinia. Tempus, est morbi eu, malesuada sit. Feugiat egestas arcu scelerisque turpis vulputate orci nulla malesuada. At dui feugiat
			posuere sed augue sed turpis facilisis tincidunt.
		</div>
		<div class="full-width d-flex justify-center mt-4">
			<v-divider v-max-width="185" class="primary" />
		</div>
		<div class="d-flex flex-column justify-space-between align-center">
			<naught-card dense class="mt-4" />

			<naught-card dense class="mt-4" />
		</div>
	</v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import NaughtCard from './NaughtCard.vue';

export default Vue.extend({
	components: { NaughtCard }
});
</script>

<style scoped>
.bio-card {
	height: fit-content;
}
.bio-description {
	font-size: 12px;
}
</style>
