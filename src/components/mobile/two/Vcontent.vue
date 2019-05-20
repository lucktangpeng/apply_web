<template>
    <div class="col-md-11">
        <div id="con">
            <div class="text-center title" id="title" >手机验证</div>
            <div>
                
                <div class="col-md-10">
                    <span>手机号</span>
                    <input type="text" class="form-control" id="phone" v-model="phone_number" placeholder="手机号码">
                    
                    
                </div>
                <div class="col-md-5" >
                    <span>验证码</span>
                    <input type="text" class="form-control" id="code" v-model="sendcode"  placeholder="验证码">
                    <button type="button" class="btn btn-warning "  id="code_button" @click="get_code()" ref="code" :style="styleobj">获取验证码</button>
                </div>
            </div>
        </div>

         <button type="button" class="btn btn-warning button_foot " @click="get_val()">确定</button>
    </div>
</template>
<script>
export default {
    name:"Vcontent",
    data(){
        return{
            phone_number:"",
            dis:'',
            sendcode:"",
            styleobj:{
               backgroundColor:"",
               borderColor:"",
            },
            timers:""
          
        }
    },
    methods:{
        get_code(){
            this.$store.dispatch("phone_aox",this.phone_number)
            var time = 60;
            var that = this
            this.timer = setInterval(function () {
                    that.dis=true;
                    that.$refs.code.innerHTML= "已发送("+time+")";
                    that.change_back()
                    time -= 1;
                if (time <= 0 ){
                    that.dis=false;
                    that.$refs.code.innerHTML= "获取验证码"
                    that.change_back()
                    clearInterval(that.timers)

                }
                },1000)
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
        get_val(){
            clearInterval(this.timers)
            var that = this
            this.$axios.request({
            url:this.com.phone_post_url,
            method:"PUT",
            data:{"phone":this.phone_number,"code":this.sendcode},
            headers:{
                'Content-Type':'application/json',
            }
            }).then(function(date){
            // 请求发送成功
               
                clearInterval(that.timers)
                that.$store.state.code_error = date.data
                that.$store.state.put_vlue.phone = that.phone_number
                
                that.$router.push({name:"Vmobile_three"})
            
                // if(date.data.status){
                //     that.$axios.request({
                //         url:that.com.record_url,
                //         method:"POST",
                //         data:that.$store.state.put_vlue,
                //         headers:{
                //         'Content-Type':'application/json',
                //         }
                //     }).then(function(date){
                //         // 请求发送成功
                //         clearInterval(that.timer)
                //         that.$store.state.put_vlue.phone = that.phone_number
                //         that.$store.state.code_error = ""
                //         that.$router.push({name:"Vmobile_three"})
                //     }).catch(function(){
                //         // 请求发送失败
                //         console.log("数据提交请求失败111")
                //     })
                // }
                 console.log(that.$store.state.code_error)
                
            }).catch(function(){
            // 请求发送失败
            console.log("请求失败11")
            })

       
        }
    }
}
</script>
<style scoped>
    #code_button{
        width: 40%;
        height: 34px;
        margin-left: 10px;
        background:#FC8518;
        border:1px solid rgba(210,210,210,1);
        border-radius:4px;
    }
    .button_foot{
        width:100%;
        height: 50px;
        margin-top: 20px;
        /* line-height: 50px; */
        background:linear-gradient(0deg,rgba(251,120,24,1),rgba(253,154,26,1));
        
    }
    .div_top{
        margin-top: 10px
    }
    #title_hear{
        line-height: 100%
    }
    #code,#phone{
        margin-left: 15px;
        margin-top: 20px;
        margin-bottom: 15px
    }
    #code{
        width: 35%
    }
    #con{
        font-size:14px;
        font-weight:bold;
        background-color: white;
        height: 210px;
        width: 100%;
        /* margin-top:  */
        margin: 15px auto 0 auto;
        border-radius:9px;
    }
    .title{
        padding-top: 22px
    }
 .form-control{
    display: inline-block; 
    width: 80%;
 }
</style>
