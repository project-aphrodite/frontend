<template>
	<div v-height="80" class="mb-5 d-flex flex-column verify-form-upload">
		<div ref="dropArea">
			<v-card class="elevation-3 mb-1" :class="[!valid ? 'error-state' : '']" height="60">
				<div class="upload-input d-flex justify-space-between align-center pl-5 pr-2 file-input-content">
					<div class="d-flex align-center">
						<v-icon size="25" color="secondary" class="pr-2">mdi-progress-upload</v-icon>
						<div class="f-18 weight-600 tertiary--text" style="padding-top: 2px;">
							<template v-if="internalFile && valid">
								<div class="filename-text text-truncate">
									{{ internalFile.name }}
								</div>
							</template>
							<template v-else>{{ text }}</template>
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

				<v-file-input v-model="internalFile" :rules="rules" accept="image/png, image/jpeg" class="file-input" @update:error="setErrorState">
					<template v-slot:message="{ message }">
						<div class="text-right">{{ message }}</div>
					</template>
				</v-file-input>
			</v-card>
		</div>
		<div></div>
		<div class="quaternary--text f-12">
			{{ subtext }}
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: {
		text: {
			type: String,
			default: 'Photo'
		},

		subtext: {
			type: String,
			default: 'Upload photo'
		},

		value: {
			type: File,
			default: undefined
		}
	},
	data() {
		return {
			rules: [(value: File): any => !!value || 'Field required', (value: File): any => !value || value.size < 2097152 || 'Max size 2MB'],
			internalFile: undefined as File | undefined,
			valid: true
		};
	},
	watch: {
		value: {
			handler(): void {
				if (this.value != this.internalFile) {
					this.internalFile = this.value;
				}
			},
			immediate: true
		},
		internalFile(): void {
			this.$emit('input', this.internalFile);
		}
	},
	mounted() {
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
		setErrorState(state: boolean): void {
			this.valid = !state;
		},
		preventDefaults(e: any): void {
			e.preventDefault();
			e.stopPropagation();
		},
		handleDrop(e: DragEvent): void {
			const dt = e.dataTransfer;
			if (dt) {
				this.internalFile = dt.files[0];
			} else {
				new Error('No files found');
			}
		}
	}
});
</script>

<style lang="scss">
.filename-text {
	width: 130px;
}

.md,
.lg,
.xl {
	.filename-text {
		width: 200px;
	}
}

.error-state.v-card {
	border: 2px var(--v-error-base) solid;
}

.verify-form-upload .v-text-field__details {
	position: absolute !important;
	right: 8px !important;
	top: 6px !important;
}

.verify-form-upload .v-input__slot {
	margin-bottom: 0px;
}

.verify-form-upload .v-file-input__text,
.verify-form-upload .v-text-field__slot {
	/* background-color: purple !important; */
	border-radius: 10px;
	width: 100%;
	height: 60px;
	position: absolute;
	cursor: pointer;
	opacity: 0;
}

.verify-form-upload .v-file-input {
	padding: 0 !important;
	margin: 0 !important;
}

.verify-form-upload .v-input__append-inner,
.verify-form-upload .v-input__prepend-outer {
	display: none;
}

.verify-form-upload .v-input__slot::before {
	border-style: none !important;
}

.verify-form-upload .v-input__slot::after {
	border-style: none !important;
}

.verify-form-upload .file-input-content {
	position: absolute;
	z-index: 100;
	height: 100%;
	width: 100%;
	border-radius: 10px;
	pointer-events: none;
}
.verify-form-upload .file-input {
	cursor: pointer;
	position: relative;
	z-index: 5;
	width: 100%;
	height: 100%;
}

.verify-form-upload .drag-box-container {
	display: none;
}

.verify-form-upload .show-drag .drag-box-container {
	display: unset;
	border-radius: 10px;
	z-index: 101;
	opacity: 1;
	height: 100%;
	position: absolute;
	max-width: 100%;
	width: 100%;
}

.verify-form-upload .drag-box {
	background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='lightgrey' stroke-width='1' stroke-dasharray='25%2c 10' stroke-dashoffset='10' stroke-linecap='square'/%3e%3c/svg%3e");
	border-radius: 10px;
}
</style>
