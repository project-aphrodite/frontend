<template>
	<v-card width="515" max-width="515" min-height="100" class="pa-5" elevation="3">
		<div v-height="56" class="d-flex justify-space-between align-center">
			<div class="d-flex">
				<small-profile-picture class="mr-5" />
				<div class="d-flex flex-column">
					<div class="primary--text f-18 weight-600">Meeposki Meeparo</div>
					<div class="tertiary--text f-12 weight-600 mb-1">@meeposkimeepasd</div>
					<div class="quaternary--text f-12 weight-500">Following since <span class="tertiary--text weight-700">05/01/2021</span></div>
				</div>
			</div>
			<v-btn outlined color="secondary" class="f-16 weight-700 text-capitalize" width="140">Following</v-btn>
		</div>
	</v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import SmallProfilePicture from '@/core/components/SmallProfilePicture.vue';

export default Vue.extend({
	components: { SmallProfilePicture }
});
</script>

<style scoped></style>
