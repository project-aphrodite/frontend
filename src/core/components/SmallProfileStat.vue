<template>
	<div class="d-flex">
		<small-profile-picture class="mr-1" />
		<div class="d-flex flex-column justify-center align-start">
			<div v-width="100" class="f-16 tertiary--text weight-400 text-truncate">@ninenine</div>
			<div class="f-12 primary--text weight-500">31 months</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import SmallProfilePicture from './SmallProfilePicture.vue';
export default Vue.extend({
	components: { SmallProfilePicture }
});
</script>
