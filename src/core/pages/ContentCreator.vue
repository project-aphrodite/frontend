<template>
	<div>
		<user-header />

		<br />

		<div class="d-flex flex-column flex-md-row justify-center align-center align-md-start mx-2 mx-md-0">
			<bio-card class="mx-4" @openDialog="openDialog" />
			<user-collections class="mx-4 my-6 my-md-0" @openDialog="openDialog" />
		</div>
		<v-dialog v-model="showDialog" content-class="naught-dialog" transition="dialog-bottom-transition">
			<details-naught-dialog @close="closeDialog" />
		</v-dialog>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import UserHeader from '@/core/components/UserHeader.vue';
import BioCard from '@/core/components/BioCard.vue';
import UserCollections from '@/core/components/UserCollections.vue';
import DetailsNaughtDialog from '@/core/components/naughtDialog/DetailsNaughtDialog.vue';

export default Vue.extend({
	components: {
		UserHeader,
		BioCard,
		UserCollections,
		DetailsNaughtDialog
	},
	data() {
		return { showDialog: false };
	},
	methods: {
		openDialog(): void {
			this.showDialog = true;
		},
		closeDialog(): void {
			this.showDialog = false;
		}
	}
});
</script>

<style lang="scss">
.naught-dialog {
	min-height: 721px;
}

.naught-dialog {
	max-width: 620px;
	top: -3vh;
}

.lg,
.xl {
	.naught-dialog {
		max-width: 1500px;
	}
}
</style>
