<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  beforeCreate() {
    console.log(`(Home) "beforeCreate" called`);
  },
  created() {
    console.log(`(Home) "created" called`);
  },
  beforeMount() {
    console.log(`(Home) "beforeMount" called`);
  },
  mounted() {
    console.log(`(Home) "mounted" called`);
  },
  beforeUpdate() {
    console.log(`(Home) "beforeUpdate" called`);
  },
  updated() {
    console.log(`(Home) "updated" called`);
  },
  beforeDestroy() {
    console.log(`(Home) "beforeDestroy" called`);
  },
  destroyed() {
    console.log(`(Home) "destroyed" called`);
  },

  // router guard
  beforeRouteLeave(to, from, next) {
    console.log(
      `(Home:Router) "beforeRouteLeave" called. ${from.fullPath} -> ${to.fullPath}`
    );
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log(
      `(Home:Router) "beforeRouteUpdate" called. ${from.fullPath} -> ${to.fullPath}`
    );
    next();
  },
  beforeRouteEnter(to, from, next) {
    console.log(
      `(Home:Router) "beforeRouteEnter" called. ${from.fullPath} -> ${to.fullPath}`
    );
    next();
  },
};
</script>
