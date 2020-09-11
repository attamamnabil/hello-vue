<template>
  <div>
    <div class="some-content">
      <demo-navigation @navigation-demo-event="handleMe"></demo-navigation>
      <demo-navigation-brand @navigation-demo-event="handleMeToo"></demo-navigation-brand>
    </div>
  </div>
</template>

<script>
import DemoNavigation from "@/components/DemoNavigation";
import DemoNavigationBrand from "@/components/DemoNavigationBrand";

export default {
  name: "Demo",
  components: {
    DemoNavigation,
    DemoNavigationBrand,
  },
  beforeCreate() {
    console.log("Before create", this.$root.$on);
  },
  methods: {
    handleMe() {
      console.log("Hello there", arguments);
    },
    handleMeToo() {
      console.log("Yes, you over there", arguments);
    },
  },
};
</script>
