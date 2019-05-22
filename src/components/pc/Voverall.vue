<template>
    <div class="frame col-md-4 col-md-offset-6 top_number" :style="marginobj">
        <div class="modal modal_top_" id="success_modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
            </div>
            <div class="modal-body text-center">
                <h3>{{modal_title}}</h3>
            </div>
            <div class="modal-footer " >
                <button type="button" class="btn btn-warning pull-lefter" data-dismiss="modal">确认</button>
                <!-- <button type="button" class="btn btn-primary" @click="()">确认</button> -->
            </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->
        <vcontent></vcontent>
    </div>
</template>
<script>
import Vcontent from "./Vcontent"
export default {
    name:"Voverall",
    data(){
        return{
            marginobj:{
                marginTop: ""
            },
            mobli:""
        }
    },
    mounted(){
        // this.is_mobile()
        // this.chang_margin()
    },
    methods:{
        _isMobile() {
            let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
            return flag;
        },
        is_mobile(){
            if (this._isMobile()) {
                //手机端
                this.mobli = true
                } else {
                //PC端
                this.mobli = false
                }
            },
            
        chang_margin(){
            if(this.mobli){
                this.marginobj.marginTop=""
            }
            else{
                this.marginobj.marginTop="5%"
            }
        }
    },
    components:{
        Vcontent,
    },
    computed:{
        modal_title(){
            return this.$store.state.success_modal_msg
        },
    }
}
</script>
<style scoped>
    .frame{
        background-color: white;
        padding: 0
    
    }
    .top_number{
        margin-top: 10%
    }
    .modal_top_{
     margin-top: 10%
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
.btn-default {
    color: #fff;
    background-color: rgba(251,120,24,1);
    border-color: rgba(253,154,26,1);
}
</style>

