<template>
	<div class="d-flex flex-column">
		<div class="f-24 weight-700 lh-54 tertiary--text mb-7">Account</div>
		<div v-if="verified" class="d-flex align-center">
			<v-icon color="primary">mdi-shield-check</v-icon>
			<div class="pl-2 f-16 weight-700 lh-21 primary--text">You are a verified Creator!</div>
		</div>
		<div v-else>
			<div class="d-flex mb-2 align-center">
				<v-icon color="tertiary">mdi-close-circle</v-icon>
				<div class="pl-2 f-16 weight-700 lh-21 tertiary--text">You are not verified</div>
			</div>
			<v-btn height="40" depressed color="primary" width="100%" class="f-16 weight-700 text-decoration-none">Verify Now</v-btn>
		</div>
		<div class="mt-7">
			<v-row>
				<v-col cols="12" md="6"><v-text-field hide-details outlined label="Name"></v-text-field></v-col>
				<v-col cols="12" md="6"><v-text-field hide-details outlined label="Surname"></v-text-field></v-col>
			</v-row>
		</div>
		<div class="mt-5">
			<v-row>
				<v-col cols="12" md="6"><v-text-field hide-details outlined label="Display Name"></v-text-field></v-col>
				<v-col cols="12" md="6"><v-text-field hide-details outlined label="Username"></v-text-field></v-col>
			</v-row>
		</div>
		<div class="mt-5">
			<v-row>
				<v-col cols="12" md="12">
					<v-text-field outlined hide-details label="Email" type="email">
						<template v-if="verified" v-slot:append>
							<div class="d-flex align-center">
								<v-icon color="primary" class="pr-2">
									mdi-check-circle
								</v-icon>
								<div class="primary--text">Verified</div>
							</div>
						</template>
					</v-text-field>
				</v-col>
			</v-row>
		</div>
		<div class="d-flex justify-end pt-12">
			<v-btn height="40" outlined color="secondary" class="f-16 weight-700 text-decoration-none mr-2" width="200px">Discard</v-btn>
			<v-btn height="40" color="primary" depressed class="f-16 weight-700 text-decoration-none" width="200px">Save</v-btn>
		</div>

		<div class="mt-12">
			<div class="f-16 weight-700 lh-40 tertiary--text">
				Danger Zone
			</div>
			<div class="d-flex justify-space-between align-center mt-2">
				<div class="d-flex flex-column">
					<div class="f-16 weight-700 warning--text">
						Hide Your Account
					</div>
					<div class="f-14 weight-700 quaternary--text">
						Set your account to private. All subscriptions will be cancelled.
					</div>
				</div>
				<v-btn color="warning" depressed height="40" width="200" class="f-16 weight-700 text-decoration-none">Hide</v-btn>
			</div>
			<div class="d-flex justify-space-between align-center mt-5">
				<div class="d-flex flex-column">
					<div class="f-16 weight-700 warning--text">
						Delete Your Account
					</div>
					<div class="f-14 weight-700 quaternary--text">
						This will permanently delete your account and all content on it
					</div>
				</div>
				<v-btn color="warning" depressed height="40" width="200" class="f-16 weight-700 text-decoration-none">Delete</v-btn>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	props: {
		verified: {
			type: Boolean,
			default: true
		}
	}
});
</script>
