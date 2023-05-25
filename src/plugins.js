import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'
export default {
    install(Vue){
         // 全局过滤器
        // Vue.filter()
        // //  定义全局指令
        // Vue.directive()
        // //  定义混入
        // Vue.mixin({
        //     methods: {
        //         debounce
        //     },
        // })
        //  给Vue原型添加方法
        Vue.prototype.throttle = throttle
        Vue.prototype.debounce=debounce

    }
      
}
