<template>
    <div class="col-md-10" >
        <div class="modal modal_top_" id="create_modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
            </div>
            <div class="modal-body text-center">
                <h3>{{modal_title}}</h3>
            </div>
            <div class="modal-footer " >
                <button type="button" class="btn btn-default pull-lefter" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary" @click="put_all()">确认</button>
            </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->
        <div class="content_body">
            <div class="col-md-11">
                <div class="text-center" id="title">报名信息确认</div>
                <div class="msg" id="one">课&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;程： {{com_course.course_name}}</div>
                <div class="msg">时&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;间：{{com_course.start_time}}</div>
                <div class="msg">代理商代号：{{all_val.agent_id}}</div>
                <div class="msg">单位\人代号：{{all_val.company}}</div>
                <div class="msg">区&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;域：{{all_val.area}}</div>
                <div class="msg">手&nbsp;&nbsp;&nbsp;&nbsp;机&nbsp;&nbsp;&nbsp;&nbsp;号：{{all_val.phone}}</div>
            </div>
           
        </div>
        <button type="button" class="btn btn-warning " id="foot_button" @click="stip_one()">取消</button>
        <button type="button" class="btn btn-warning pull-right" id="foot_button2" @click="notarize()">确定</button>
    </div>
</template>
<script>
import $ from "jquery"
export default {
    
    name:"Vcontent",
    data(){
        return{
            modal_title:"",
            modal_status:""
        }
        
    },
    methods:{
        put_all(){
            var that = this
            if(this.modal_status){
                
                this.$axios.request({
                        url:this.com.record_url,
                        method:"POST",
                        data:this.$store.state.put_vlue,
                        headers:{
                        'Content-Type':'application/json',
                        }
                    }).then(function(date){
                        // 请求发送成功
                        console.log("所有信息发送成功")
                        console.log(date)
                        $('#create_modal').modal('hide')
                       
                        // clearInterval(that.timer)
                        // that.$store.state.put_vlue.phone = that.phone_number
                        // that.$store.state.code_error = ""
                        // that.$router.push({name:"Vmobile_three"})
                    }).catch(function(){
                        // 请求发送失败
                        console.log("数据提交请求失败111")
                    })
            }
            else{
                $('#create_modal').modal('hide')
                that.$router.push({name:"Vmobile"})
            }
            
        },
        notarize(){
            this.modal_status = true
            this.modal_title = "确认报名信息无误!"
            $("#create_modal").modal('show')
           
        //    
        },
        stip_one(){
            this.modal_status = false
            this.modal_title = "确认取消当前信息!"
            $("#create_modal").modal('show')
            
        }
    },
    computed:{
        all_val(){
            return this.$store.state.put_vlue
        },
        course_val(){
            return this.$store.state.courese_msg.data
        },
        com_course(){
            console.log(this.course_val)
            if(!this.course_val){
                return {course_name:"",start_time:""}
            }
            else{
                 for (var i=0;i<this.course_val.length;i++){
                if(this.course_val[i].id == this.all_val.course_id){
                // this.$store.state.put_vlue.course_id = this.course_msg[i].id
                console.log("1111111111111111")
                console.log(this.course_val[i])
                return this.course_val[i]
                
            }
            }
            }
           
           
        }
    }
    
}
</script>
<style scoped>
#one{
    margin-top: 20px
}
.msg{
    margin-left: 15px;
    margin-bottom: 32px
}
 #title{
     padding-top: 20px;
     font-size: 20px;
     padding-bottom: 20px;
     border-bottom: 1px dotted rgba(83,83,83,1);
     /* opacity:0.54; */
 }
 .content_body{
     background-color: white;
     height: 400px;
     margin-top: 130px;
     /* width: 100% */
     background:rgba(255,255,255,1);
    border:1px solid rgba(255,255,255,1);
    border-radius:5px;
 }
 #foot_button{
     margin-top: 30px;
     color: #4D4D4D;
     width: 48%;
     height: 40px;
     background:#EEEEEE;
    border:1px solid rgba(191,191,191,1);
    border-radius:4px;
 }
 #foot_button2{
      margin-top: 30px;
     width: 48%;
     height: 40px;
     background:linear-gradient(0deg,rgba(251,120,24,1),rgba(253,154,26,1));
    border-radius:4px;
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
</style>