import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
Vue.use(Vuex)
var store = new Vuex.Store({
    state:{
        catData:[]
    },
    mutations:{
        CAR(state,{cartData}){
            state.catData = cartData
        }
    },
    actions: {
        cartDataG(context){
            axios.get('').then(res=>{
                console.log(res)
                context.commit('CAR',{cartData:res})
            })
        }
    }
})

export default store



