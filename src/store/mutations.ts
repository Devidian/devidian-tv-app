import { MutationTree } from 'vuex';
import { AppState } from './state';

export enum MutationTypes {
	SetUserAccount = 'SET_ACCOUNT',
	UnsetUserAccount = 'UNSET_ACCOUNT',
	SetMyChannels = 'SET_MY_CHANNELS',
}

export type Mutations = {
	// TODO define UserAccount type
	[MutationTypes.SetUserAccount](state: AppState, account: any): void;
};

const mutations: MutationTree<AppState> & Mutations = {
	[MutationTypes.SetUserAccount](state, account) {
		state.userAccount = account;
	},
	[MutationTypes.UnsetUserAccount](state) {
		state.userAccount = null;
	},
	[MutationTypes.SetMyChannels](state, channels) {
		state.myChannels = channels || [];
	},
};

export default mutations;
