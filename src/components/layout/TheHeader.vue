<template>
  <header>
    <nav>
      <h1>Plemena koček.</h1>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/breeds">Plemena</router-link></li>
        <li><router-link to="/favorites">Oblíbená plemena</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #31a741;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid white;
  border-radius: 5px;
}

h1 {
  color: white;
  margin: 0;
}

header nav {
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>
