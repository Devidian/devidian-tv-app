<template>
	<div class="top-bar">
		<img alt="Vue logo" src="../../assets/logo.png" />
		<div id="nav">
			<!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
			<router-link to="/streamer/mytvuser/live">LiveTest</router-link>
		</div>
		<div id="account">
			<button @click="loginWithSteam()" v-if="!isLoggedIn">Login with Steam</button>
			<account-small v-if="isLoggedIn" :account="account" />
		</div>
	</div>
</template>

<script lang="ts">
import { API } from '@/services/api/types';
import { StoreType } from '@/store';
import { computed, defineComponent, inject } from 'vue';
import { useStore } from 'vuex';
import AccountSmall from '@/components/AccountSmall.vue';

export default defineComponent({
	name: 'TopBar',
	components: { AccountSmall },
	props: {},
	setup() {
		const $store = useStore<StoreType>();
		const account = computed(() => $store.getters.getAccount);
		const $api = inject<API>('$api');
		const loginWithSteam = () => {
			$api?.auth.loginWithSteam();
		};
		return {
			account,
			isLoggedIn: computed(() => {
				return !!account.value;
			}),
			loginWithSteam,
		};
	},
});
</script>

<style scoped lang="scss">
.top-bar {
	display: flex;
	height: 64px;
	border-bottom-color: #2c3e50;
	background-color: #486581;
	flex-direction: row;
	align-items: center;
	#account {
		padding-right: 10px;
		display: flex;
	}
	#nav {
		display: flex;
		flex: 1;

		a {
			// background-color:antiquewhite;
			padding: 15px;
			display: flex;
			align-content: stretch;
			justify-content: center;
			flex-direction: column;
			text-align: center;
			font-weight: bold;
			color: #2c3e50;
			text-decoration: none;
			text-transform: uppercase;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
}
</style>
