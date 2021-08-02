import { createStore } from 'vuex';
import actions, { Actions } from './actions';
import getters, { Getters } from './getters';
import mutations, { Mutations } from './mutations';
import state, { AppState } from './state';

export type StoreType = {
	state: AppState;
	getters: Getters;
	mutations: Mutations;
	actions: Actions;
};

export default createStore({
	state,
	getters,
	mutations,
	actions,
	modules: {},
});
