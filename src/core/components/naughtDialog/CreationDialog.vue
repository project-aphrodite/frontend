<template>
	<div>
		<base-naught-dialog class="creation-dialog" btn-color="tertiary" @close="emitClose()">
			<template v-if="step == 1" v-slot:image-slot>
				<div class="full-height pa-10">
					<div class="d-flex flex-column full-height justify-center align-center upload-box">
						<div class="d-flex flex-column align-center tertiary--text">
							<div class="f-20 weight-600 mb-4">Upload your file</div>
							<div class="f-12 weight-500 quaternary--text mb-5">Drop here or <span class="quinary--text">Browse</span></div>
							<v-icon class="mb-5" color="secondary" size="100">mdi-progress-upload</v-icon>
							<div class="f-14 quaternary--text">Supports <span class="quinary--text">jpg, png, gif</span></div>
						</div>
					</div>
				</div>
			</template>
			<div class="full-height">
				<div v-if="step == 1" class="px-2 px-lg-7 pt-10">
					<input-field label="Name" placeholder="Item Name" error required />
					<input-field text-area label="Description" placeholder="Provide a detailed description of your item" />
					<input-field label="External Link" placeholder="https://yoursite.com/item/1" />
					<input-field label="Total" placeholder="How many would you like to create?" error required />
					<div class="d-flex justify-space-between align-start">
						<v-checkbox class="ma-0"></v-checkbox>
						<div class="pt-1 f-14 weight-500 tertiary--text">
							I declare that this is an original content. I understand that no plagiarism or impersonation is allowed, and that the content can be removed
							anytime if detected.
						</div>
					</div>

					<div class="d-flex justify-end align-end mt-4 pb-5">
						<div class="f-12 quaternary--text mr-3">Creating one NFT charges <span class="secondary--text">0.01 BNB</span></div>
						<v-btn v-height="40" depressed min-width="150" class="primary f-16 weight-600 text-capitalize">Create</v-btn>
					</div>
				</div>

				<div v-else class="d-flex flex-column full-height align-center justify-center">
					<div v-min-height="370" class=" d-flex flex-column align-center justify-space-between">
						<div class="d-flex flex-column justify-center align-center">
							<div class="f-38 weight-500">Usual</div>
							<div class="f-24 weight-600 primary--text">Has been created</div>
							<div v-max-width="400" class="f-14 weight-600 quaternary--text text-center pt-12">
								Your item has been successfully created and added to your account. You can either choose to list the item now for sale, or do it at a later
								time.
							</div>
						</div>

						<div class="d-flex flex-wrap flex-sm-no-wrap ">
							<v-btn depressed outlined color="secondary" class="text-capitalize mr-4 f-18 weight-400 ">I'll do it later</v-btn>
							<v-btn depressed color="primary" class="text-capitalize f-18 weight-700 ">Sell my item</v-btn>
						</div>
					</div>
				</div>
			</div>
		</base-naught-dialog>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

import BaseNaughtDialog from './BaseNaughtDialog.vue';
import InputField from '@/core/components/input/InputField.vue';

export default Vue.extend({
	components: {
		BaseNaughtDialog,
		InputField
	},
	props: {
		/**
		 * Step 1 = Create Form
		 * Step 2 = Created Message with actions
		 */
		step: {
			type: Number,
			default: 1
		}
	},
	methods: {
		emitClose(): void {
			this.$emit('close');
		}
	}
});
</script>

<style scoped>
.upload-box {
	background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='lightgrey' stroke-width='1' stroke-dasharray='25%2c 10' stroke-dashoffset='67' stroke-linecap='square'/%3e%3c/svg%3e");
	border-radius: 10px;
}
</style>
