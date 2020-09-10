import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  beforeCreate() {
    console.log(`(Root) "beforeCreate" called`);
  },
  created() {
    console.log(`(Root) "created" called`);
  },
  beforeMount() {
    console.log(`(Root) "beforeMount" called`);
  },
  mounted() {
    console.log(`(Root) "mounted" called`);
  },
  beforeUpdate() {
    console.log(`(Root) "beforeUpdate" called`);
  },
  updated() {
    console.log(`(Root) "updated" called`);
  },
  beforeDestroy() {
    console.log(`(Root) "beforeDestroy" called`);
  },
  destroyed() {
    console.log(`(Root) "destroyed" called`);
  },

  // router guard
  beforeRouteLeave(to, from, next) {
    console.log(
      `(Root:Router) "beforeRouteLeave" called. ${from.fullPath} -> ${to.fullPath}`
    );
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log(
      `(Root:Router) "beforeRouteUpdate" called. ${from.fullPath} -> ${to.fullPath}`
    );
    next();
  },
  beforeRouteEnter(to, from, next) {
    console.log(
      `(Root:Router) "beforeRouteEnter" called. ${from.fullPath} -> ${to.fullPath}`
    );
    next();
  },
  render: h => h(App)
}).$mount('#app')
