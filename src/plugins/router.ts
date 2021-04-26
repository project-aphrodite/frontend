import Vue from 'vue';
import VueRouter from 'vue-router';
import User from '@/pages/user/User.vue';
import Search from '@/pages/search/Search.vue';
import NotFound from '@/pages/notFound/NotFound.vue';
import Home from '@/pages/home/Home.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	scrollBehavior(): { x: number; y: number } {
		return { x: 0, y: 0 };
	},
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/view/:id?',
			name: 'view',
			component: User,
			props: (route): any => ({ id: route.params.id })
		},
		{
			path: '/search',
			name: 'search',
			component: Search,
			props: (route): any => ({ searchTerm: route.query.searchTerm })
		},
		{
			// will match everything
			path: '*',
			component: NotFound
		}
	]
});

/**
 * Gets rid of non-critical duplicated navigation error.
 * https://stackoverflow.com/questions/65878999/vue-router-push-error-avoided-redundant-navigation-to-current-location
 */
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location: any): any {
	return (originalPush.call(this, location) as any).catch(() => {
		// Do nothing
	});
};

export default router;
