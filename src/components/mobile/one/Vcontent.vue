<template>
    <div class="col-md-11">
        <div id="con">
            <div class="text-center title" id="title" >课程选择</div>
            <div>
                
                <div class="col-md-10">
                    <span>课程</span>
                    <select type="email" class="form-control"  id="course_input" v-model="course_name" @change="chang_cour_name()">
                        <option value="0">请选择课程</option>
                        <option v-for="itme in course_msg">{{itme.course_name}}</option>
                    </select>
                </div>
                <div class="col-md-10" >
                    <span>时间</span>
                    <select type="email" class="form-control" id="course_input"  v-model="course_ti">
                        <option value="0">请选择课程时间</option>
                        <option v-for="itm in course_time">{{itm.start_date}}</option>
                    </select>
                </div>
            </div>
        </div>

         <button type="button" class="btn btn-warning button_foot " @click="click_put()">下一步</button>
    </div>
</template>
<script>
export default {
    name:"Vcontent",
    data(){
        return{
            course_name:0,
            course_ti:0
        }
    },
    methods: {
        chang_cour_name(){
            this.course_ti = 0
        },
        click_put(){
            // this.course_name
            // this.course_ti
            if(this.course_name&&this.course_ti !=0){
                 for (var i=0;i<this.course_msg.length;i++){
                if(this.course_msg[i].course_name == this.course_name&&this.course_msg[i].start_time == this.course_ti){
                   this.$store.state.put_vlue.course_id = this.course_msg[i].id
                    
                }
                
                }
            }
            console.log(this.$store.state.put_vlue.course_id)
            this.$router.push({name:"Vmobile_four"})
        },
    },
    computed:{
        course_msg(){
            return this.$store.state.courese_msg.data
        },
        course_time(){
        var time_list = []
        // console.log(JSON.parse(JSON.stringify(this.content_val)))
        // var cou = JSON.parse(JSON.stringify(this.course_msg))
        // console.log(this.course_msg)
        // let tr = JSON.stringify(this.course_msg)
        // console.log(JSON.parse(tr))
        for (var i=0;i<this.course_msg.length;i++){
          if(this.course_msg[i].course_name == this.course_name){
            time_list.push({
              "start_date":this.course_msg[i].start_time,
            })
          }
        }
        return time_list
        },
        
    }
}
</script>
<style scoped>
    .button_foot{
        width:100%;
        height: 50px;
        margin-top: 20px;
        background:linear-gradient(0deg,rgba(251,120,24,1),rgba(253,154,26,1));
        
    }
    .div_top{
        margin-top: 10px
    }
    #title_hear{
        line-height: 100%
    }
    #course_input{
        margin-left: 15px;
        margin-top: 20px;
        margin-bottom: 15px
    }
    #con{
        font-size:14px;
        font-weight:bold;
        background-color: white;
        height: 210px;
        width: 100%;
        /* margin-top:  */
        margin: 15px auto 0 auto;
        border-radius:9px;
    }
    .title{
        padding-top: 22px
    }
 .form-control{
    display: inline-block; 
    width: 80%;
 }
</style>
