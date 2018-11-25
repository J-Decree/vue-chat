import Vue from 'vue'
import VueRouter from 'vue-router'
import Chat from '../pages/Chat'
import Login from '../pages/Login'
import Test from '../pages/Test'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path: '/login', component: Login},
    {path: '/chat', component: Chat},
    {path: '/test', component: Test},
    {path: '/', redirect: '/chat'}
  ]
})
