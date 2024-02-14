import Vue from "vue";
import Vuex from "vuex";

import aModule from "@/vuex/a";
import bModule from "@/vuex/b";
import cModule from "@/vuex/c";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {aModule, bModule, cModule}
})