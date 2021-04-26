<template>
	<v-avatar color="primary" size="56" class="profile-picture d-flex align-center">
		<v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
	</v-avatar>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style scoped>
.profile-picture {
	border: 3px var(--v-primary-base) solid;
}
</style>
