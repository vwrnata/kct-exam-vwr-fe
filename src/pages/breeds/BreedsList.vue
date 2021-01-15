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
    <tr v-else>Žádná plemena nebyla nalezena!</tr>
    </table>
    
  </div>
</template>

<script>
import axios from "axios";
import BreedItem from "../../components/breeds/BreedItem.vue";
export default {
  components: {
    BreedItem,
  },
  data() {
    return {
      breeds: [],
      isLoading: false,
    };
  },
  computed: {
    hasBreeds() {
      return this.breeds && this.breeds.length > 0;
    },
  },
  async created() {
    await this.loadBreeds();
  },
  methods: {
    async loadBreeds() {
      const response = await axios.get("https://api.thecatapi.com/v1/breeds", {
        headers: {
          "x-api-key": "fcdaf76d-921a-4de3-9329-61251bd4c7cf",
        },
      });

      console.log(response);
      const responseData = response.data;
      for (const key in responseData) {
        // console.log(JSON.stringify(item));
        const item = responseData[key];
        // console.log(item);
        let image = {};
        if (item.image) {
          image = {
            width: item.image.width,
            height: item.image.height,
            imgUrl: item.image.url,
          };
        } else {
          image = {
            width: 0,
            height: 0,
            imgUrl: "",
          };
        }
        const breed = {
          id: item.id,
          name: item.name,
          description: item.description,
          origin: item.origin,
          image: image,
        };
        this.breeds.push(breed);
      }
    },
  },
};
</script>
<style scoped>
</style>
