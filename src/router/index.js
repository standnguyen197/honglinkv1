import Vue from 'vue'
import Router from 'vue-router'
import BookList from '@/components/BookList'
import ShowBook from '@/components/ShowBook'
import CreateBook from '@/components/CreateBook'
import EditBook from '@/components/EditBook'
import indexPage from '@/components/indexPage'
import goPage from '@/components/goPage'
Vue.use(Router)

export default new Router({
  history: 'mode',
  routes: [
    {
      path: '/',
      name: 'indexPage',
      component: indexPage
    },
    {
      path: '/go/:id',
      name: 'goPage',
      component: goPage
    },
    {
      path: '/add-book',
      name: 'CreateBook',
      component: CreateBook
    },
    {
      path: '/edit-book/:id',
      name: 'EditBook',
      component: EditBook
    }
  ]
})
