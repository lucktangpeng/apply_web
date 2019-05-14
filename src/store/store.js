import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        courese_msg:"",
        mobile: "",
        error:"",
        code_error:"",
        phone_statu:"",
    },
    mutations: {
      COURSE_AOX (state,date) {
        state.courese_msg = date
        
      },
      PHONE_AOX (state,date) {
         state.error = date.data
         console.log(state.error)
        
      },
      CODE_AOX (state,date) {
          state.code_error = date.data
          console.log(state.code_error)
      }
    },
    actions:{
      course_aox (context) {
        Vue.prototype.$axios.request({
          url:"http://127.0.0.1:8000/api/course/",
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
          url:"http://127.0.0.1:8000/api/phone/",
          method:"POST",
          data:{"phone":date},
          headers:{
            'Content-Type':'application/json',
          }
        }).then(function(date){
          // 请求发送成功
          console.log(date)
          context.commit('PHONE_AOX',date)
        }).catch(function(){
          // 请求发送失败
          console.log("请求失败")
        })
        
      },
      code_aox (context,date) {
        Vue.prototype.$axios.request({
          url:"http://127.0.0.1:8000/api/phone/",
          method:"PUT",
          data:date,
          headers:{
            'Content-Type':'application/json',
          }
        }).then(function(date){
          // 请求发送成功
          console.log(date.data)
          context.commit('CODE_AOX',date)
        }).catch(function(){
          // 请求发送失败
          console.log("请求失败")
        })
        
      },
    }
  })