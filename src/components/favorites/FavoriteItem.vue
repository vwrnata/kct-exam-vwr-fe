<template>
  <tr>
    <td>{{ id }}</td>
    <td>{{ name }}</td>
    <td>{{ origin }}</td>
    <td><a :href="image.imgUrl">{{image.imgUrl}}</a></td>
    <td><base-button @click="removeFromFavorites(id)">Odebrat z oblíbených</base-button></td>
  </tr>
</template>

<script>
export default {
  props: ["id", "name", "description", "origin", "image"],
  computed: {},
  methods: {
    async removeFromFavorites(id){
      console.log('Odebírám oblíbené plemeno ' + id);
      try {
        await this.$store.dispatch('favorites/removeFavorite', {
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
#favorites td {
  border: 1px solid #ddd;
}

#favorites a{
  text-decoration: none;
  color: black;
  padding: 0.75rem 1.5rem;
}

#favorites a:active,
#favorites a:visited{
  color: black;
}

#favorites a:hover{
  text-decoration: underline;
  color: black;
}
</style>