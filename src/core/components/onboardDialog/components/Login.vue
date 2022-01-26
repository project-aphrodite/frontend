<template>
	<div v-max-width="400" class="login d-flex flex-column align-center px-6 px-sm-0">
		<div class="full-width tertiary--text f-38 weight-500 mb-12">Log in <span class="quaternary--text f-18 weight-600">To your account</span></div>
		<div class="full-width d-flex flex-column ">
			<v-card
				light
				height="60"
				max-width="100%"
				class="py-2 px-7 d-flex justify-space-between align-center elevation-3 tertiary--text text-capitalize f-18 weight-700 mb-5"
				@click="loginWithGoogle"
			>
				<div class="text-decoration-none">Sign in with Google</div>
				<v-img max-height="50" max-width="50" :src="require('@/assets/dialog/google.svg')" />
			</v-card>
			<v-card
				light
				height="60"
				max-width="100%"
				:class="{ selected: true }"
				class="py-2 px-7 d-flex justify-space-between align-center elevation-3 tertiary--text text-capitalize f-18 weight-700 mb-5"
			>
				<div class="text-decoration-none">Sign in with Email</div>

				<v-img max-height="50" max-width="50" :src="require('@/assets/dialog/email.svg')" />
			</v-card>
			<v-form ref="loginRef" v-model="valid" class="login-form d-flex flex-column">
				<v-text-field v-model="userModel.email" dense :rules="[rules.required, rules.email]" label="Email" outlined class="mb-4">
					<template v-slot:message="{ message }">
						<div class="text-right">{{ message }}</div>
					</template>
				</v-text-field>
				<v-text-field v-model="userModel.password" dense :rules="[rules.required, rules.length]" label="Password" outlined class="mb-4">
					<template v-slot:message="{ message }">
						<div class="text-right">{{ message }}</div>
					</template>
				</v-text-field>
			</v-form>
		</div>
		<div class="d-flex flex-column mt-10">
			<div class="full-width text-right">
				<v-btn v-width="190" :disabled="!valid" max-width="47%" height="55" depressed color="primary" class="text-capitalize f-18 weight-700" @click.stop="">
					Login
				</v-btn>
			</div>
			<div class="tertiary--text f-12 weight-600 text-center mt-4">Don’t have an account? <a class="info--text" @click="$emit('go-create')">Register</a></div>
			<div class="quaternary--text f-12 weight-600 text-center px-5 mt-4">
				By signing up, you agree to our <a class="info--text">Terms of Service</a> and our <a class="info--text">Privacy Policy</a>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import ValidationRules from '@/core/models/validationRules';
import LoginUserModel from '../models/loginUserModel';
export default Vue.extend({
	props: {
		userModel: {
			type: LoginUserModel,
			default: (): LoginUserModel => new LoginUserModel()
		}
	},
	data() {
		return {
			valid: true,
			rules: ValidationRules
		};
	},
	methods: {
		loginWithGoogle(): void {
			//
		},
		login(): void {
			// this.$emit('next');
		}
	}
});
</script>

<style scoped>
.v-card {
	-webkit-user-select: none; /* Safari */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* IE10+/Edge */
	user-select: none; /* Standard */
}
</style>

<style>
.login .selected.v-card {
	border: 2px var(--v-primary-base) solid;
	background: var(--v-primary-base);
	color: white !important;
}

.login-form .v-text-field__details {
	position: absolute !important;
	right: 4px !important;
	top: 8px !important;
}

.login-form .v-input__slot {
	margin-bottom: 0px;
}
</style>
