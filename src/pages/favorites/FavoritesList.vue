<template>
  <div>
    <table>
      <tbody v-if="hasFavorites">
        <favorite-item
          v-for="favorite in favorites"
          :key="favorite.id"
          :id="favorite.id"
          :name="favorite.name"
          :description="favorite.description"
          :origin="favorite.origin"
          :image="favorite.image"
        ></favorite-item>
      </tbody>
      <tr v-else>
        Žádné oblíbené plemeno nebylo nalezeno!
      </tr>
    </table>
  </div>
</template>

<script>
import FavoriteItem from "../../components/favorites/FavoriteItem.vue";
export default {
  components: {
    FavoriteItem,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    hasFavorites() {
      return this.$store.getters['favorites/hasFavorites'];
    },
    favorites() {
     return this.$store.getters['favorites/favorites'];
    },
  },
  created() {
    this.loadFavorites();
  },
  methods: {
    async loadFavorites() {
      try {
        await this.$store.dispatch('favorites/loadFavorites');
      } catch (error) {
        console.log(error);
        this.error = error.message || "Something went wrong!";
      }
    },
    
  },
};
</script>
<style scoped></style>
