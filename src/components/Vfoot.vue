<template>
    <div class="form-group" id="foot_hear">
        <div class="col-sm-11" >
            <button type="button" class="btn btn-primary pull-right col-sm-3" @click="click_code()">确定</button>
            <button type="button" class="btn btn-primary pull-right col-sm-3">取消</button>
        </div>
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
            // console.log(this.sendcode)
            // console.log("所有的数据")
            // console.log(this.course_id)
            // console.log(this.ph_code)
            // console.log(this.company)
            // console.log(this.area)
            // console.log(this.agent_id)
           
            console.log("测试异步pro")

            // this.$store.dispatch("code_aox",{"phone":this.ph_code,"code":this.sendcode})
            var that = this
            this.$axios.request({
            url:"http://127.0.0.1:8000/api/phone/",
            method:"PUT",
            data:{"phone":this.ph_code,"code":this.sendcode},
            headers:{
                'Content-Type':'application/json',
            }
            }).then(function(date){
            // 请求发送成功
                console.log("发送验证码的请求")
                console.log(date.data.status)
                that.$store.state.code_error = date.data
                // console.log(this)
                // that.code_status = date.data.status
                if(date.data.status){
                    that.$axios.request({
                        url:"http://127.0.0.1:8000/api/record/",
                        method:"POST",
                        data:{"phone":that.ph_code,
                                "company":that.company,
                                "agent_id":that.agent_id,
                                "area":that.area,
                                "course_id":that.course_id,},
                        headers:{
                        'Content-Type':'application/json',
                        }
                    }).then(function(date){
                        // 请求发送成功
                    console.log("发送全部数据的请求")
                    console.log(date)
                    // context.commit("RECORD_VALUES",date)
                        that.$store.state.code_error = ""
                    }).catch(function(){
                        // 请求发送失败
                        console.log("数据提交请求失败111")
                    })
                }
                
                
            // context.commit('CODE_AOX',date)
            }).catch(function(){
            // 请求发送失败
            console.log("请求失败11")
            })
             console.log(this.code_status)
            

             
            // console.log(Cookie.get("code_status"))
            // if(Cookie.get("code_status")){
            //     this.$store.dispatch("record_values",{"phone":this.ph_code,
            //                                           "company":this.company,
            //                                           "agent_id":this.agent_id,
            //                                           "area":this.area,
            //                                           "course_id":this.course_id,
            //                                           })

           
            // }

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
</style>