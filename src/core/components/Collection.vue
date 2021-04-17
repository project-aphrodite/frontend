<template>
	<div>
		<v-row>
			<v-col v-height="50" cols="12" md="6" class="d-flex mb-5">
				<v-text-field dense label="Search" style="max-width: 250px;" color="text" outlined></v-text-field>

				<v-select
					label="Status"
					dense
					class="mx-8"
					style="max-width: 150px;"
					:menu-props="{ offsetY: true }"
					:items="['Active', 'Inactive']"
					color="text"
					outlined
				></v-select>
			</v-col>
			<v-col v-height="50" cols="12" md="6" lg="6" class="d-flex justify-md-end">
				<v-select
					label="All items"
					dense
					style="max-width: 150px;"
					:menu-props="{ offsetY: true }"
					:items="['All items', 'Available']"
					color="text"
					outlined
				></v-select>

				<v-select
					label="Sort by"
					dense
					class="ml-8 mr-6"
					style="max-width: 150px;"
					:menu-props="{ offsetY: true }"
					:items="['Name', 'Price']"
					color="text"
					outlined
				></v-select>
			</v-col>
		</v-row>
		<v-row>
			<!-- TODO CL: Use flex instead? Consider mobile users in this experiment -->
			<v-col v-for="i in 12" :key="i" class="py-4 d-flex justify-center justify-md-start " cols="12" sm="6" md="4" lg="3">
				<naught-card />
			</v-col>
		</v-row>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import NaughtCard from './NaughtCard.vue';

export default Vue.extend({
	components: { NaughtCard }
});
</script>

<style lang="scss" scoped></style>
