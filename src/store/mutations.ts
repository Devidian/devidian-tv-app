import { MutationTree } from 'vuex';
import { AppState } from './state';

export enum MutationTypes {
	SetUserAccount = 'SET_ACCOUNT',
}

export type Mutations = {
	// TODO define UserAccount type
	[MutationTypes.SetUserAccount](state: AppState, account: any): void;
};

const mutations: MutationTree<AppState> & Mutations = {
	[MutationTypes.SetUserAccount](state, account) {
		state.userAccount = account;
	},
};

export default mutations;
