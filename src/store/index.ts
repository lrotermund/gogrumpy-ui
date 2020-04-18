import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contextSidebarOpen: false,
    contextSidebarGame: null,
  },
  getters: {
    contextSidebarOpen: (state) => state.contextSidebarOpen,
    contextSidebarGame: (state) => state.contextSidebarGame,
  },
  mutations: {
    [types.TOGGLE_CONTEXT_SIDEBAR](state) {
      state.contextSidebarOpen = !state.contextSidebarOpen;
    },
    [types.SET_CONTEXT_SIDEBAR_GAME](state, game) {
      state.contextSidebarGame = game;
    },
    [types.CLOSE_CONTEXT_SIDEBAR](state) {
      state.contextSidebarOpen = false;
    },
  },
  actions: {
    toggleContextSidebar({ commit }, { game }) {
      commit(types.TOGGLE_CONTEXT_SIDEBAR);
      commit(types.SET_CONTEXT_SIDEBAR_GAME, game);
    },
    closeContextSidebar({ commit }) {
      commit(types.CLOSE_CONTEXT_SIDEBAR);
    },
  },
  modules: {
  },
});
