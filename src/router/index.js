import Vue from "vue"
import VueRouter from 'vue-router'
import map from '@/pages/map01'
import hotmap from '@/pages/hotmap'
import mix from '@/pages/Mix'
import rout from '@/pages/rout'
Vue.use(VueRouter)


// 解决编程式导航连续点击报错问题
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
// 重写push方法
VueRouter.prototype.push = function (location,resolve,reject) {
    if(resolve && reject){
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
// 重写replace方法
VueRouter.prototype.replace = function (location,resolve,reject) {
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}

export default new VueRouter({
    routes:[
       {
        path:'/map',
        name:'map',
        component:map
       },
       {
        path:'/hotmap',
        name:'hotmap',
        component:hotmap
       },
       {
        path:'/mix',
        name:'mix',
        component:mix
       },
       {
        path:'/rout',
        name:'rout',
        component:rout
       }
    ]
})