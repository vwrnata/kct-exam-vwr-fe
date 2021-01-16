import { createStore } from 'vuex'

import breedsStore from './modules/breeds/index.js';
import favoritesStore from './modules/favorites/index.js';

const store = createStore({
  modules: {
    breeds: breedsStore,
    favorites: favoritesStore
  },
  state() {
  },
  getters: {
  }
});

export default store;
