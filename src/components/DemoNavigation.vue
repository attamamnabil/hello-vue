<template>
  <div>
    <demo-navigation-brand>
      What inside here
    </demo-navigation-brand>
    Sub demo template
    <button @click="onClick">Click Me</button>
  </div>
</template>

<script>
import DemoNavigationBrand from './DemoNavigationBrand'; 

export default {
  name: "DemoNavigation",
  components: {
    DemoNavigationBrand,
  },
  methods: {
    onClick() {
      console.log("Clicked");
      this.$emit("navigation-demo-event", 1, "two", Symbol("three"));
    },
  },
};
</script>
