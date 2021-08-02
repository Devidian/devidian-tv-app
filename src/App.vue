<template>
	<router-view />
</template>

<script lang="ts">
import { computed, defineComponent, inject, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { API } from './services/api/types';
import { removeLocalSessionToken, setLocalSessionToken } from './services/local-session';
import { StoreType } from './store';
import { ActionTypes } from './store/actions';
export default defineComponent({
	setup() {
		const $store = useStore<StoreType>();
		const router = useRouter();
		const $api: API = inject('$api') as API;
		const jwtToken = computed(() => router.currentRoute.value.query.jwt || null);
		onMounted(() => {
			$store.dispatch(ActionTypes.GetAccount);
		});
		watch(jwtToken, async (value) => {
			if (value) {
				try {
					setLocalSessionToken(value + '');
					await $api.auth.loginWithJwt();
				} catch (error) {
					removeLocalSessionToken();
				} finally {
					router.push({ name: router.currentRoute.value.name?.toString() });
				}
			}
		});
	},
});
</script>

<style lang="scss">
@import 'video.js';
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
body {
	margin: 0;
	padding: 0;
}
</style>
