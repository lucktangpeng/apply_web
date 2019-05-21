<template>
    <div class="form-group" id="foot_hear">
        
       
             <button type="button" class="btn btn-primary btn-warning  button_right " @click="click_code()" >确定报名</button>
                 
    
            <!-- <button type="button" class="btn btn-primary btn-warning pull-right col-sm-3">取消</button> -->
        
    </div>
</template>
<script>
import Cookie from 'vue-cookies'
export default {
    name:"Vhear",
    data(){
        return{
            code_status:""
        }
    },
    props:{
        sendcode: String,
        ph_code: String,
        company: String,
        agent_id: String,
        area:String,
        course:Number|String
    },
    methods:{
        click_code(){
            var that = this
            this.$axios.request({
            url:this.com.phone_post_url,
            method:"PUT",
            data:{"phone":this.ph_code,"code":this.sendcode},
            headers:{
                'Content-Type':'application/json',
            }
            }).then(function(date){
            // 请求发送成功
                that.$store.state.code_error = date.data
                if(date.data.status){
                    that.$axios.request({
                        url:that.com.record_url,
                        method:"POST",
                        data:{"phone":that.ph_code,
                                "company":that.company,
                                "agent_id":that.agent_id,
                                "area":that.area,
                                "course_id":that.course,},
                        headers:{
                        'Content-Type':'application/json',
                        }
                    }).then(function(date){
                        // 请求发送成功
                        that.$store.state.code_error = ""
                    }).catch(function(){
                        // 请求发送失败
                        console.log("数据提交请求失败111")
                    })
                }
                
            }).catch(function(){
            // 请求发送失败
            console.log("请求失败11")
            })

        }
    },
    computed:{
        code_err(){
            return this.$store.state.code_error
        }
    },
    computed:{
        commit_val(){
            return{"course":this.course,
                    "company":this.company,
                    "area":this.area,
                    "agent_id":this.agent_id,
                    "phone":this.ph_code,}
        }
    }
}
</script>
<style scoped>
    img{
        float: right;
        width: 100%;
    }
    #foot_hear{
        margin-top: 5%
    }
    button{
        margin-left: 5%
    }
    .button_right{
        margin-left: 27% ;
        width: 62%;
        margin-bottom: 5%
    }
</style>