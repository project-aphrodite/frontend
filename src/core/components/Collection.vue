<template>
	<div>
		<v-row>
			<v-col v-height="50" cols="12" md="6" class="d-flex mb-5">
				<v-text-field v-max-width="250" dense label="Search" color="text" outlined></v-text-field>

				<v-select v-max-width="150" label="Status" dense class="mx-8" :menu-props="{ offsetY: true }" :items="['Active', 'Inactive']" color="text" outlined></v-select>
			</v-col>
			<v-col v-height="50" cols="12" md="6" lg="6" class="d-flex justify-md-end">
				<v-select v-max-width="150" label="All items" dense :menu-props="{ offsetY: true }" :items="['All items', 'Available']" color="text" outlined></v-select>

				<v-select v-max-width="150" label="Sort by" dense class="ml-8" :menu-props="{ offsetY: true }" :items="['Name', 'Price']" color="text" outlined></v-select>
			</v-col>
		</v-row>
		<v-row class="d-flex flex-md-row flex-column align-center">
			<div v-for="i in 12" :key="i" class="d-flex flex-column align-center">
				<naught-card class="mx-3 my-4" @openDialog="openDialog" />
			</div>
		</v-row>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import NaughtCard from './NaughtCard.vue';

export default Vue.extend({
	components: { NaughtCard },
	methods: {
		openDialog(): void {
			this.$emit('openDialog');
		}
	}
});
</script>
