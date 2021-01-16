<template>
    <h1>Kočky a jejich plemena.</h1>
    <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/breeds">Plemena</router-link></li>
        <li><router-link to="/favorites">Oblíbená plemena</router-link></li>
    </ul>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0 0 25px 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>