<template>
	<div class="custom-input-field mb-5">
		<div class="d-flex justify-space-between mb-3">
			<div class="f-20 weight-700 tertiary--text">{{ label }} <span v-if="required" class="primary--text">*</span></div>
			<v-icon v-if="error" size="20" color="primary">mdi-information-outline</v-icon>
		</div>
		<v-textarea v-if="textArea" hide-details :rows="3" :placeholder="placeholder" no-resize outlined></v-textarea>
		<v-text-field v-else hide-details :placeholder="placeholder" outlined></v-text-field>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	props: {
		required: {
			type: Boolean,
			default: false
		},
		label: {
			type: String,
			default: ''
		},
		placeholder: {
			type: String,
			default: ''
		},
		error: {
			type: Boolean,
			default: false
		},
		textArea: {
			type: Boolean,
			default: false
		}
	}
});
</script>

<style>
.custom-input-field textarea {
	margin-bottom: 10px;
}
</style>
