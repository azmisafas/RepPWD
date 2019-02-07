import Vue from 'vue'
import Router from 'vue-router'
import Quizwa from '@/components/Muskquiz'

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/Muskuis',
      name: 'Quizw',
      component: Quizwa
    }
  ]
})
