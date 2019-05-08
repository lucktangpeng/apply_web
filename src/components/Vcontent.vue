<template>
    <div class="container-fluid">
        <div class="row">
            <vhear></vhear>
            <form class="form-horizontal col-md-12">
               
                <div class="form-group">
                    <label for="course_id" class="col-sm-3 control-label">课程选择</label>
                    <div class="col-sm-3">
                        <select  class="form-control" v-model="couponSelected"  id="course_id" @change="change_man()" >
                            <option v-for="itme in course_msg" :value="itme.id" >
                                {{itme.course_name}}
                            </option>
                        </select>
                    </div>
                    <div class="col-sm-5">
                        <fieldset disabled>
                        <input type="text" class="form-control" id="course_name" v-model="time" >
                        </fieldset>
                    </div>
                    <!-- <div class="col-sm-2">
                        <input type="password" class="form-control" id="time" >
                    </div> -->
                </div>
                <div class="form-group">
                    <label for="agent_id" class="col-sm-3 control-label">代理商代号</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="agent_id" >
                    </div>
                </div>
                <div class="form-group">
                    <label for="company" class="col-sm-3 control-label">公司名称</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="company" >
                    </div>
                </div>
               
                <div class="form-group">
                    <label for="area" class="col-sm-3 control-label">区域</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="area" >
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
                     <!-- <div class="col-sm-3" @click="clickmander">
                            <img id="img_w" src="/static/image/code.png" >
                    </div> -->
                 
                </div>
                <vfoot></vfoot>
                <!-- <div class="form-group">
                    <div class="col-sm-5 pull-right" >
                        <input type="password" class="form-control" id="phone" >
                    </div>
                    <div class="col-sm-3">
                        <vbutton></vbutton>
                    </div>
                </div> -->
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
            // course_msg:this.$store.state.courese_msg.data,
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
        change_man(){
            this.loginType = course_id.options[course_id.selectedIndex].value;
            console.log(this.loginType)
            console.log(this.course_msg[this.loginType-1])
            this.time = this.course_msg[this.loginType-1].time
            this.meeting_room = this.course_msg[this.loginType-1].meeting_room
            this.meeting_room_pwd = this.course_msg[this.loginType-1].meeting_room_pwd
        },
        clickmander(){
            this.$store.dispatch("phone_aox",this.phone)
        }
    },
    created(){
　　　　　　　　　　　　//如果没有这句代码，select中初始化会是空白的，默认选中就无法实现
                    this.couponSelected = this.course_msg;
                    console.log(this.couponSelected)
                },
    computed:{
        course_msg(){
            return this.$store.state.courese_msg.data
        },
        cour(){
            return 11
        }
    }
}
</script>

<style>
    form{
        margin-top: 7%;
    }
    .row{
        /* font-size: 14px; */
    }
    .img_w{
        width: 100%;
    }
</style>
