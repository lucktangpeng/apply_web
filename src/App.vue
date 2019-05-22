<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <router-view></router-view>
  </div>
</template>

<script>

// import "jQuery" from ""
// import jQuery from "jquery"
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.min.css"

export default {
  name: 'App',
  data(){
    return{
      mobli:'',
    }
  },
  mounted(){
    this.$store.dispatch("course_aox")
    this.is_mobile()
    this.chang_margin()
  },
  methods:{
     _isMobile() {
            let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
            return flag;
        },
    is_mobile(){
            if (this._isMobile()) {
                //手机端
                this.mobli = true
                } else {
                //PC端
                this.mobli = false
                }
            },
    chang_margin(){
            if(this.mobli){
                this.$router.push({name:"Vmobile"})
            }
            else{
                this.$router.push({name:"Voverall"})
            }
        }
  },
  computed:{
 
  }
}
</script>

<style scoped >
  #app{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("../static/image/backgroup.png") no-repeat;
    background-size: cover
  }
  
</style>
