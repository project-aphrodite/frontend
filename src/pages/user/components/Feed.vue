<template>
	<v-card tile flat outlined class="pt-2 px-0" width="100%">
		<post />
		<post />
	</v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Post from './Post.vue';
export default Vue.extend({
	components: { Post }
});
</script>
