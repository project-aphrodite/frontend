<template>
	<v-card :max-width="dense ? 300 : 365" height="500" class="d-flex flex-column user-card" @click="go">
		<template v-if="!loading">
			<user-card-header :user="user" />

			<div class="d-flex flex-column justify-center align-center mt-2">
				<div class="weight-700 f-30 tertiary--text">Meepoksi Ledamna</div>
				<div v-if="!dense" class="d-flex justify-center full-width">
					<v-btn
						depressed
						color="secondary"
						:outlined="followed"
						width="140"
						height="40"
						class="mt-1 f-16 weight-700 text-capitalize"
						@click.stop.prevent="followed = !followed"
						@mousedown.stop
					>
						<v-icon v-if="followed">mdi-heart-outline</v-icon>
						<div v-else>Follow</div>
					</v-btn>
					<div v-width="25"></div>
					<v-btn
						depressed
						:color="subscribed ? 'tertiary' : 'primary'"
						width="140"
						height="40"
						class="mt-1 f-16 weight-700 text-capitalize white--text"
						@click.stop.prevent="subscribed = !subscribed"
						@mousedown.stop
					>
						{{ subscribed ? 'Subscribed' : 'Subscribe' }}
					</v-btn>
				</div>
				<div v-else>
					<subscribe-btn value alternative />
				</div>
			</div>
		</template>
		<v-skeleton-loader v-else max-width="365" width="365" height="100%" type="image"></v-skeleton-loader>
		<v-spacer />
		<v-divider />
		<user-card-stats v-if="!loading" v-height="80" :user="user" />
		<div v-else v-min-height="80" v-height="80" class="d-flex justify-center align-center">
			<v-skeleton-loader v-for="i in 3" :key="i" width="120" type="avatar" class="d-flex justify-center skeleton-stat"></v-skeleton-loader>
		</div>
	</v-card>
</template>

<script lang="ts">
import Vue from 'vue';

import User, { EMPTY_USER } from '@/core/models/entities/user';
import UserCardStats from './UserCardStats.vue';
import UserCardHeader from './UserCardHeader.vue';
import SubscribeBtn from '@/core/components/buttons/SubscribeBtn.vue';

export default Vue.extend({
	components: {
		UserCardHeader,
		UserCardStats,
		SubscribeBtn
	},

	props: {
		user: {
			type: User,
			default: (): User => EMPTY_USER
		},
		loading: {
			type: Boolean,
			default: false
		},
		dense: {
			type: Boolean,
			default: false
		}
	},

	data() {
		return {
			followed: false,
			subscribed: false
		};
	},

	methods: {
		go(): void {
			if (this.user) {
				// this.$router.push({ name: 'view', params: { id: String(this.user.id) } });
			}
		}
	}
});
</script>

<style>
.user-card .v-skeleton-loader__image {
	height: 100%;
}
.skeleton-stat .v-skeleton-loader__avatar.v-skeleton-loader__bone {
	border-radius: 10px !important;
}
</style>
