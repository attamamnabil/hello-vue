<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: "About",
  beforeCreate() {
    console.log(`(About) "beforeCreate" called`);
  },
  created() {
    console.log(`(About) "created" called`);
  },
  beforeMount() {
    console.log(`(About) "beforeMount" called`);
  },
  mounted() {
    console.log(`(About) "mounted" called`);
  },
  beforeUpdate() {
    console.log(`(About) "beforeUpdate" called`);
  },
  updated() {
    console.log(`(About) "updated" called`);
  },
  beforeDestroy() {
    console.log(`(About) "beforeDestroy" called`);
  },
  destroyed() {
    console.log(`(About) "destroyed" called`);
  },

  // router guard
  beforeRouteLeave(to, from, next) {
    console.log(
      `(About:Router) "beforeRouteLeave" called. ${from.fullPath} -> ${to.fullPath}`
    );
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log(
      `(About:Router) "beforeRouteUpdate" called. ${from.fullPath} -> ${to.fullPath}`
    );
    next();
  },
  beforeRouteEnter(to, from, next) {
    console.log(
      `(About:Router) "beforeRouteEnter" called. ${from.fullPath} -> ${to.fullPath}`
    );
    next();
  },
};
</script>
