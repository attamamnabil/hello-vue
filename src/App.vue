<template>
  <div id="app" class="text-center">
    <nav class="nav justify-content-center">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
      <router-link to="/demo" class="nav-link">Demo</router-link>
    </nav>
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
