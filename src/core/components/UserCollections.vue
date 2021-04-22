<template>
	<div class="user-collections-container">
		<v-tabs v-model="activeTab" class="pa-0 collection-header elevation-3" hide-slider color="white">
			<v-tab :key="0" class="pa-0">
				<v-card width="180" height="100%" class=" d-flex justify-center align-center f-20 weight-700">
					Catalogue
				</v-card>
			</v-tab>
			<v-tab :key="1" class="pa-0">
				<v-card width="180" height="100%" class="d-flex justify-center align-center f-20 weight-700">
					Collected
				</v-card>
			</v-tab>
		</v-tabs>

		<v-tabs-items v-model="activeTab" class="collection-content elevation-2" elev>
			<v-tab-item v-for="i in 2" :key="i">
				<v-card class="pa-2 pa-md-7" min-width="304px" max-width="1130">
					<collection @openDialog="openDialog" />
				</v-card>
			</v-tab-item>
		</v-tabs-items>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Collection from './Collection.vue';

export default Vue.extend({
	components: { Collection },
	data() {
		return {
			activeTab: 0
		};
	},
	methods: {
		openDialog(): void {
			this.$emit('openDialog');
		}
	}
});
</script>

<style>
.xs .user-collections-container,
.sm .user-collections-container {
	width: 100%;
}

.collection-header .v-slide-group__wrapper {
	position: relative;
	margin-bottom: -1px;
	z-index: 1;
}
</style>

<style scoped>
.collection-header {
	width: 360px;
}

.xs .collection-header,
.sm .collection-header {
	width: 240px;
}

.xs .collection-header .v-card,
.sm .collection-header .v-card {
	width: 120px !important;
}

.xs .collection-header,
.sm .collection-header {
	font-size: 15px;
}

.v-tabs {
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	max-width: 360px;
}

.v-tabs .v-card {
	border-bottom-left-radius: 0px;
	border-bottom-right-radius: 0px;
	background: var(--v-tertiary-base);
	color: white !important;
}

.v-tabs .v-tab--active .v-card {
	border-bottom: solid white 2px;
	border-bottom-left-radius: 0px;
	border-bottom-right-radius: 0px;
	background: white;
	color: var(--v-tertiary-base) !important;
}

/* First tab's card */
.v-tabs-bar__content .v-tab:first-child .v-card {
	border-top-right-radius: 0px;
}

/* All other tabs */
.v-tabs-bar__content .v-tab:not(:first-child) .v-card {
	border-top-left-radius: 0px;
}

.collection-content .v-card {
	border-top-left-radius: 0px;
}

.collection-content {
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	border-top-right-radius: 10px;
}
</style>
