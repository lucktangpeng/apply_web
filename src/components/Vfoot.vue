<template>
    <div class="form-group" id="foot_hear">
        <div class="col-sm-11" >
            <button type="button" class="btn btn-primary pull-right col-sm-3" @click="click_code()">确定</button>
            <button type="button" class="btn btn-primary pull-right col-sm-3">取消</button>
        </div>
    </div>
</template>
<script>
export default {
    name:"Vhear",
    data(){
        return{

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
            this.$store.dispatch("code_aox",{"phone":this.ph_code,"code":this.sendcode})
            this.$axios.request({
                url:"http://127.0.0.1:8000/api/record/",
                data:this.commit_val,
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                }
                }).then(function(date){
                    // 请求发送成功
                    console.log(date)
                }).catch(function(){
                // 请求发送失败
                console.log("请求失败")
                })

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