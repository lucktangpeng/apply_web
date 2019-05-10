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
        course_id:Number|String
    },
    methods:{
        click_code(){
            console.log(this.sendcode)
            console.log("所有的数据")
            console.log(this.course_id)
            console.log(this.ph_code)
            console.log(this.company)
            console.log(this.area)
            console.log(this.agent_id)
            this.$store.dispatch("code_aox",{"phone":this.ph_code,"code":this.sendcode})

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