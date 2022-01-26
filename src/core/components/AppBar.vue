<template>
	<v-app-bar
		fixed
		app
		color="white"
		elevation="1"
		class="d-flex justify-center align-center"
		:class="{ 'small-app-bar': $vuetify.breakpoint.smAndDown }"
		:height="$vuetify.breakpoint.mdAndUp ? 80 : showLinks ? 290 : 170"
	>
		<div class="d-flex flex-column flex-md-row align-center justify-space-between full-width" style="height: 100%">
			<div class="d-flex flex-column flex-md-row align-center full-width">
				<div class="d-flex align-center justify-space-between full-width">
					<v-btn text class="px-0" @click="$router.push({ name: 'home' })">
						<v-img src="@/assets/full-logo.svg" height="54" width="111" />
					</v-btn>
					<v-btn height="40" width="40" class="d-md-none" icon @click="showLinks = !showLinks"><v-icon>mdi-menu</v-icon></v-btn>
				</div>
				<!-- Links -->
				<div v-if="$vuetify.breakpoint.mdAndUp || showLinks" class="link-buttons d-flex flex-column align-center flex-md-row mx-6 full-width">
					<v-btn
						class="tertiary--text weight-700 mx-1 f-16"
						height="40"
						:width="$vuetify.breakpoint.mdAndUp ? 140 : '100%'"
						tile
						depressed
						color="transparent"
						@click="$router.push({ name: 'home' })"
					>
						Home
					</v-btn>
					<v-btn
						class="tertiary--text weight-700 mx-1 f-16"
						height="40"
						:width="$vuetify.breakpoint.mdAndUp ? 140 : '100%'"
						tile
						depressed
						color="transparent"
						@click="$router.push({ name: 'search' })"
					>
						Creators
					</v-btn>
					<v-btn
						class="tertiary--text weight-700 mx-1 f-16"
						height="40"
						:width="$vuetify.breakpoint.mdAndUp ? 140 : '100%'"
						tile
						depressed
						color="transparent"
						@click="$router.push({ name: 'search' })"
					>
						Explore
					</v-btn>
				</div>
			</div>
			<div class="d-flex flex-column align-center justify-center full-width">
				<v-text-field
					v-model="searchTerm"
					v-height="40"
					class="search-text-field"
					prepend-inner-icon="mdi-magnify"
					dense
					placeholder="Search"
					outlined
					@keydown.enter="submit"
				></v-text-field>
			</div>

			<div class="d-flex justify-space-between align-center ml-0 ml-md-5 mb-2 mb-md-0 full-width">
				<v-btn v-if="!user || !user.creator" :width="$vuetify.breakpoint.smAndDown ? '47%' : 160" class="text-none" color="primary" @click="onboard"
					>Become a Creator</v-btn
				>
				<v-spacer />
				<v-btn v-if="!user" :width="$vuetify.breakpoint.smAndDown ? '47%' : 160" class="ml-5 text-none" color="secondary" outlined>Connect Wallet</v-btn>

				<div v-else class="d-flex align-center">
					<div v-min-width="100" class="d-flex flex-column align-end tertiary--text mr-4 ml-1">
						<div class="weight-700 f-16">0.00 ETH</div>
						<div class="weight-400 f-12">{{ walletAddress }}</div>
					</div>

					<v-badge color="transparent" offset-x="22" offset-y="18" left>
						<small-profile-picture />
						<template v-slot:badge>
							<v-icon class="status" x-small color="secondary">mdi-circle</v-icon>
						</template>
					</v-badge>
				</div>
			</div>

			<div class="d-flex justify-space-between align-center ml-0 ml-md-5 mb-2 mb-md-0 full-width">
				<v-btn v-if="!user || !user.creator" :width="$vuetify.breakpoint.smAndDown ? '47%' : 160" class="text-none" color="primary" @click="onboard">Hein LOGIN</v-btn>
				<v-spacer />
				<v-btn v-if="!user" :width="$vuetify.breakpoint.smAndDown ? '47%' : 160" class="ml-5 text-none" color="secondary" outlined>Connect Wallet</v-btn>

				<div v-else class="d-flex align-center">
					<div v-min-width="100" class="d-flex flex-column align-end tertiary--text mr-4 ml-1">
						<div class="weight-700 f-16">0.00 ETH</div>
						<div class="weight-400 f-12">{{ walletAddress }}</div>
					</div>

					<v-badge color="transparent" offset-x="22" offset-y="18" left>
						<small-profile-picture />
						<template v-slot:badge>
							<v-icon class="status" x-small color="secondary">mdi-circle</v-icon>
						</template>
					</v-badge>
				</div>
			</div>
		</div>
	</v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import SmallProfilePicture from '@/core/components/SmallProfilePicture.vue';
import User from '../models/user';

export default Vue.extend({
	components: { SmallProfilePicture },
	data() {
		return { searchTerm: '', logged: false, showLinks: false };
	},
	computed: {
		user(): User | undefined {
			return this.$store.getters['getUser'];
		},
		walletAddress(): string {
			return this.$store.getters['getWalletAddress'];
		},
		authToken(): string {
			return this.$store.getters['getAuthToken'];
		}
	},
	methods: {
		submit(): void {
			this.$router.push({ name: 'search', query: { searchTerm: this.searchTerm } });
		},
		onboard(): void {
			this.$emit('onboard');
		}
	}
});
</script>

<style scoped>
.xl .search-text-field {
	min-width: 450px;
}

.lg .search-text-field {
	min-width: 400px;
}

.search-text-field {
	min-width: 100%;
}

.status {
	height: 13px;
	width: 13px;
	background: white;
	border-radius: 10px;
}

.theme--light.v-btn--active:hover::before,
.theme--light.v-btn--active::before {
	opacity: 0;
}
</style>

<style>
.small-app-bar .v-toolbar__content {
	width: 100%;
}
</style>
