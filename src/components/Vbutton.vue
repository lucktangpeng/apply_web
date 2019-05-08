<template>
    <div class="col-sm-3" @click="clickmander">
        <!-- <img src="/static/image/code.png" > -->
        <button type="button" class="btn btn-primary pull-right col-sm-12"  v-bind:disabled="dis" ref="code" :style="styleobj" >获取验证码</button>
    </div>
</template>
<script>
export default {
    name:"Vbutton",
    data(){
        return{
            dis: false,
            code_msg:"123123",
            styleobj:{
               backgroundColor:"",
               borderColor:""
            }
        }
    },
    props:{
        ph:String
    },
    methods:{
        clickmander(){
            var time = 60;
            var that = this
            var timer = setInterval(function () {
                        that.dis=true;
                        that.$refs.code.innerHTML= "已发送("+time+")";
                        that.change_back()
                        time -= 1;
                    if (time <= 0 ){
                        that.dis=false;
                        that.$refs.code.innerHTML= "获取验证码"
                        that.change_back()
                        clearInterval(timer)

                    }
                    },1000)
            // this.$refs.code.innerHTML= "已发送"
            // this.$store.dispatch("phone_aox",this.ph)
        },
        change_back(){
            if (this.dis){
                this.styleobj.backgroundColor="grey"
                this.styleobj.borderColor="grey"
            }
            else{
                  this.styleobj.backgroundColor=""
                  this.styleobj.borderColor=""
            }
        }
    }
}
</script>
<style scoped>
    img{
        width: 100%;
    }
</style>

