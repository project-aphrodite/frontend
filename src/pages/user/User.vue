<template>
	<div class="pb-4">
		<user-header />

		<br />

		<div class="d-flex flex-column flex-md-row justify-center align-center align-md-start mx-2 mx-md-0 user-content">
			<template v-if="!owned">
				<div class="">
					<bio-card class="mx-4" @openDialog="openDialog" />
				</div>

				<user-collection-section class="mx-4 my-6 my-md-0" @openDialog="openDialog" />
			</template>
			<template v-else>
				<v-card class="pa-5 mx-4 mb-4" width="370">
					<v-tabs v-model="activeTab" class="asd" vertical hide-slider>
						<v-tab
							:key="0"
							v-height="40"
							class="d-flex justify-start f-20 weight-700 text-capitalize"
							:class="[activeTab == 0 ? 'primary--text' : 'tertiary--text']"
						>
							My Collection
						</v-tab>
						<v-tab
							:key="1"
							v-height="40"
							class="d-flex justify-start f-20 weight-700 text-capitalize"
							:class="[activeTab == 1 ? 'primary--text' : 'tertiary--text']"
						>
							Following
						</v-tab>
						<v-tab
							:key="2"
							v-height="40"
							class="d-flex justify-start f-20 weight-700 text-capitalize"
							:class="[activeTab == 2 ? 'primary--text' : 'tertiary--text']"
						>
							Trades
						</v-tab>
						<v-tab
							:key="3"
							v-height="40"
							class="d-flex justify-start f-20 weight-700 text-capitalize"
							:class="[activeTab == 3 ? 'primary--text' : 'tertiary--text']"
						>
							Account Information
						</v-tab>
						<v-tab
							:key="4"
							v-height="40"
							class="d-flex justify-start f-20 weight-700 text-capitalize"
							:class="[activeTab == 4 ? 'primary--text' : 'tertiary--text']"
						>
							Settings
						</v-tab>
					</v-tabs>
				</v-card>
				<v-tabs-items v-model="activeTab">
					<div class="mb-1 mx-4">
						<v-tab-item :key="0" style="min-height:90vh;">
							<user-collection-section class="my-6 my-md-0" @openDialog="openDialog" />
						</v-tab-item>
						<v-tab-item :key="1" style="min-height:90vh;">
							<following-section />
						</v-tab-item>
					</div>
				</v-tabs-items>
			</template>
		</div>
		<v-dialog v-model="showDialog" content-class="naught-dialog" transition="scale-transition">
			<details-naught-dialog @close="closeDialog" />
		</v-dialog>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import UserHeader from '@/pages/user/components/UserHeader.vue';
import BioCard from '@/pages/user/components/BioCard.vue';
import DetailsNaughtDialog from '@/core/components/naughtDialog/DetailsNaughtDialog.vue';

import UserCollectionSection from '@/pages/user/components/UserCollectionSection.vue';
import FollowingSection from '@/pages/user/components/following/FollowingSection.vue';

export default Vue.extend({
	components: {
		UserHeader,
		BioCard,
		UserCollectionSection,
		DetailsNaughtDialog,
		FollowingSection
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

.user-content > .v-window {
	padding-top: 4px;
	margin-top: -4px;
}
</style>
