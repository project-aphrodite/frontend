<template>
	<v-app-bar fixed app color="white" elevation="1" class="d-flex justify-center align-center" :height="$vuetify.breakpoint.mdAndUp ? 80 : 200">
		<div class="d-flex flex-column flex-md-row align-center justify-space-between" style="height: 100%">
			<div class="d-flex align-center flex-wrap">
				<v-avatar color="primary" size="56">
					<v-icon color="white" size="40">mdi-gender-male-female-variant</v-icon>
				</v-avatar>

				<!-- Links -->
				<div class="link-buttons d-flex mx-6">
					<v-btn
						active-class="no"
						exact-active-class="asd"
						class="tertiary--text weight-700 mx-1 f-16"
						height="40"
						:width="$vuetify.breakpoint.lgAndUp ? 140 : 90"
						tile
						depressed
						color="transparent"
						@click="$router.push({ name: 'view' })"
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
						color="text"
						outlined
						@keydown.enter="submit"
					></v-text-field>
				</div>
			</div>

			<div class="d-flex align-center">
				<div v-min-width="140" class="d-flex flex-column align-end tertiary--text mx-5">
					<div class="weight-700 f-16">4.67 ETH</div>
					<div class="weight-400 f-12">0xC80523 . . . 4FBA</div>
				</div>

				<v-badge color="transparent" offset-x="22" offset-y="18" left>
					<v-avatar color="primary" size="56" class="profile-picture d-flex align-center">
						<v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
					</v-avatar>
					<template v-slot:badge>
						<v-icon class="status" x-small color="secondary">mdi-circle</v-icon>
					</template>
				</v-badge>
			</div>
		</div>
	</v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	data() {
		return { searchTerm: '' };
	},
	methods: {
		submit(): void {
			this.$router.push({ name: 'search', query: { searchTerm: this.searchTerm } });
		}
	}
});
</script>

<style scoped>
.xl .search-text-field {
	min-width: 600px;
}

.lg .search-text-field {
	min-width: 400px;
}

.search-text-field {
	min-width: 150px;
}

.profile-picture {
	border: 3px var(--v-primary-base) solid;
}

.status {
	height: 13px;
	width: 13px;
	background: white;
	border-radius: 10px;
	/* padding-left: 1px; */
}

.theme--light.v-btn--active:hover::before,
.theme--light.v-btn--active::before {
	opacity: 0;
}
</style>
