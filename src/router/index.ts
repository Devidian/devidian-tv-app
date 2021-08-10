import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Portal from '../views/Portal.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Portal',
		component: Portal,
		children: [
			{
				path: 'streamer/:name/live',
				name: 'Live',
				props: true, // :name is passed as property
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import(/* webpackChunkName: "streamer-livepage" */ '../views/Live.vue'),
			},
			{
				path: 'me/channels',
				name: 'MyChannels',
				component: () => import(/* webpackChunkName: "streamer-livepage" */ '../views/me/Channels.vue'),
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
