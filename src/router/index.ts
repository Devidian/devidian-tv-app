import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Portal from '../views/PortalLayout.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'PortalLayout',
		component: Portal,
		children: [
			{
				path: 'ch/:name',
				name: 'ChannelView',
				props: true, // :name is passed as property
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import(/* webpackChunkName: "streamer-livepage" */ '../views/ChannelView.vue'),
			},
			// MOVE to another layout representing user area
			{
				path: 'me/channels',
				name: 'MyChannels',
				component: () => import(/* webpackChunkName: "streamer-livepage" */ '../views/me/Channels.vue'),
			},
		],
	},
	{
		path: '/wg',
		name: 'WidgetLayout',
		component: () => import(/* webpackChunkName: "streamer-livepage" */ '../views/WidgetLayout.vue'),
		children: [
			// CHAT .
		],
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
