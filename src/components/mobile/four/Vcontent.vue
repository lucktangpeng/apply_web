<template>
    <div class="col-md-11">
        <div id="con">
            <div class="text-center title" id="title" >填写资料</div>
            <div>
                
                <div class="col-md-10">
                    <span>代理商代号</span>
                    <input type="text" class="form-control " @blur="com.toblus()" v-model="agent_id" id="input_st1" placeholder="请输入代理商代号或员工代号">
                </div>
                <div class="col-md-10" >
                    <span>单位\人名称</span>
                    <input type="text" class="form-control " @blur="com.toblus()" v-model="company" id="input_st2" placeholder="公司名或员工名">
                </div>
                <div class="col-md-10" >
                    <span>区&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;域</span>
                    <input type="text" class="form-control input_st"  @blur="com.toblus()" v-model="area" placeholder="所在城市">
                </div>
            </div>
        </div>

         <button type="button" class="btn btn-warning button_foot " @click="click_put()">下一步</button>
    </div>
</template>
<script>
export default {
    name:"Vcontent",
    data(){
        return{
            agent_id:"",
            company:"",
            area:"",
        }
    },
    methods: {
        click_put(){
            if(this.agent_id&&this.agent_id&&this.agent_id){
                this.$store.state.put_vlue.agent_id= this.agent_id
                this.$store.state.put_vlue.company= this.company
                this.$store.state.put_vlue.area= this.area
                this.$router.push({name:"Vmobile_two"})
                console.log(this.$store.state.put_vlue)
            }
            
            else{
                
            }
        }
    },
    computed:{
      
        
    }
}
</script>
<style scoped>
    .button_foot{
        width:100%;
        height: 50px;
        margin-top: 20px;
        background:linear-gradient(0deg,rgba(251,120,24,1),rgba(253,154,26,1));
        
    }
    .div_top{
        margin-top: 10px
    }
    #title_hear{
        line-height: 100%
    }
    .input_st{
        margin-left: 11px;
        margin-top: 5px;
        margin-bottom: 15px
    }
    #input_st2{
        margin-left: 11px;
        margin-top: 5px;
        margin-bottom: 15px
    }
     #input_st1{
        margin-left: 15px;
        margin-top: 7px;
        margin-bottom: 15px
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
    width: 70%;
 }
</style>
