<template>
	<div>
		<div class="d-flex justify-space-between align-center full-width px-7">
			<div class="f-24 weight-700 tertiary--text">
				<div class="d-flex flex-column">
					<div class="mb-1">Plain Jane</div>
					<v-row class="ml-0 mb-1">
						<div class="mr-3">
							<v-icon left size="20" color="quaternary">
								mdi-account-multiple
							</v-icon>
							<span class="primary--text sub-text weight-500 ">2</span> <span class="quaternary--text sub-text"> Owner</span>
						</div>
						<div>
							<v-icon left size="20" color="quaternary">
								mdi-layers-triple-outline
							</v-icon>
							<span class="primary--text sub-text weight-500 ">3</span> <span class="quaternary--text sub-text"> Total</span>
						</div>
					</v-row>
				</div>
			</div>
			<div class="d-flex align-center">
				<div class="d-flex flex-column align-end mr-2">
					<div class="sub-text quaternary--text weight-500">Created by</div>
					<div class="sub-text tertiary--text weight-400 f-16">Roaring Kitty</div>
				</div>

				<v-avatar color="primary" size="56" class="profile-picture d-flex align-center">
					<v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
				</v-avatar>
			</div>
		</div>
		<v-divider class="mx-1" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style scoped>
.profile-picture {
	border: 2px var(--v-primary-base) solid;
}
</style>
