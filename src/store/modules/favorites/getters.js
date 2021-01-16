export default {
  favorites(state) {
    return state.favorites;
  },
  hasFavorites(state) {
    return state.favorites && state.favorites.length > 0;
  },
};