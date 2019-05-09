<template>
    <div class="container-fluid">
        <div class="row">
            <vhear></vhear>
            <form class="form-horizontal col-md-12">
                <div class="form-group">
                    <label for="course_id" class="col-sm-3 control-label">课程选择</label>
                    <div class="col-sm-3">
                        <select  class="form-control" v-model="couponSelected"  id="course_id" @change="change_cou()" >
                            <option value="0">请选择</option>
                            <option v-for="itme in course_msg" :value="itme.id" >
                                {{itme.course_name}}
                            </option>
                        </select>
                    </div>
                    <div class="col-sm-5">
                        
                        <select class="form-control" v-model="timeSelected" id="course_time" @change="change_time()" >
                            <option value="0">请选择</option>
                            <option :value="tim.id" v-for="tim in course_msg">{{tim.time}}</option>
                        </select>
                      
                    </div>
                </div>
                <div class="form-group">
                    <label for="agent_id" class="col-sm-3 control-label">代理商代号</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="agent_id" placeholder="请填入代理商代号或者员工代号">
                    </div>
                </div>
                <div class="form-group">
                    <label for="company" class="col-sm-3 control-label">培训人名称</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="company" placeholder="公司名或员工名">
                    </div>
                </div>
               
                <div class="form-group">
                    <label for="area" class="col-sm-3 control-label">区域</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="area" placeholder="所在城市">
                    </div>
                </div>
                <div class="form-group">
                    <label for="meeting_room" class="col-sm-3 control-label">会议室号</label>
                    <div class="col-sm-8">
                        <fieldset disabled>
                        <input type="text" class="form-control" id="meeting_room" v-model="meeting_room" >
                        </fieldset>
                    </div>
                </div>
                <div class="form-group">
                    <label for="meeting_room_pwd" class="col-sm-3 control-label">会议室密码</label>
                    <div class="col-sm-8">
                        <fieldset disabled>
                        <input type="text" class="form-control" id="meeting_room_pwd" v-model="meeting_room_pwd" >
                        </fieldset>
                    </div>
                </div>
                <div class="form-group">
                    <label for="phone" class="col-sm-3 control-label">手机号</label>
                    <div class="col-sm-5">
                        <input type="text" class="form-control" id="phone" v-model="phone" >
                    </div>
                    <vbutton :ph="phone"></vbutton>
                </div>
                <vfoot></vfoot>
            </form>
        </div>
    </div>
</template>

<script>
import Vhear from "../components/Vhear.vue"
import Vbutton from "../components/Vbutton.vue"
import Vfoot from "../components/Vfoot.vue"
export default {
    name:"Vcontent",
    data(){
        return{
            time:"",
            meeting_room:"",
            meeting_room_pwd:"",
            phone:""
        }
    },
    components:{
        Vhear,
        Vbutton,
        Vfoot,
    },
    methods:{
        change_cou(){
            //根据课程id来变更时间的id
            this.course_num = course_id.options[course_id.selectedIndex].value;
            this.timeSelected = this.course_num
            this.time_and_cou(this.course_num)
        },
        change_time(){
            //根据时间id来变更课程的id
            this.course_num = course_time.options[course_time.selectedIndex].value;
            this.couponSelected = this.course_num
            this.time_and_cou(this.course_num)
        },
        time_and_cou(course_num){
            //时间和课程通用代码
            if (course_num == 0){
                this.meeting_room=""
                this.meeting_room_pwd=""
            }
            else{
                this.meeting_room = this.course_msg[this.course_num-1].meeting_room;
                this.meeting_room_pwd = this.course_msg[this.course_num-1].meeting_room_pwd
            }
        },

        clickmander(){
            // this.$store.dispatch("phone_aox",this.phone)
        }
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
        background-color:#1384D3;
        border-color: #1384D3;
    }
</style>
