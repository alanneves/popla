import { createStore } from 'vuex';
import { useLoading } from 'vue-loading-overlay';
import { GameService } from '../service/index';

export default createStore({
  state: {
    loading: false,
    $loading: useLoading(),
    game: {
      id: null,
      name: null,
    },
    user: {
      uuid: null,
      name: null,
    },
  },

  getters: {
    user(state) {
      if (!state.user.uuid || !state.user.name) {
        return null;
      }

      return {
        uuid: state.user.uuid,
        name: state.user.name,
      };
    },

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

    async JOIN_GAME({ commit }, { name }) {
      const websocket = new WebSocket(
        'ws://localhost:3001/?gameId=ltzi5rn0k9&name=test_name'
      );

      return new Promise((resolve, reject) => {
        websocket.onopen = (event) => {
          resolve();
        };
      });
    },
  },
});
