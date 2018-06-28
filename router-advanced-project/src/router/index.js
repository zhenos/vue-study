import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import StoriesPage from '@/components/StoriesPage.vue'
import StoriesAll from '@/components/StoriesAll.vue'
import StoriesFamous from '@/components/StoriesFamous.vue'
import StoriesEdit from '@/components/StoriesEdit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/stories',
      component: StoriesPage,
      children: [
        {
          path: '',
          name: 'stories.all',
          component: StoriesAll
        },
        {
          path: 'famous',
          name: 'stories.famous',
          component: StoriesFamous
        },
        {
          path: ':id/edit',
          props: (route) => ({ id: Number(route.params.id) }), // 해당 주소로 창에 직접 입력해서 접근할때, 해당 id를 숫자로 형변환 해야함.
          name: 'stories.edit',
          component: StoriesEdit
        }
      ]
    },
  ]
})
