<script>
import { mapState,mapActions } from 'pinia';
import counter from '../stores/counter';
import child from '../components/child.vue'
export default{
    data(){
        return{
            title:"father to son",
            name:"",
            paw:"",
            mail:"",
            opC:false,
            text:"",
            text2:"",
            num:"",
            person:{
                name:"可口可樂",
                age:58,
                sex:"女"
            }
        }
    },
    methods:{
        ...mapActions(counter,["setLocation"]),
        // opInfo(){
            
        //     const inpAll=document.querySelectorAll("input")
        //     this.num=0
        //     // console.log(inpAll);
        //     inpAll.forEach(item=>{
        //         if(item.value.length==0){
        //             this.text2="還有未填寫的"
        //             console.log(item);
        //             return
        //         }
        //         this.num++
        //     })
        //     console.dir(inpAll);
        //     if(this.num==inpAll.length){

        //         this.opC=!this.opC
        //     }
        // }
    },
    components:{
        child
    },
    mounted(){
    this.setLocation(8)
    }

}
</script>
<template>
<div class="area">
    <!-- <h2>{{ this.title }}</h2>
    <h3  v-show="this.opC==false">{{ this.text2 }}</h3> -->
    <!-- <child v-bind:parentMsg="this.title"
    :inpName="this.name"
    :inpPaw="this.paw"
    :inpMail="this.mail"
    v-show="this.opC==true"
    />
    <br>
    <form action="" v-show="this.opC==false" >
        
        <label for="">名子: </label><input type="text" v-model="this.name" name="" id="">
        <br>
        <br>
        <label for="">密碼: </label><input type="text" v-model="this.paw" name="" id="">
        <br>
        <br>
        <label for="">手機: </label><input type="text" v-model="this.mail" name="" id="">
        <br>
        <br>
        <button type="button" @click="opInfo()">確定</button>
    </form> -->
    
    {{ this.person }}

    

    <child :personName="this.person.name"/>

</div>
</template>
<style scoped lang="scss">
.area{
    width: 80%;
    height: 35%;
    padding: 50px;
    margin-left: 50px;
    border: 1px solid black;
}
</style>