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
<style scoped>
#breeds td {
  border: 1px solid #ddd;
}

#breeds a{
  text-decoration: none;
  color: black;
  padding: 0.75rem 1.5rem;
}

#breeds a:active,
#breeds a:visited{
  color: black;
}

#breeds a:hover{
  text-decoration: underline;
  color: black;
}
</style>
