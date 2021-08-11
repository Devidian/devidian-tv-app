<template>
	<div class="top-bar">
		<img alt="Vue logo" src="../../assets/logo.png" />
		<div id="nav">
			<!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
			<router-link to="/ch/Test001">Test001</router-link>
		</div>
		<div id="account">
			<button @click="loginWithSteam()" v-if="!isLoggedIn">Login with Steam</button>
			<n-dropdown @select="handleUserMenuSelection" :options="userNavOptions" v-if="isLoggedIn">
				<account-small :account="account" />
			</n-dropdown>
			<button @click="logout()" v-if="isLoggedIn">Logout</button>
		</div>
	</div>
</template>

<script lang="ts">
import { API } from '@/services/api/types';
import { StoreType } from '@/store';
import { computed, defineComponent, inject, h } from 'vue';
import { useStore } from 'vuex';
import AccountSmall from '@/components/AccountSmall.vue';
import { ActionTypes } from '@/store/actions';
import { DropdownOption, NDropdown, NIcon } from 'naive-ui';
import { Channel16Regular as ChannelIcon } from '@vicons/fluent';
import { useRouter } from 'vue-router';

const renderIcon = (icon: any) => {
	return () => {
		return h(NIcon, null, {
			default: () => h(icon),
		});
	};
};

export default defineComponent({
	name: 'TopBar',
	components: { AccountSmall, NDropdown },
	props: {},
	setup() {
		const $store = useStore<StoreType>();
		const $router = useRouter();
		const account = computed(() => $store.getters.getAccount);
		const $api = inject<API>('$api');
		const loginWithSteam = () => {
			$api?.auth.loginWithSteam();
		};

		const userNavOptions: DropdownOption[] = [
			{
				label: 'My Channels',
				key: 'channels',
				icon: renderIcon(ChannelIcon),
			},
		];

		return {
			userNavOptions,
			account,
			isLoggedIn: computed(() => {
				return !!account.value;
			}),
			logout: () => {
				$store.dispatch(ActionTypes.LogoutAccount);
			},
			loginWithSteam,
			handleUserMenuSelection(key: string) {
				switch (key) {
					case 'channels':
						$router.push({ name: 'MyChannels' });
						break;

					default:
						break;
				}
			},
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
		button {
			margin-left: 10px;
		}
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
