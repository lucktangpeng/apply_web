<template>
    <div class="col-sm-3" @click="clickmander">
        <!-- <img src="/static/image/code.png" > -->
        <button type="button" class="btn btn-primary pull-right col-sm-12"  v-bind:disabled="dis" ref="code" >获取验证码</button>
    </div>
</template>
<script>
export default {
    name:"Vbutton",
    data(){
        return{
            dis: false,
            code_msg:"123123"
        }
    },
    props:{
        ph:String
    },
    methods:{
        clickmander(){
            this.$refs.code.innerHTML= "已发送"
            // this.$store.dispatch("phone_aox",this.ph)
        }
    }
}
</script>
<style scoped>
    img{
        width: 100%;
    }
</style>

