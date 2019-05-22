<template>
    <div class="col-sm-3 padin_left" @click="clickmander">
        <!-- <img src="/static/image/code.png" > -->
        <button type="button" class="btn btn-primary pull-right col-sm-12 btn-warning "  v-bind:disabled="dis" ref="code" :style="styleobj"  >获取验证码</button>

       
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
            // this.$store.dispatch("phone_aox",this.ph)
            var that = this
            this.$axios.request({
                url:this.com.phone_post_url,
                method:"POST",
                data:{"phone":this.ph},
                headers:{
                    'Content-Type':'application/json',
                }
                }).then(function(date){
                // 请求发送成功
                console.log(date)
                if(date.data.status){
                    var time = 60;
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
                    }
                    else{
                        that.$store.state.code_error = date.data
                    }
                }).catch(function(){
                // 请求发送失败
                console.log("请求失败")
            })
               
            
           
            
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
        },
    },
    computed:{
        error_content(){
            return this.$store.state.error
        },
    }
}
</script>
<style scoped>
    img{
        width: 100%;
    }
     /* .padin_left{
        padding-left: 5px;
    } */
</style>

