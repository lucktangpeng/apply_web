<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <router-view></router-view>
  </div>
</template>

<script>

import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.min.js"
import $ from "jquery"
export default {
  name: 'App',
  data(){
    return{

    }
  },
  mounted(){
    this.$store.dispatch("course_aox")
  },
  methods:{
    
  },
  computed:{
 
  }
}
</script>

<style scoped >
  /* #app{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("../static/image/backgroup.png")
  }
   */
</style>
