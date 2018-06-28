import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'


Vue.use(Router)

export default new Router({
  mode: 'history', // #기호가 기본설정인 해시모드때문에 발생하므로, 히스토리 모드로 변경하는 옵션 
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
