import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import Login from './views/Login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  history: true,
  routes:[
    {
      path: '/cadastro',
      component: HelloWorld
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/login'
    }
  ]

})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
