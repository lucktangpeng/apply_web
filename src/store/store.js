import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        courese_msg:"",
        mobile: ""
    },
    mutations: {
      COURSE_AOX (state,date) {
        state.courese_msg = date
        
      },
      PHONE_AOX (state,date) {
         
        
      }
    },
    actions:{
      course_aox (context) {
        Vue.prototype.$axios.request({
          url:"http://192.168.10.195:8000/api/course/",
          method:"GET",
          headers:{
            'Content-Type':'application/json',
          }
        }).then(function(date){
          // 请求发送成功
          console.log(date)
          context.commit('COURSE_AOX',date)
        }).catch(function(){
          // 请求发送失败
          console.log("请求失败")
        })
        
      },
      phone_aox (context,date) {
        Vue.prototype.$axios.request({
          url:"http://192.168.10.195:8000/api/phone/",
          method:"POST",
          data:{"phone":date},
          headers:{
            'Content-Type':'application/json',
          }
        }).then(function(date){
          // 请求发送成功
          console.log(date)
          // context.commit('COURSE_AOX',date)
        }).catch(function(){
          // 请求发送失败
          console.log("请求失败")
        })
        
      },
    }
  })