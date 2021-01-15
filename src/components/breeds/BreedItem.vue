<template>
  <tr>
    <td>{{ id }}</td>
    <td>{{ name }}</td>
    <td>{{ origin }}</td>
    <td><a :href="image.imgUrl">{{image.imgUrl}}</a></td>
  </tr>
</template>

<script>
export default {
  props: ["id", "name", "description", "origin", "image"],
  computed: {},
};
</script>
