<template>
	<div v-height="420" v-max-width="400" class="d-flex flex-column align-center px-6 px-sm-0" style="max-width:100%;">
		<div class="full-width tertiary--text f-38 weight-500 mb-12">Verify <span class="quaternary--text f-18 weight-600">Your Identity</span></div>
		<div class="full-width">
			<v-form ref="verifyRef" v-model="valid" class="verify-form">
				<!-- <div v-height="80" class="mb-5 d-flex flex-column">
					<div ref="dropArea">
						<v-card class="elevation-3 mb-1 " height="60">
							<div class="upload-input d-flex justify-space-between align-center pl-5 pr-2 file-input-content">
								<div class="d-flex align-center">
									<v-icon size="25" color="secondary" class="pr-2">mdi-progress-upload</v-icon>
									<div class="f-18 weight-600 tertiary--text" style="padding-top: 2px;">
										<template v-if="idImage">{{ idImage.name }}</template>
										<template v-else>Photo of your ID </template>
									</div>
								</div>
								<div class="quaternary--text f-12 weight-500">Drop here or <span class="quinary--text"> Browse</span></div>
							</div>
							<div ref="dropAreaActive" class="drag-box-container" style="pointer-events: none;">
								<v-card class="elevation-3 pa-2 mb-1 d-flex flex-column justify-center" height="60">
									<div v-height="60" class="drag-box d-flex justify-center align-center quaternary--text f-18 weight-600">
										Drop here
									</div>
								</v-card>
							</div>

							<v-file-input v-model="idImage" hide-details accept="image/png, image/jpeg" class="file-input"></v-file-input>
						</v-card>
					</div>
					<div></div>
					<div class="quaternary--text f-12">
						Upload a picture of your ID document (i.e. Passport)
					</div>
				</div> -->

				<!-- <div class="mb-5">
					<v-card class="elevation-3 mb-1">
						<div class="d-flex justify-space-between align-center pl-5 pr-2 file-input-content">
							<div class="d-flex align-center">
								<v-icon color="secondary" class="pr-2">mdi-progress-upload</v-icon>
								<div class="f-18 weight-600 tertiary--text">Photo holding your ID</div>
							</div>
							<div class="quaternary--text f-12 weight-500">Drop here or <span class="quinary--text"> Browse</span></div>
						</div>

						<v-file-input hide-details class="file-input"></v-file-input>
					</v-card>
					<div></div>
					<div class="quaternary--text f-12">
						Upload a picture holding your ID (i.e. a selfie with your face visible)
					</div>
				</div> -->
			</v-form>
		</div>
		<div class="full-width d-flex justify-space-between">
			<v-btn v-width="190" max-width="100%" height="55" outlined depressed color="primary" class="text-capitalize f-18 weight-700" @click="back">
				Back
			</v-btn>
			<v-btn v-width="190" :disabled="!valid" max-width="100%" height="55" depressed color="primary" class="text-capitalize f-18 weight-700" @click="next">
				Complete
			</v-btn>
		</div>
		<div class="quaternary--text f-12 weight-600 text-center px-5 mt-5">
			By uploading an image of yourself, you agree to our <a>Terms of Service</a> and our <a>Privacy Policy</a>
		</div>
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
			},
			idImage: undefined as any
		};
	},
	watch: {
		idImage(): void {
			console.log(this.idImage);
		}
	},
	mounted() {
		if (this.hasVerifyFields()) {
			(this.$refs as any).verifyRef.validate();
		}

		const dropArea = (this.$refs as any).dropArea;

		['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
			dropArea.addEventListener(eventName, this.preventDefaults, false);
		});

		['dragenter', 'dragover'].forEach(eventName => {
			dropArea.addEventListener(eventName, () => dropArea.classList.add('show-drag'), false);
		});

		['dragleave', 'drop'].forEach(eventName => {
			dropArea.addEventListener(eventName, () => dropArea.classList.remove('show-drag'), false);
		});

		dropArea.addEventListener('drop', this.handleDrop, false);
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
		preventDefaults(e: any): void {
			e.preventDefault();
			e.stopPropagation();
		},
		handleDrop(e: DragEvent): void {
			console.log(e);
			const dt = e.dataTransfer;
			if (dt) {
				this.idImage = dt.files[0];
			} else {
				new Error('No files found');
			}
		}
	}
});
</script>
<style>
.verify-form .v-input__slot {
	margin-bottom: 0px;
}

.verify-form .v-file-input__text,
.verify-form .v-text-field__slot {
	/* background-color: purple !important; */
	border-radius: 10px;
	width: 100%;
	height: 60px;
	position: absolute;
	cursor: pointer;
	opacity: 0;
}

.verify-form .v-file-input {
	padding: 0 !important;
	margin: 0 !important;
}

.verify-form .v-input__append-inner,
.verify-form .v-input__prepend-outer {
	display: none;
}

.verify-form .v-input__slot::before {
	border-style: none !important;
}

.verify-form .v-input__slot::after {
	border-style: none !important;
}

.verify-form .file-input-content {
	position: absolute;
	z-index: 100;
	height: 100%;
	width: 100%;
	border-radius: 10px;
	pointer-events: none;
}
.verify-form .file-input {
	cursor: pointer;
	position: relative;
	z-index: 5;
	width: 100%;
	height: 100%;
}

.verify-form .drag-box-container {
	display: none;
}

.verify-form .show-drag .drag-box-container {
	display: unset;
	border-radius: 10px;
	z-index: 101;
	opacity: 1;
	height: 100%;
	position: absolute;
	max-width: 100%;
	width: 100%;
}

.verify-form .drag-box {
	background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='lightgrey' stroke-width='1' stroke-dasharray='25%2c 10' stroke-dashoffset='10' stroke-linecap='square'/%3e%3c/svg%3e");
	border-radius: 10px;
}
</style>
