<template>
	<div>
		<v-container class="pt-0">
			<v-row no-gutters>
				<v-col cols="2"></v-col>
				<v-col cols="2" md="4" lg="3" xl="2" class="d-flex flex-column options pt-12">
					<div class="f-54 weight-700 lh-54 mb-5 tertiary--text">Settings</div>
					<option-card icon="mdi-account" title="Account Settings" subtitle="Personal information, Email" :value="selected == 0" @select="select(0)" />
					<option-card icon="mdi-lock" title="Security" subtitle="Change Password" :value="selected == 1" @select="select(1)" />
					<option-card icon="mdi-credit-card-outline" title="Payment Methods" subtitle="Manage Payment Cards" :value="selected == 2" @select="select(2)" />
					<option-card icon="mdi-star-outline" title="Subscriptions" subtitle="Manage subscriptions" :value="selected == 3" @select="select(3)" />
					<option-card icon="mdi-bell-outline" title="Notifications" subtitle="Emails, popups and more" :value="selected == 4" @select="select(4)" />
				</v-col>
				<!-- subscriptions is wider -->
				<v-col :cols="selected == 3 ? 8 : 5" class="pt-12 pl-12">
					<account v-if="selected == 0" />
					<security v-else-if="selected == 1" />
					<payment-methods v-else-if="selected == 2" />
					<subscriptions v-else-if="selected == 3" />
					<notifications v-else-if="selected == 4" />
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Account from './components/Account.vue';
import Notifications from './components/Notifications.vue';
import OptionCard from './components/OptionCard.vue';
import PaymentMethods from './components/PaymentMethods.vue';
import Security from './components/Security.vue';
import Subscriptions from './components/Subscriptions.vue';

export default Vue.extend({
	components: { OptionCard, Account, Security, PaymentMethods, Subscriptions, Notifications },
	data() {
		return {
			selected: 0
		};
	},
	methods: {
		select(selected: number): void {
			this.selected = selected;
		}
	}
});
</script>

<style scoped>
.options {
	height: 90vh;
	border-right: 1px var(--v-option-card-border-base) solid;
}
</style>
