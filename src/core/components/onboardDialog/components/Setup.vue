<template>
	<div v-height="420" v-max-width="400" class="d-flex flex-column align-center px-6 px-sm-0" style="max-width:100%;">
		<div class="full-width tertiary--text f-38 weight-500 mb-12">Setup <span class="quaternary--text f-18 weight-600">Your Account</span></div>
		<div class="full-width">
			<v-form ref="setupRef" v-model="valid" class="setup-form">
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
				<v-text-field v-model="creatorForm.email" :rules="[rules.required, rules.email]" label="Email" outlined class="mb-5">
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
			<v-btn v-width="190" max-width="100%" height="55" outlined depressed color="primary" class="text-capitalize f-18 weight-700" @click="back">
				Back
			</v-btn>
			<v-btn v-width="190" :disabled="!valid" max-width="100%" height="55" depressed color="primary" class="text-capitalize f-18 weight-700" @click="next">Next</v-btn>
		</div>
		<div class="quaternary--text f-12 weight-600 text-center px-5 mt-5">By confirming, you agree to our <a>Terms of Service</a> and our <a>Privacy Policy</a></div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import CreatorForm from '../models/creatorForm';
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
			rules: {
				required: (value: any): any => !!value || 'Field required',
				length: (value: any): any => (!!value && value.length <= 20) || 'Max 20 characters',
				email: (value: any): any => {
					const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					return pattern.test(value) || 'E-mail invalid';
				}
			}
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
