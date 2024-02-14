import Vue from "vue";
import Vuex from "vuex";

import a from "@/vuex/a";
import b from "@/vuex/b";

Vue.use(Vuex)

export default new Vuex.Store({
        modules: {
            aModule: a,
            bModule: b
        }
    }
)