<template>
	<div v-height="80" class="mb-5 d-flex flex-column">
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

				<v-file-input v-model="internalFile" hide-details accept="image/png, image/jpeg" class="file-input"></v-file-input>
			</v-card>
		</div>
		<div></div>
		<div class="quaternary--text f-12">
			Upload a picture of your ID document (i.e. Passport)
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: {
		value: {
			type: File,
			default: new File([], '')
		}
	},
	data() {
		return {
			internalFile: undefined as File | undefined
		};
	},
	watch: {
		value(): void {
			if (this.value != this.internalFile) {
				this.internalFile = this.value;
			}
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
		preventDefaults(e: any): void {
			e.preventDefault();
			e.stopPropagation();
		},
		handleDrop(e: DragEvent): void {
			console.log(e);
			const dt = e.dataTransfer;
			if (dt) {
				// this.fileReference = ;
				this.internalFile = dt.files[0];
				// this.$emit('input', dt.files[0]);
			} else {
				new Error('No files found');
			}
		}
	}
});
</script>
