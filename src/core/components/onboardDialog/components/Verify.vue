<template>
	<div v-height="420" v-max-width="400" class="d-flex flex-column align-center px-6 px-sm-0" style="max-width:100%;">
		<div class="full-width tertiary--text f-38 weight-500 mb-12">Verify <span class="quaternary--text f-18 weight-600">Your Identity</span></div>
		<div class="full-width">
			<v-form ref="verifyRef" v-model="valid">
				<file-upload v-model="creatorForm.creatorVerificationId" text="Photo of your ID" subtext="Upload a picture of your ID document (i.e. Passport)" />
				<file-upload
					v-model="creatorForm.creatorVerificationPhoto"
					text="Photo holding your ID"
					subtext="Upload a picture holding your ID (i.e. a selfie with your face visible)"
				/>
			</v-form>
		</div>
		<div class="full-width d-flex justify-space-between">
			<v-btn :width="$vuetify.breakpoint.smAndDown ? '47%' : 190" height="55" outlined depressed color="primary" class="text-capitalize f-18 weight-700" @click="back">
				Back
			</v-btn>
			<v-btn
				:width="$vuetify.breakpoint.smAndDown ? '47%' : 190"
				:loading="loading"
				:disabled="!valid"
				height="55"
				depressed
				color="primary"
				class="text-capitalize f-18 weight-700"
				@click="submit"
			>
				Complete
			</v-btn>
		</div>
		<div class="quaternary--text f-12 weight-600 text-center px-5 mt-5">
			By uploading an image of yourself, you agree to our <a>Terms of Service</a> and our <a>Privacy Policy</a>
		</div>
	</div>
</template>

<script lang="ts">
import HttpRequest from '@/core/models/http/httpRequest';
import { doPost } from '@/core/services/httpService';
import Vue from 'vue';
import CreatorForm from '../models/creatorForm';
import FileUpload from './verify/FileUpload.vue';
import User from '@/core/models/user';
import { toUser } from '@/core/translators/userTranslator';

export default Vue.extend({
	components: {
		FileUpload
	},
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
			},
			loading: false
		};
	},
	computed: {
		user(): User | undefined {
			return this.$store.getters['getUser'];
		},
		walletAddress(): string {
			return this.$store.getters['getWalletAddress'];
		},
		authToken(): string {
			return this.$store.getters['getAuthToken'];
		}
	},
	mounted() {
		if (this.hasVerifyFields()) {
			(this.$refs as any).verifyRef.validate();
		}
	},
	methods: {
		back(): void {
			this.$emit('back');
		},
		next(): void {
			this.$emit('next');
		},
		hasVerifyFields(): boolean {
			return !!this.creatorForm.creatorVerificationId || !!this.creatorForm.creatorVerificationPhoto;
		},
		submit(): void {
			if (!this.user) {
				this.$emit('showError', 'Wallet not connected');
			}
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			const request = new HttpRequest('/user/' + this.user!.id + '/creator', this.creatorForm.toRequestBody());
			this.loading = true;
			doPost(request, this.walletAddress, this.authToken, true).then((r: any): void => {
				this.loading = false;

				if (r.success) {
					this.$store.commit('setUser', toUser(r.data));
					this.next();
				} else {
					const formError = (Object.keys(r.data) as Array<string>).some(k => ['name', 'surname', 'email', 'username', 'explicit'].includes(k));

					const errorMessage = Object.values(r.data).join(' <br/>');
					if (formError) {
						this.$emit('showError', errorMessage, 1);
					} else {
						this.$emit('showError', errorMessage);
					}
				}
			});
		}
	}
});
</script>
