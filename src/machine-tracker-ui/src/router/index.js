import Vue from "vue";
import Router from "vue-router";

import Home from "@components/Home.vue";
import MachineDetails from "@components/MachineDetails.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/machine/:id",
      name: "machine",
      component: MachineDetails
    }
  ]
})

