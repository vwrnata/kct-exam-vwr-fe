<template>
  <div>
    <table id="favorites">
      <thead>
        <tr>
          <th>ID plemena</th>
          <th>Název plemena</th>
          <th>Země původu</th>
          <th>Obrázek</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
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
        <td colspan="5">Žádné oblíbené plemeno nebylo nalezeno!</td>
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
      console.log('favorites()');
      console.log(this.$store.getters['favorites/favorites']);
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
<style scoped>
#favorites {
  margin-top: 15px;
  border-collapse: collapse;
  width: 100%;
}
#favorites th {
  border: 1px solid #ddd;
}

#favorites tr:nth-child(even){
  background-color: #f2f2f2;
}
#favorites tr:hover {
  background-color: #ddd;
}

#favorites th {
  padding: 8px;
  background-color: #31a741;
  color: white;
}


</style>

