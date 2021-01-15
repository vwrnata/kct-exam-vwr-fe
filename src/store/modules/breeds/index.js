import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      breeds: [
        {
          id: '123456as',
          name: 'item.name',
          description: 'item.description',
          origin: 'item.origin',
          image: {
            width: 0,
            height: 0,
            imgUrl: 'http://url',
          },
        }
      ]
    };
  },
  mutations,
  actions,
  getters
};
