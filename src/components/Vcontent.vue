<template>
    <div class="container-fluid">
        <div class="row">
            <form class="form-horizontal col-md-6 col-md-offset-3">
                <vhear></vhear>
                <div class="form-group">
                    <label for="course_id" class="col-sm-2 control-label">课程选择</label>
                    <div class="col-sm-3">
                        <select  class="form-control" id="course_id" >
                            <option value="">会议代号</option>
                        </select>
                    </div>
                    <div class="col-sm-3">
                        <select  class="form-control" id="course_name" >
                            <option value="">会议课程</option>
                        </select>
                    </div>
                    <div class="col-sm-4">
                        <input type="password" class="form-control" id="time" >
                    </div>
                </div>
                <div class="form-group">
                    <label for="agent_id" class="col-sm-2 control-label">代理商代号</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="agent_id" >
                    </div>
                </div>
                <div class="form-group">
                    <label for="company" class="col-sm-2 control-label">公司名称</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="company" >
                    </div>
                </div>
               
                <div class="form-group">
                    <label for="area" class="col-sm-2 control-label">区域</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="area" >
                    </div>
                </div>
                <div class="form-group">
                    <label for="meeting_room" class="col-sm-2 control-label">会议室号</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="meeting_room" >
                    </div>
                </div>
                <div class="form-group">
                    <label for="meeting_room_pwd" class="col-sm-2 control-label">会议室密码</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="meeting_room_pwd" >
                    </div>
                </div>
                 <div class="form-group">
                    <label for="phone" class="col-sm-2 control-label">手机号</label>
                    <div class="col-sm-7">
                        <input type="password" class="form-control" id="phone" >
                    </div>
                    <div class="col-sm-3">
                        <input type="password" class="form-control" id="code" >
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Vhear from "../components/Vhear.vue"
export default {
    name:"Vcontent",
    data(){
        return{

        }
    },
    components:{
        Vhear
    }
}
</script>

<style>
</style>
