export default {
  /**V payload je pole favorites */
  setFavorites(state, payload) {
    state.favorites = payload;
  },
  /**V payload je ID plemena */
  addToFavorites(state, payload) {
    console.log('Mutation addToFavorites:' + JSON.stringify(payload));
    state.favorites.push(payload);
  },
  /**V payload je ID plemena */
  removeFromFavorites(state, payload) {
    state.favorites = state.favorites.filter(fav => fav.id !== payload);
  }
};