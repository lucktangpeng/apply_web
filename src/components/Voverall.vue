<template>
    <div class="frame col-md-6 col-md-offset-3" :style="marginobj">
        <vcontent></vcontent>
    </div>
</template>
<script>
import Vcontent from "../components/Vcontent.vue"
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
        this.is_mobile()
        this.chang_margin()
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
    }
}
</script>
<style scoped>
    .frame{
        /* margin-top: 5%; */
        /* margin: 0 auto; */
  
        /* width: 41%;
        height: 63%; */
        background-color: white;
        padding: 0
    
    }
</style>

