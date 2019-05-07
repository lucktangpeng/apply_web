<template>
    <div class="container-fluid">
        <div class="row">
            <form class="form-horizontal col-md-6 col-md-offset-3">
                <vhear></vhear>
                <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">课程名称</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputPassword3" class="col-sm-2 control-label">代理商代号</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
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
