import { GetterTree } from 'vuex';
import { AppState } from './state';

export type Getters = {
	getAccount(state: AppState): any; // TODO define UserAccount
};

const getters: GetterTree<AppState, AppState> & Getters = {
	getAccount(state) {
		return state.userAccount;
	},
};

export default getters;
