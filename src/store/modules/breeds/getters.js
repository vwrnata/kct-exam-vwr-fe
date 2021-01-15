export default {
  breeds(state) {
    return state.breeds;
  },
  hasBreeds(state) {
    return state.breeds && state.breeds.length > 0;
  },
};