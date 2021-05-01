<template>
	<v-app-bar fixed app color="white" elevation="1" class="d-flex justify-center align-center" :height="$vuetify.breakpoint.mdAndUp ? 80 : 200">
		<div class="d-flex flex-column flex-md-row align-center justify-space-between" style="height: 100%">
			<div class="d-flex align-center flex-wrap">
				<v-btn text @click="$router.push({ name: 'home' })">
					<v-img src="@/assets/full-logo.svg" height="54" width="111" />
				</v-btn>

				<!-- Links -->
				<div class="link-buttons d-flex mx-6">
					<v-btn
						class="tertiary--text weight-700 mx-1 f-16"
						height="40"
						:width="$vuetify.breakpoint.lgAndUp ? 140 : 90"
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
						:width="$vuetify.breakpoint.lgAndUp ? 140 : 90"
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
						:width="$vuetify.breakpoint.lgAndUp ? 140 : 90"
						tile
						depressed
						color="transparent"
						@click="$router.push({ name: 'search' })"
					>
						Explore
					</v-btn>
				</div>
			</div>
			<div class="d-flex flex-column align-center justify-center">
				<div>
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
			</div>

			<div v-if="logged" class="d-flex align-center">
				<div v-min-width="140" class="d-flex flex-column align-end tertiary--text mx-5">
					<div class="weight-700 f-16">4.67 ETH</div>
					<div class="weight-400 f-12">0xC80523 . . . 4FBA</div>
				</div>

				<v-badge color="transparent" offset-x="22" offset-y="18" left>
					<small-profile-picture />
					<template v-slot:badge>
						<v-icon class="status" x-small color="secondary">mdi-circle</v-icon>
					</template>
				</v-badge>
			</div>
			<div v-else class="d-flex align-center ml-5 mb-2 mb-md-0">
				<v-btn class="text-none" color="primary" @click="onboard">Become a Creator</v-btn>
				<v-btn class="ml-5 text-none" color="secondary" outlined>Connect Wallet</v-btn>
			</div>
		</div>
	</v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import SmallProfilePicture from '@/core/components/SmallProfilePicture.vue';

export default Vue.extend({
	components: { SmallProfilePicture },
	data() {
		return { searchTerm: '', logged: false };
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
	min-width: 150px;
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
