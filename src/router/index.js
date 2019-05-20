import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Voverall from '@/components/pc/Voverall'
import Vmobile from '@/components/mobile/Voverall'
import Vmobile_two from '@/components/mobile/two/Voverall'
import Vmobile_three from '@/components/mobile/three/Voverall'
import Vmobile_four from '@/components/mobile/four/Voverall'
// import Vbase from "@/components/pc/Vbase"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Voverall',
      component: Voverall
    },
    {
        path: '/mobile',
        name: 'Vmobile',
        component: Vmobile
    },
    {
        path: '/mobile_two',
        name: 'Vmobile_two',
        component: Vmobile_two
    },
    {
        path: '/mobile_three',
        name: 'Vmobile_three',
        component: Vmobile_three
    },
    {
      path: '/mobile_four',
      name: 'Vmobile_four',
      component: Vmobile_four
  },
  ]
})
