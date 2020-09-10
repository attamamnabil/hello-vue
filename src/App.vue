<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  beforeCreate() {
    console.log(`(App) "beforeCreate" called`);
  },
  created() {
    console.log(`(App) "created" called`);
  },
  beforeMount() {
    console.log(`(App) "beforeMount" called`);
  },
  mounted() {
    console.log(`(App) "mounted" called`);
  },
  beforeUpdate() {
    console.log(`(App) "beforeUpdate" called`);
  },
  updated() {
    console.log(`(App) "updated" called`);
  },
  beforeDestroy() {
    console.log(`(App) "beforeDestroy" called`);
  },
  destroyed() {
    console.log(`(App) "destroyed" called`);
  },

  // router guard
  beforeRouteLeave(to, from, next) {
    console.log(
      `(App:Router) "beforeRouteLeave" called. ${from.fullPath} -> ${to.fullPath}`
    );
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log(
      `(App:Router) "beforeRouteUpdate" called. ${from.fullPath} -> ${to.fullPath}`
    );
    next();
  },
  beforeRouteEnter(to, from, next) {
    console.log(
      `(App:Router) "beforeRouteEnter" called. ${from.fullPath} -> ${to.fullPath}`
    );
    next();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
