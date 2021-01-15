<template>
  <div>
    <table>
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
        Žádná plemena nebyla nalezena!
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
<style scoped></style>
