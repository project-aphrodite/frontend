<template>
	<v-app-bar fixed app color="white" elevation="1" class="d-flex justify-center align-center" :height="$vuetify.breakpoint.mdAndUp ? 80 : 200">
		<div class="d-flex flex-column flex-md-row align-center justify-space-between" style="height: 100%">
			<div class="d-flex align-center flex-wrap">
				<v-avatar color="primary" size="56">
					<v-icon color="white" size="40">mdi-gender-male-female-variant</v-icon>
				</v-avatar>

				<!-- Links -->
				<div class="link-buttons d-flex mx-6">
					<v-btn class="tertiary--text font-weight-bold mx-1" height="40" :width="$vuetify.breakpoint.lgAndUp ? 140 : 90" tile depressed color="transparent">
						Home
					</v-btn>
					<v-btn class="tertiary--text font-weight-bold mx-1" height="40" :width="$vuetify.breakpoint.lgAndUp ? 140 : 90" tile depressed color="transparent">
						Creators
					</v-btn>
					<v-btn class="tertiary--text font-weight-bold mx-1" height="40" :width="$vuetify.breakpoint.lgAndUp ? 140 : 90" tile depressed color="transparent">
						Explore
					</v-btn>
				</div>
			</div>
			<div class="d-flex flex-column align-center justify-center">
				<div>
					<v-text-field v-height="40" class="search-text-field" prepend-inner-icon="mdi-magnify" dense label="Search" color="text" outlined></v-text-field>
				</div>
			</div>

			<div class="d-flex align-center">
				<div v-min-width="140" class="font-weight-bold d-flex flex-column align-end tertiary--text mx-5">
					<div class="weight-bold eth-balance">4.67 ETH</div>
					<div class="normal-text">0xC80523 . . . 4FBA</div>
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

export default Vue.extend({});
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

.link-buttons .v-btn,
.eth-balance {
	font-size: 16px;
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
</style>
