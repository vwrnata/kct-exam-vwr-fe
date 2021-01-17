<template>
  <div>
    <table id="breeds">
      <thead>
        <tr>
          <th>ID plemena</th>
          <th>Název plemena</th>
          <th>Země původu</th>
          <th>Obrázek</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody v-if="hasBreeds">
        <breed-item
          v-for="breed in breeds"
          :key="breed.id"
          :id="breed.id"
          :name="breed.name"
          :description="breed.description"
          :origin="breed.origin"
          :image="breed.image"
        ></breed-item>
      </tbody>
      <tr v-else>
        <td colspan="5">Žádná plemena nebyla nalezena!</td>
      </tr>
    </table>
  </div>
</template>

<script>
import BreedItem from "../../components/breeds/BreedItem.vue";
export default {
  components: {
    BreedItem,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    hasBreeds() {
      return this.$store.getters['breeds/hasBreeds'];
    },
    breeds() {
     return this.$store.getters['breeds/breeds'];
    },
  },
  created() {
    this.loadBreeds();
  },
  methods: {
    async loadBreeds() {
      try {
        await this.$store.dispatch('breeds/loadBreeds');
      } catch (error) {
        console.log(error);
        this.error = error.message || "Something went wrong!";
      }
    },
    
  },
};
</script>
<style scoped>
#breeds {
  margin-top: 15px;
  border-collapse: collapse;
  width: 100%;
}
#breeds th {
  border: 1px solid #ddd;
}

#breeds tr:nth-child(even){
  background-color: #f2f2f2;
}
#breeds tr:hover {
  background-color: #ddd;
}

#breeds th {
  padding: 8px;
  background-color: #31a741;
  color: white;
}


</style>
