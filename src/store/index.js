import Vue from "vue";
import Vuex from 'vuex'
import demo1 from "./demo1";
import demo2 from "./demo2";
Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        demo1,
        demo2
    }
})