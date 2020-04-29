import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart:[]
  },
  mutations: {
    addCartData(state,obj){
      if (state.cart.length <=0){
        state.cart.push(obj)
        return
      }
      for (let i = 0; i < state.cart.length; i++) {
          if (state.cart[i].iid===obj.iid){
            state.cart[i].count++
            return;
          }
      }
      state.cart.push(obj)

    },
    changselectClick(state,id){
      for (let i = 0; i <state.cart.length; i++) {
        if (state.cart[i].iid =id){
          state.cart[i].checked = !state.cart[i].checked
          return
        }
      }
    }
  },

  actions: {
  },
  modules: {
  }
})
