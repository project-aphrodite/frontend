<template>
	<div>
		<user-header />

		<br />

		<div class="d-flex flex-column flex-md-row justify-center align-center align-md-start">
			<bio-card class="mx-4" />
			<user-collections class="mx-4 my-6 my-md-0" />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import UserHeader from '@/core/components/UserHeader.vue';
import BioCard from '@/core/components/BioCard.vue';
import UserCollections from '@/core/components/UserCollections.vue';

export default Vue.extend({
	components: {
		UserHeader,
		BioCard,
		UserCollections
	}
});
</script>
