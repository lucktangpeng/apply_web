<template>

    <div id="backgoup">
        <vplan></vplan>
        <vcontent></vcontent>
    </div>
</template>
<script>
import Vplan from "./Vplan"
import Vcontent from "./Vcontent"
export default {
    name:"Vmobeli",
    data(){
        return{
            
        }
    },
    components:{
        Vplan,
        Vcontent
    }
}
</script>
<style scoped>
#backgoup{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("/static/image/mobile_backgroup.png") no-repeat;
    background-size: cover;
    
}

</style>