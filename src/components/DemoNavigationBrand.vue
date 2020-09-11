<template>
  <div>
    This is demo navigation brand
    <span @click="onClick" class="border boder-1 border-primary">Click Me</span>
  </div>
</template>

<script>
export default {
  name: "DemoNavigationBrand",
  data() {
    return {
      show: true,
    };
  },
  methods: {
    onClick() {
      console.log("Span clicked!");
      this.$emit("navigation-demo-event", 2, "two");
    },
  },
};
</script>
