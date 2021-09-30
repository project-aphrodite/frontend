<template>
	<div>
		<div v-if="errorState" style="height: 40vh;" class="d-flex justify-center align-center f-54 primary--text">
			User does not exit
		</div>
		<div v-else>
			<user-header :user="viewUser" />

			<br />

			<div class="d-flex flex-column flex-md-row justify-center align-center align-md-start mx-2 mx-md-0 user-content">
				<template v-if="!isAuth">
					<div>
						<bio-card class="mx-4" :user="viewUser" @openDialog="openDialog" />
					</div>
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
								disabled
								class="d-flex justify-start f-20 weight-700 text-capitalize"
								:class="[activeTab == 2 ? 'primary--text' : 'tertiary--text']"
							>
								Trades
							</v-tab>
							<v-tab
								:key="3"
								v-height="40"
								disabled
								class="d-flex justify-start f-20 weight-700 text-capitalize"
								:class="[activeTab == 3 ? 'primary--text' : 'tertiary--text']"
							>
								Account Information
							</v-tab>
							<v-tab
								:key="4"
								v-height="40"
								disabled
								class="d-flex justify-start f-20 weight-700 text-capitalize"
								:class="[activeTab == 4 ? 'primary--text' : 'tertiary--text']"
							>
								Settings
							</v-tab>
						</v-tabs>
					</v-card>
				</template>
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
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import UserHeader from '@/pages/user/components/UserHeader.vue';
import BioCard from '@/pages/user/components/BioCard.vue';

import UserCollectionSection from '@/pages/user/components/UserCollectionSection.vue';
import FollowingSection from '@/pages/user/components/following/FollowingSection.vue';
import { retrieveUser } from '@/core/services/userService';
import User from '@/core/models/user';
import { toUser } from '@/core/translators/userTranslator';

export default Vue.extend({
	components: {
		UserHeader,
		BioCard,
		UserCollectionSection,
		FollowingSection
	},
	props: {
		id: {
			type: String,
			default: ''
		}
	},
	data() {
		return { activeTab: 0, viewUser: undefined as User | undefined, errorState: false };
	},
	computed: {
		isAuth(): boolean {
			if (!this.id) {
				return true;
			} else {
				if (!this.authUser) {
					return false;
				} else {
					return this.authUser.id == this.id;
				}
			}
		},
		authUser(): User | undefined {
			return this.$store.getters['getUser'];
		},
		userId(): string {
			return this.id ? this.id : this.authUser ? this.authUser.id : '';
		}
	},
	watch: {
		userId: {
			handler(): void {
				// if id = logged user id || id = 0 => 1
				this.errorState = false;

				if (this.userId) {
					this.retrieveAndSetUser();
				} else {
					this.errorState = true;
				}
				// else => 2
			},
			immediate: true
		}
	},
	methods: {
		retrieveAndSetUser(): void {
			retrieveUser(
				this.userId,
				r => {
					this.viewUser = toUser(r.data);
				},
				() => {
					this.errorState = true;
				}
			);
		},
		openDialog(): void {
			this.$emit('openDialog');
		}
	}
});
</script>

<style lang="scss">
.user-content > .v-window {
	padding-top: 4px;
	margin-top: -4px;
}
</style>
