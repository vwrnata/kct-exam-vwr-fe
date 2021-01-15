export default {
  setBreeds(state, payload) {
    state.breeds = payload;
  },
  addBreed(state, payload) {
    state.breeds.push(payload);
  }
};