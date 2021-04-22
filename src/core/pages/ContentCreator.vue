<template>
	<div>
		<user-header />

		<br />

		<div class="d-flex flex-column flex-md-row justify-center align-center align-md-start mx-2 mx-md-0">
			<bio-card class="mx-4" />
			<user-collections class="mx-4 my-6 my-md-0" @showDialog="setShowDialog" />
			<v-btn @click="setShowDialog">asd</v-btn>
		</div>
		<v-dialog v-model="showDialog" content-class="naught-dialog" transition="dialog-bottom-transition">
			<!-- <v-card width="100%"> -->
			<!-- <div>
				<div class="d-flex justify-end full-width">
					<details-naught-dialog />
				</div>
			</div> -->
			<!-- </v-card> -->
			<!-- <v-card> -->
			<details-naught-dialog />
			<!-- </v-card> -->
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
		setShowDialog(): void {
			this.showDialog = true;
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
