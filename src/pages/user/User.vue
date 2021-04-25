<template>
	<div>
		<user-header />

		<br />

		<div class="d-flex flex-column flex-md-row justify-center align-center align-md-start mx-2 mx-md-0">
			<template v-if="!owned">
				<bio-card class="mx-4" @openDialog="openDialog" />
				<user-collections class="mx-4 my-6 my-md-0" @openDialog="openDialog" />
			</template>
			<template v-else>
				<v-card class="pa-5" width="370">
					<v-tabs v-model="activeTab" vertical hide-slider>
						<v-tab :key="0" v-height="40" class="d-flex justify-start f-20 weight-700" :class="[activeTab == 0 ? 'primary--text' : 'tertiary--text']">
							My Collection
						</v-tab>
						<v-tab :key="1" v-height="40" class="d-flex justify-start f-20 weight-700" :class="[activeTab == 1 ? 'primary--text' : 'tertiary--text']">
							Following
						</v-tab>
						<v-tab :key="2" v-height="40" class="d-flex justify-start f-20 weight-700" :class="[activeTab == 2 ? 'primary--text' : 'tertiary--text']">
							Trades
						</v-tab>
						<v-tab :key="3" v-height="40" class="d-flex justify-start f-20 weight-700" :class="[activeTab == 3 ? 'primary--text' : 'tertiary--text']">
							Account Information
						</v-tab>
						<v-tab :key="4" v-height="40" class="d-flex justify-start f-20 weight-700" :class="[activeTab == 4 ? 'primary--text' : 'tertiary--text']">
							Settings
						</v-tab>
					</v-tabs>
				</v-card>
			</template>
		</div>
		<v-dialog v-model="showDialog" content-class="naught-dialog" transition="scale-transition">
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
	props: {
		id: {
			type: String,
			default: ''
		}
	},
	data() {
		return { showDialog: false, activeTab: 0 };
	},
	computed: {
		owned(): boolean {
			return !this.id;
		}
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
		width: fit-content;
		max-width: fit-content;
	}
}
</style>
