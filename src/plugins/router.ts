import Vue from 'vue';
import VueRouter from 'vue-router';
import ContentCreator from '@/pages/contentCreator/ContentCreator.vue';
import Search from '@/pages/search/Search.vue';
import NotFound from '@/pages/notFound/NotFound.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{
			path: '/view/:id?',
			name: 'view',
			component: ContentCreator
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
