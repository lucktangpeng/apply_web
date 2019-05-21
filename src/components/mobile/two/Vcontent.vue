<template>
    <div class="col-md-11">
        <div class="modal modal_top_" id="code_modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
            </div>
            <div class="modal-body text-center">
                <h3>{{modal_title}}</h3>
            </div>
            <div class="modal-footer " >
                <button type="button" class="btn btn-default pull-lefter" data-dismiss="modal">确认</button>
                <!-- <button type="button" class="btn btn-primary" @click="()">确认</button> -->
            </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->
<!-- ----------------------------------------------------------------------------------------------------- -->

        <div id="con">
            <div class="text-center title" id="title" >手机验证</div>
            <div>
                
                <div class="col-md-10">
                    <span>手机号</span>
                    <input type="text" class="form-control" id="phone" @blur="com.toblus()" v-model="phone_number" placeholder="手机号码">
                    
                    
                </div>
                <div class="col-md-5" >
                    <span>验证码</span>
                    <input type="text" class="form-control" id="code" @blur="com.toblus()" v-model="sendcode"  placeholder="验证码">
                    <button type="button" class="btn btn-warning "  id="code_button" @click="get_code()" ref="code" :style="styleobj">{{get_msg}}</button>
                </div>
            </div>
        </div>

         <button type="button" class="btn btn-warning button_foot " @click="get_val()">确定</button>
    </div>
</template>
<script>
import $ from "jquery"
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
            timers:"",
            get_msg:"获取验证码",
            code_status:"",
            modal_title:"",
            dis:""
          
        }
    },
    methods:{
        get_code(){
            // this.$store.dispatch("phone_aox",this.phone_number)
            var that = this
            this.$axios.request({
                url:this.com.phone_post_url,
                method:"POST",
                data:{"phone":this.phone_number},
                headers:{
                    'Content-Type':'application/json',
                }
                }).then(function(date){
                // 请求发送成功
                console.log(date)
                if(date.data.status){
                    var time = 60;
                    that.timer = setInterval(function () {
                        that.dis=true;
                        that.get_msg = "已发送("+time +")"
                        that.change_back()
                        time -= 1;
                            if (time <= 0 ){
                        that.dis=false;
                        that.get_msg = "获取验证码"
                        that.change_back()
                        clearInterval(that.timers)
                        }
                    },1000)
                }
                else{
                    that.modal_title = date.data.error.phone
                    for(var df in date.data.error){
                        that.modal_title = date.data.error[df][0]
                    }
                    $('#code_modal').modal('show')
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
        get_val(){
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
                if(date.data.status){
                    that.$store.state.code_error = date.data
                that.$store.state.put_vlue.phone = that.phone_number
                that.$router.push({name:"Vmobile_three"})
                }
                else{
                    that.modal_title = date.data.error.phone
                    for(var df in date.data.error){
                        that.modal_title = date.data.error[df][0]
                    }
                    $('#code_modal').modal('show')
                }
                
            }).catch(function(){
            // 请求发送失败
            console.log("请求失败11")
            })

       
        }
    },
    beforeDestroy(){
        clearInterval(this.timers)
    },
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
 .modal_top_{
     margin-top: 50%
 }
 .modal-header {
    padding: 15px;
    border-bottom: 0px solid #e5e5e5;
}
.modal-footer {
    padding: 15px;
    text-align: right;
    border-top: 0px solid #e5e5e5;
}
.btn-primary {
    color: #fff;
    background-color: rgba(251,120,24,1);
    border-color: rgba(253,154,26,1);
}
.btn-default {
    color: #fff;
    background-color: rgba(251,120,24,1);
    border-color: #ccc;
}
</style>
