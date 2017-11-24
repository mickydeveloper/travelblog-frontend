import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/posts/posts'
import Post from '@/components/post/post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Posts
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/post/:id',
      name: 'post',
      component: Post,
      props: (route) => ({ id: route.params.id })
    }
  ]
})
