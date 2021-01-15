import { createStore } from 'vuex'

import breedsModule from './modules/breeds/index.js';

const store = createStore({
  modules: {
    breeds: breedsModule,
  },
  state() {
  },
  getters: {
  }
});

export default store;
