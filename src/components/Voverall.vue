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
            val:this.mobl
        }
    },
    mounted(){
        console.log(this.$store.state.mobile)
        this.chang_margin()
    },
    methods:{
        chang_margin(){
            console.log(111132323323)
            console.log(this.mobl)
            if(this.mobl){
                this.marginobj.marginTop=""
                console.log(333333333333333333333)
            }
            else{
                this.marginobj.marginTop="5%"
                 console.log(66666666666666666666666)
            }
        }
    },
    components:{
        Vcontent,
    },
    computed:{
        mobl(){
            console.log(111111111111)
            console.log(this.$store.state)
            return this.$store.state.mobile
        }
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

