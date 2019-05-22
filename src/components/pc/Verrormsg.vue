<template>
    <div class="alert alert-warning col-md-12 " role="alert" v-if="error_status|code_status"  >
        {{msg}}
        
    </div>
</template>
<script>
export default {
    name:"Verror_msg",
    data(){
        return{
            msg:""
        }
    },
    computed:{
        error_status(){
            if(this.error_content){
                if (!this.error_content.status){
                    this.msg = this.error_content.error.phone[0]
                    return true
                }
                else{
                    return false
                }
            };
            // that.$store.state.code_error
        },
        code_status(){
             if(this.code_content){
                if (!this.code_content.status){
                    for(var it in this.code_content.error){
                        console.log(this.code_content.error[it][0])
                        this.msg = this.code_content.error[it][0]
                    }
                    return true
                }
                else{
                    return false
                    console.log(121111111)
                }
            }
        },

        error_content(){
            return this.$store.state.error
        },
        code_content(){
            return this.$store.state.code_error
        }
    }
}
</script>
<style scoped>
    div{
        text-align: center
    }
    .alert {
    padding: 2px 15px;
    margin-bottom: 0;
    border: 1px solid transparent;
    border-radius: 4px;
    }
</style>
