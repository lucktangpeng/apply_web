<template>
    <div class="frame">
        <vcontent></vcontent>
    </div>
</template>
<script>
import Vcontent from "../components/Vcontent.vue"
export default {
    name:"Voverall",
    data(){
        return{

        }
    },
    components:{
        Vcontent,
    }
}
</script>
<style scoped>
    .frame{
        margin-top: 111px;
        /* margin: 0 auto; */
        margin-left: auto;
        margin-right: auto;
        width: 41%;
        height: 63%;
        background-color: white
    }
</style>

