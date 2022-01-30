<template>
	<div v-max-width="400" class="login d-flex flex-column align-center px-6 px-sm-0">
		<v-alert v-if="authErrorMessage" class="mt-n10" dense width="40%" style="position: absolute;" color="error" text dismissible>{{ authErrorMessage }}</v-alert>
		<div class="full-width tertiary--text f-38 weight-500 mb-6">Create <span class="quaternary--text f-18 weight-600">Your account</span></div>
		<div class="full-width d-flex flex-column ">
			<v-card
				light
				height="60"
				max-width="100%"
				class="py-2 px-7 d-flex justify-space-between align-center elevation-3 tertiary--text text-capitalize f-18 weight-700 mb-5"
				@click="registerWithGoogle"
			>
				<div class="text-decoration-none">Register with Google</div>
				<v-img max-height="50" max-width="50" :src="require('@/assets/dialog/google.svg')" />
			</v-card>
			<v-card
				light
				height="60"
				max-width="100%"
				:class="{ selected: isEmail }"
				class="py-2 px-7 d-flex justify-space-between align-center elevation-3 tertiary--text text-capitalize f-18 weight-700 mb-5"
				@click="registerWithEmail"
			>
				<div class="text-decoration-none">Register with Email</div>

				<v-img v-if="isEmail" max-height="50" max-width="50" :src="require('@/assets/dialog/email.svg')" />
				<v-img v-else max-height="50" max-width="50" :src="require('@/assets/dialog/email_primary.svg')" />
			</v-card>
			<v-form v-if="isEmail" ref="registerRef" v-model="valid" class="register-form d-flex flex-column">
				<v-text-field
					v-model="registrationForm.email"
					:error-messages="!touched ? getFieldError('email') : []"
					dense
					:rules="[rules.required, rules.email]"
					label="Email"
					outlined
					class="mb-4"
				>
					<template v-slot:message="{ message }">
						<div class="text-right">
							<template>{{ message }}</template>
						</div>
					</template>
				</v-text-field>
				<v-text-field
					v-model="registrationForm.password"
					type="password"
					dense
					:error-messages="!touched ? getFieldError('password') : []"
					:rules="[rules.required, rules.minLength6]"
					label="Password"
					outlined
					class="mb-4"
				>
					<template v-slot:message="{ message }">
						<div class="text-right">{{ message }}</div>
					</template>
				</v-text-field>
				<v-text-field
					v-model="registrationForm.passwordConfirm"
					type="password"
					dense
					:error-messages="!touched ? getFieldError('password_confirm') : []"
					:rules="[rules.required, rules.minLength6]"
					label="Password Confirmation"
					outlined
					class="mb-4"
				>
					<template v-slot:message="{ message }">
						<div class="text-right">{{ message }}</div>
					</template>
				</v-text-field>
				<v-text-field
					v-model="registrationForm.displayName"
					dense
					:error-messages="!touched ? getFieldError('display_name') : []"
					:rules="[rules.required]"
					label="Display Name"
					outlined
					class="mb-4"
				>
					<template v-slot:message="{ message }">
						<div class="text-right">{{ message }}</div>
					</template>
				</v-text-field>
			</v-form>
			<div v-else style="height: 295px;"></div>
		</div>
		<div class="d-flex flex-column mt-0">
			<div v-if="isEmail" class="full-width text-right">
				<v-btn
					v-width="190"
					:loading="authLoading"
					:disabled="!valid"
					max-width="47%"
					height="55"
					depressed
					color="primary"
					class="text-capitalize f-18 weight-700"
					@click="register"
				>
					Register
				</v-btn>
			</div>
			<div class="tertiary--text f-12 weight-600 text-center mt-4">Already have an account? <a class="info--text" @click="$emit('go-login')">Login</a></div>
			<div class="quaternary--text f-12 weight-600 text-center px-5 mt-3">
				By signing up, you agree to our <a class="info--text">Terms of Service</a> and our <a class="info--text">Privacy Policy</a>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import ValidationRules from '@/core/models/validationRules';
import RegistationForm from '@/core/models/forms/registrationForm';
import { GET_AUTH_BASE_ERROR, GET_AUTH_ERRORS, GET_AUTH_LOADING, IS_AUTH, SET_AUTH_ERRORS } from '@/core/store/auth';
import authService from '@/core/services/authService';
import FieldError from '@/core/models/forms/fieldError';

export default Vue.extend({
	data() {
		return {
			registrationForm: new RegistationForm(),
			isEmail: false,
			valid: true,
			rules: ValidationRules,

			// tracks whether vuetify validation or response validation should should
			// If touched, show vuetify validation
			touched: true
		};
	},
	computed: {
		authLoading(): boolean {
			return this.$store.getters[GET_AUTH_LOADING];
		},
		isAuth(): boolean {
			return this.$store.getters[IS_AUTH];
		},
		authErrorMessage(): string {
			return this.$store.getters[GET_AUTH_BASE_ERROR];
		},
		authErrors(): Array<FieldError> {
			return this.$store.getters[GET_AUTH_ERRORS];
		}
	},
	watch: {
		isAuth: {
			handler(): void {
				if (this.isAuth) {
					this.close();
				}
			},
			immediate: true
		},
		registrationForm: {
			handler(): void {
				this.touched = true;
			},
			deep: true
		}
	},
	destroyed() {
		this.$store.commit(SET_AUTH_ERRORS, []);
	},
	methods: {
		registerWithGoogle(): void {
			this.isEmail = false;
		},
		registerWithEmail(): void {
			this.isEmail = true;
		},
		register(): void {
			this.touched = false;
			authService.register(this.registrationForm.email, this.registrationForm.password, this.registrationForm.passwordConfirm, this.registrationForm.displayName);
		},
		close(): void {
			this.$emit('close');
		},
		hasFieldError(field: string): boolean {
			const find = this.authErrors.find(e => e.field == field);
			return !!find;
		},
		getFieldError(field: string): Array<string> {
			const find = this.authErrors.find(e => e.field == field);

			if (find && find.message) {
				return ((find.message as any) as Array<string>).map(m => m.substring(0, m.length - 1));
			}
			return [];
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
.register .selected.v-card {
	border: 2px var(--v-primary-base) solid;
	background: var(--v-primary-base);
	color: white !important;
}

.register-form .v-text-field__details {
	position: absolute !important;
	right: 4px !important;
	top: 8px !important;
}

.register-form .v-input__slot {
	margin-bottom: 0px;
}
</style>
