<template>
	<div v-height="420" v-max-width="400" class="d-flex flex-column align-center px-6 px-sm-0">
		<div class="full-width tertiary--text f-38 weight-500 mb-12">Personalise <span class="quaternary--text f-18 weight-600">Your Account</span></div>
		<div class="full-width">
			<v-form ref="setupRef" v-model="valid" class="setup-form d-flex flex-column">
				<v-text-field v-model="creatorForm.name" :rules="[rules.required, rules.length]" label="Name" placeholder="Name" outlined class="mb-5">
					<template v-slot:message="{ message }">
						<div class="text-right">{{ message }}</div>
					</template>
				</v-text-field>
				<v-text-field v-model="creatorForm.surname" :rules="[rules.required, rules.length]" label="Surname" placeholder="Surname" outlined class="mb-5">
					<template v-slot:message="{ message }">
						<div class="text-right">{{ message }}</div>
					</template>
				</v-text-field>
				<v-text-field v-model="creatorForm.username" :rules="[rules.required, rules.length]" label="Username" outlined class="mb-5">
					<template v-slot:message="{ message }">
						<div class="text-right">{{ message }}</div>
					</template>
				</v-text-field>
				<div class="d-flex justify-space-between align-center mb-5">
					<div class="f-16 tertiary--text ">I will be posting explicit content</div>
					<v-switch v-model="creatorForm.switch" v-width="50" color="primary" class="mt-0 mb-1" hide-details></v-switch>
				</div>
			</v-form>
		</div>
		<div class="full-width d-flex justify-space-between">
			<v-btn :width="$vuetify.breakpoint.smAndDown ? '47%' : 190" height="55" outlined depressed color="primary" class="text-capitalize f-18 weight-700" @click="back">
				Back
			</v-btn>
			<v-btn
				:width="$vuetify.breakpoint.smAndDown ? '47%' : 190"
				:disabled="!valid"
				height="55"
				depressed
				color="primary"
				class="text-capitalize f-18 weight-700"
				@click="next"
				>Next</v-btn
			>
		</div>
		<div class="quaternary--text f-12 weight-600 text-center px-5 mt-5">
			By confirming, you agree to our <a class="info--text">Terms of Service</a> and our <a class="info--text">Privacy Policy</a>
		</div>
	</div>
</template>

<script lang="ts">
import ValidationRules from '@/core/models/validationRules';
import Vue from 'vue';
import CreatorForm from '@/core/models/forms/creatorForm';

export default Vue.extend({
	props: {
		creatorForm: {
			type: CreatorForm,
			default: (): CreatorForm => new CreatorForm()
		}
	},
	data() {
		return {
			valid: false,
			rules: ValidationRules
		};
	},
	mounted() {
		if (this.hasSetupFields()) {
			(this.$refs as any).setupRef.validate();
		}
	},
	methods: {
		back(): void {
			this.$emit('back');
		},
		next(): void {
			this.$emit('next');
		},
		hasSetupFields(): boolean {
			return !!this.creatorForm.name || !!this.creatorForm.surname || !!this.creatorForm.email || !!this.creatorForm.username;
		}
	}
});
</script>
<style>
.setup-form .v-text-field__details {
	position: absolute !important;
	right: 4px !important;
	top: 8px !important;
}

.setup-form .v-input__slot {
	margin-bottom: 0px;
}
</style>
