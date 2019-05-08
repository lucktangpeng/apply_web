<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <voverall>
        
    </voverall>
    <vcontent></vcontent>
  </div>
</template>

<script>

import "bootstrap/dist/css/bootstrap.min.css"

import Voverall from "./components/Voverall.vue"
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{
    Voverall,
  },
  mounted(){
    // this.$store.dispatch("course_aox")
    this.is_mobile()
    // this.$store.state.mobile = true
  },
  methods:{
    is_mobile(){
      if (this._isMobile()) {
          // alert("手机端");
          this.$store.state.mobile = true
          console.log(this.$store)
        } else {
          alert("pc端");
          this.$store.state.mobile = false
        }
    },
    _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    }
  },
  computed:{
 
  }
}
</script>

<style>
  #app{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("../static/image/backgroup.png")
  }
</style>
