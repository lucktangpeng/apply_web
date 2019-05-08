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
    this.$store.dispatch("course_aox")
    console.log(this.$store.state)
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
