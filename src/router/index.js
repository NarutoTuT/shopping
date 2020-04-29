import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const  Home=()=>import("views/home/Home")
const  Cart=()=>import("views/cart/Cart")
const  User=()=>import("views/user/User")
const  Category=()=>import("views/category/Category")
const Productinfo=()=>import("views/productinfo/Productinfo")

const router = new VueRouter({
  routes:[
    {
      path:'/productinfo',
      component:Productinfo,
      name:"Productinfoo"
    },
    {
      path:'/home',
      component:Home,
      name:"Home"
    },
    {
      path:'/cart',
      component:Cart,
      name:"Cart"
    },
    {
      path:'/user',
      component:User,
      name:"User"
    },
    {
      path:'/category',
      component:Category,
      name:"Category"
    },
    {
      path:'/',
      redirect:'/home'
    }
  ],
  mode:'history'

})

export default router
