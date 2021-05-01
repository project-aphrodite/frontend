<template>
	<v-container v-min-height="600" fluid class="d-flex align-center elevation-20 base-footer">
		<v-container class="d-flex flex-column flex-md-row justify-center">
			<div class="width-45 mb-10 mb-md-0">
				<v-img height="50" width="50" src="@/assets/logo.svg" />
			</div>
			<div v-min-height="400" class="d-flex flex-column justify-space-between f-24 primary--text weight-500">
				<div class="d-flex">
					<div class="d-flex flex-column link-container">
						<div class="tertiary--text weight-700 mb-4">Product</div>
						<a href="" class="mb-2">Home</a>
						<a href="" class="mb-2">Creators</a>
						<a href="" class="mb-2">Desires</a>
						<a href="" class="mb-2">About</a>
					</div>
					<div class="d-flex flex-column link-container">
						<div class="tertiary--text weight-700 mb-4">Community</div>
						<a href="" class="mb-2">Blog</a>
					</div>
					<div class="d-flex flex-column link-container">
						<div class="tertiary--text weight-700 mb-4">Support</div>
						<a href="" class="mb-2">Contact</a>
						<a href="" class="mb-2">FAQ</a>
					</div>
				</div>
				<div>
					<div class="d-flex justify-end mb-5">
						<v-btn icon class="elevation-3 ml-4">
							<v-icon>mdi-facebook</v-icon>
						</v-btn>
						<v-btn icon class="elevation-3 ml-4">
							<v-icon>mdi-twitter</v-icon>
						</v-btn>
						<v-btn icon class="elevation-3 ml-4">
							<v-icon>mdi-instagram</v-icon>
						</v-btn>
						<v-btn icon class="elevation-3 ml-4">
							<v-icon>mdi-discord</v-icon>
						</v-btn>
						<v-btn icon class="elevation-3 ml-4">
							<v-icon>mdi-youtube</v-icon>
						</v-btn>
						<v-btn icon class="elevation-3 ml-4">
							<v-icon>mdi-telegram</v-icon>
						</v-btn>
					</div>
					<div class="d-flex justify-space-between tertiary--text f-16 weight-500">
						<div>© Desiary 2021, All rights reserved.</div>

						<div class="d-flex justify-space-between width-35">
							<div>GDPR</div>
							<div>Terms</div>
							<div>Privacy</div>
						</div>
					</div>
				</div>
			</div>
		</v-container>
	</v-container>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style scoped lang="scss">
.xs,
.sm {
	.base-footer {
		padding-bottom: 120px;
	}
}

.link-container {
	width: 250px;
}

a {
	text-decoration: none;
}

a:hover {
	text-decoration: underline;
}
</style>
