import { createStore } from 'vuex';
import { useLoading } from 'vue-loading-overlay';
import { GameService } from '../service/index';

export default createStore({
  state: {
    loading: false,
    $loading: useLoading(),
    game: {
      id: null,
    },
  },

  getters: {
    gameId(state) {
      return state.game.id;
    },

    gameName(state) {
      return state.game.name;
    },
  },

  mutations: {
    SET_GAME_ID(state, id) {
      state.game.id = id;
    },

    SET_GAME_NAME(state, name) {
      state.game.name = name;
    },

    TOGGLE_LOADING(state) {
      state.loading = !state.loading;
      if (state.loading) {
        state.$loading = state.$loading.show();
      } else {
        state.$loading.hide();
        state.$loading = useLoading();
      }
    },
  },

  actions: {
    async CREATE_GAME({ commit }, { name }) {
      commit('TOGGLE_LOADING');
      const id = await GameService.create({ name });
      commit('SET_GAME_ID', id);
      commit('SET_GAME_NAME', name);
      commit('TOGGLE_LOADING');
    },

    async GET_GAME({ commit }, { id }) {
      const game = await GameService.get({ id });
      commit('SET_GAME_ID', game.id);
      commit('SET_GAME_NAME', game.name);
    },
  },
});
