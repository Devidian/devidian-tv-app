import api from '@/services/api';
import { removeLocalSessionToken } from '@/services/local-session';
import { ActionContext, ActionTree } from 'vuex';
import { Mutations, MutationTypes } from './mutations';
import { AppState } from './state';

export enum ActionTypes {
	GetAccount = 'ACCOUNT_GET',
	LogoutAccount = 'ACCOUNT_LOGOUT',
	GetMyChannels = 'CHANNEL_GET_OWNED',
}

type ActionAugments = Omit<ActionContext<AppState, AppState>, 'commit'> & {
	commit<K extends keyof Mutations>(key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>;
};

export type Actions = {
	[ActionTypes.GetAccount](context: ActionAugments): void;
};

const actions: ActionTree<AppState, AppState> & Actions = {
	async [ActionTypes.GetAccount]({ commit }) {
		const userAccount = await api.account.getAccount();
		commit(MutationTypes.SetUserAccount, userAccount);
	},
	async [ActionTypes.LogoutAccount]({ commit }) {
		await api.auth.logout();
		removeLocalSessionToken();
		commit(MutationTypes.UnsetUserAccount);
	},
	async [ActionTypes.GetMyChannels]({ commit }) {
		const myChannels = await api.channel.myChannels();
		commit(MutationTypes.SetMyChannels, myChannels);
	},
};

export default actions;
