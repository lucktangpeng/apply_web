<template>
    <div class="container-fluid">
        <div class="row">
            <vhear></vhear>
            <form class="form-horizontal col-md-12">
                <div class="form-group">
                    <label for="course_id" class="col-sm-3 control-label">课程选择</label>
                    <div class="col-sm-3 padin_right">
                        <select  class="form-control" v-model="couponSelected"  id="course_id" @change="change_cou()" >
                            <option value="0">请选择</option>
                            <option v-for="(itme,index) in course_msg" :value="itme.id"  >
                                {{itme.course_name}}
                                <!-- <p style="display: none">1</p> -->
                            </option>
                        </select>
                    </div>
                    <div class="col-sm-5 padin_left">
                        
                        <select class="form-control" v-model="timeSelected" id="course_time" @change="change_time()" >
                            <option value="0">请选择</option>
                            <option v-for="(tim,ins) in cou_time_list">{{tim}}</option>
                        </select>
                      
                    </div>
                </div>
                <div class="form-group">
                    <label for="agent_id" class="col-sm-3 control-label" >代理商代号</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="agent_id" v-model="agent_id" placeholder="请填入代理商代号或者员工代号">
                    </div>
                </div>
                <div class="form-group">
                    <label for="company" class="col-sm-3 control-label">培训人名称</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="company" v-model="company" placeholder="公司名或员工名">
                    </div>
                </div>
               
                <div class="form-group">
                    <label for="area" class="col-sm-3 control-label">区域</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="area" v-model="area" placeholder="所在城市">
                    </div>
                </div>
                <div class="form-group">
                    <label for="meeting_room" class="col-sm-3 control-label">会议室号</label>
                    <div class="col-sm-6">
                        <fieldset disabled>
                        <input type="text" class="form-control" id="meeting_room" v-model="meet_room[0]" >
                        </fieldset>
                    </div>
                    <div class="col-sm-2">
                        <fieldset disabled>
                        <input type="text" class="form-control" id="already_num" v-model="already_num" >
                        </fieldset>
                    </div>
                </div>
                <div class="form-group">
                    <label for="meeting_room_pwd" class="col-sm-3 control-label">会议室密码</label>
                    <div class="col-sm-8">
                        <fieldset disabled>
                        <input type="text" class="form-control" id="meeting_room_pwd" v-model="meet_room[1]" >
                        </fieldset>
                    </div>
                </div>
                <div class="form-group">
                    <label for="phone" class="col-sm-3 control-label">手机号</label>
                    <div class="col-sm-3 padin_right">
                        <input type="text" class="form-control" id="phone" v-model="phone" @change="err_change()" placeholder="手机号" >
                        <!-- <verrormsg></verrormsg> -->
                    </div>
                    <div class="col-sm-2 padin">
                        <input type="text" class="form-control " id="code" v-model="code" placeholder="验证码"  >
                        
                    </div>
                    <vbutton :ph="phone"></vbutton>
                </div>
                    <div class="col-sm-8 col-sm-offset-3 padin botton_msg">
                       <verrormsg></verrormsg>
                        <!-- <verrormsg></verrormsg> -->
                    </div>
                
                <!-- <div class="form-group">
                    <label for="phone" class="col-sm-3 control-label">验证码</label>
                    
                    <vbutton :ph="phone"></vbutton>
                </div> -->
                <vfoot :sendcode=code :ph_code="phone" :agent_id="agent_id" :company="company" :area="area" :course="couponSelected" ></vfoot>
            </form>
        </div>
    </div>
</template>

<script>
import Vhear from "../pc/Vhear"
import Vbutton from "../pc/Vbutton"
import Vfoot from "../pc/Vfoot"
import Verrormsg from "../pc/Verrormsg"
export default {
    name:"Vcontent",
    data(){
        return{
            time:"",
            meeting_room:"",
            meeting_room_pwd:"",
            phone:"",
            code:"",
            agent_id:"",
            company:"",
            area:"",
            id_cou:"",
            already_num:"",
            course_id_val:"",
            couponSelected:"",
            timeSelected:"",
            meeting_room:"",
            meeting_room_pwd:""
        }
    },
    components:{
        Vhear,
        Vbutton,
        Vfoot,
        Verrormsg,
    },
    mounted(){
       
    },
    computed:{
       
    },
    methods:{
        err_change(){
            this.$store.state.code_error = ""
        },
        change_cou(){
            this.meeting_room = ""
            this.meeting_room_pwd = ""
            this.timeSelected=0
            this.$store.state.code_error=""
        },
        change_time(){
        
        },
        time_and_cou(course_num){
            //时间和课程通用代码
            if (course_num == 0){
                this.meeting_room=""
                this.meeting_room_pwd=""
            }
            else{
                var that = this
                this.$axios.request({
                    url:this.com.sum_url+course_num,
                    method:"GET",
                    headers:{
                        'Content-Type':'application/json',
                    }
                    }).then(function(date){
                    // 请求发送成功
                    console.log(date)
                    that.already_num = date.data.data
                    }).catch(function(){
                    // 请求发送失败
                    console.log("请求失败")
                    })
                for(var i in this.course_msg){
                    if(parseInt(this.course_msg[i].id) == course_num){
                        this.meeting_room = this.course_msg[i].meeting_room;
                        this.meeting_room_pwd = this.course_msg[i].meeting_room_pwd
                    }
                    

                }
               
                
            }
        },
    },
    created(){
　　　　　　　　　　　//课程和时间select默认选择零
                    this.couponSelected = 0;
                    this.timeSelected = 0
                },
    computed:{
        course_msg(){
            return this.$store.state.courese_msg.data
        },
        cou_time_list(){
             for (var number in this.course_msg){
                if(this.course_msg[number].id == this.couponSelected){
                    
                    this.course_id_val = this.course_msg[number].course_name
                }
            }
            var course_time_list=[]
            for (var val in this.course_msg){
                if(this.course_msg[val].course_name == this.course_id_val){
                    course_time_list.push(this.course_msg[val].start_time)
                }
            }
            return course_time_list
        },
        meet_room(){
            //根据课程的名称和时间进行搜索，对应的会议室号和密码
            for (var vals in this.course_msg){
                if(this.course_msg[vals].course_name == this.course_id_val&&this.course_msg[vals].start_time == this.timeSelected){
                    this.meeting_room = this.course_msg[vals].meeting_room
                     this.meeting_room_pwd = this.course_msg[vals].meeting_room_pwd
                }
            }
            return [this.meeting_room,this.meeting_room_pwd]
        }
    }

}
</script>

<style>
    form{
        margin-top: 7%;
    }
    .img_w{
        /* 图片自适应宽度 */
        width: 100%;
    }
    .btn-primary {
        /* 覆盖bootstrap按钮原有的颜色 */
        color: #fff;
        background-color:#FF7105;
        border-color: #FF7105;
    }
    .padin{
        padding-right: 5px;
        padding-left: 5px;
    }
     .padin_left{
        padding-left: 5px;
    }
        .padin_right{
        padding-right: 5px;
    }
    .botton_msg{
        margin-bottom: 3%
    }
   
</style>
