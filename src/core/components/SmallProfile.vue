<template>
	<div v-height="54" class="d-flex">
		<div class="d-flex flex-column justify-center align-end">
			<div v-width="140" class="f-16 tertiary--text weight-400 text-truncate text-right">Megan Harper</div>
			<div class="f-12 quaternary--text weight-500">@meganharper</div>
		</div>
		<small-profile-picture class="ml-2" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import SmallProfilePicture from './SmallProfilePicture.vue';
export default Vue.extend({
	components: { SmallProfilePicture }
});
</script>
