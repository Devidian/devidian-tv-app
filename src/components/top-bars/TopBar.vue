<template>
	<div class="top-bar">
		<router-link :to="{ name: 'Home' }">
			<img alt="Logo" src="../../assets/logo.png" />
		</router-link>
		<div id="nav">
			<!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
			<router-link to="/ch/Test001">Test001</router-link>
		</div>
		<div id="language-selector">
			<button @click="switchLanguage()">{{ t('global.testing.language') }}</button>
		</div>
		<div id="account">
			<button @click="loginWithSteam()" v-if="!isLoggedIn">{{ t('global.form.action.login') }}</button>
			<n-dropdown @select="handleUserMenuSelection" :options="userNavOptions" v-if="isLoggedIn">
				<account-small :account="account" />
			</n-dropdown>
			<button @click="logout()" v-if="isLoggedIn">{{ t('global.form.action.logout') }}</button>
		</div>
	</div>
</template>

<script lang="ts">
import AccountSmall from '@/components/AccountSmall.vue';
import { API } from '@/services/api/types';
import { StoreType } from '@/store';
import { ActionTypes } from '@/store/actions';
import { Channel16Regular as ChannelIcon } from '@vicons/fluent';
import { DropdownOption, NDropdown, NIcon } from 'naive-ui';
import { computed, defineComponent, h, inject } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

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
		const { t, locale } = useI18n({ useScope: 'global' });
		const loginWithSteam = () => {
			$api?.auth.loginWithSteam();
		};

		const switchLanguage = () => {
			locale.value = locale.value == 'de-DE' ? 'en-US' : 'de-DE';
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
			t,
			isLoggedIn: computed(() => {
				return !!account.value;
			}),
			switchLanguage,
			logout: () => {
				$store.dispatch(ActionTypes.LogoutAccount);
				$router.push({ name: 'Home' });
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
