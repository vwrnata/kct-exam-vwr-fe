<template>
  <tr>
    <td>{{ id }}</td>
    <td>{{ name }}</td>
    <td>{{ origin }}</td>
    <td><a :href="image.imgUrl">{{image.imgUrl}}</a></td>
    <td><base-button @click="addToFavorite(id)">Přidat k oblíbeným</base-button></td>
  </tr>
</template>

<script>
export default {
  props: ["id", "name", "description", "origin", "image"],
  computed: {},
  methods: {
    async addToFavorite(id){
      console.log('Přidávám ' + id);
      try {
        await this.$store.dispatch('favorites/addFavorite', {
          id,
        });
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
    }
  }
};
</script>
