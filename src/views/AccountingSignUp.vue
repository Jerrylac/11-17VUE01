<script>
// import Accountinglogin from '../views/Accountinglogin.vue'
// import Accounting from '../views/Accounting.vue'
export default{
    data(){
        return{
            acc:"",
            paw:"",
            chPaw:"",
            arr:[],
            accArr:""
        }
    },
    methods:{
        goAccounting(){
            this.accArr=false
            this.$emit("accGo",this.accArr)
        },
        dataGO(){
            const inpSign=document.querySelectorAll(".inpSign")
            let str=""
            let dataCosts=JSON.parse(localStorage.getItem("costs"))
            if(this.acc==""){
                console.log("帳號未輸入");
            }
            if(this.paw==""){
                console.log("密碼未輸入");  
            }
            if(this.chPaw==""){
                console.log("請輸入確認密碼");
            }else{
                if(this.paw!=this.chPaw){
                    console.log("請確認密碼是否正確");
                }else{
                    dataCosts.forEach(item=>{
                        if(item.acc==this.acc){
                            console.log("該帳號已存在");
                        }else{
                            this.arr.push({acc:this.acc,paw:this.paw,test:false})
                            this.$emit("orange",this.arr)
                            localStorage.setItem("costs",JSON.stringify(this.arr))
                        }
                        
                    })
                }
            }
            // console.log(dataCosts);
            // if(this.acc==""){
            //     console.log("帳號未輸入");
            // }
            // if(this.paw=="")
            // {
            //     console.log("密碼未輸入");
            // }
            // if(this.chPaw=="")
            // {
            //     console.log("請輸入確認密碼");
            // }else{
            //     if(this.paw!=this.chPaw){
            //         console.log("請確認密碼是否正確");
            //     }else{
            //         this.arr.push({acc:this.acc,paw:this.paw,test:false})
            //         this.$emit("orange",this.arr)
                    
            //         // this.acc=""
            //         // this.paw=""
            //         // this.chPaw=""
            //     }
            // }
            
            // this.$emit("orange",this.paw)
        }
    },
    // components:{
    //     Accountinglogin,
    //     Accounting
    // }
}
</script>
<template>
<div class="main">
    <div class="title">
        <h1>Sign Up</h1>
    </div>
    <div class="inpText">
        <p>Account</p>
        <input type="text" name="" v-model="this.acc" class="inpSign">
        <p>Password</p>
        <input type="password" v-model="this.paw" name="" class="inpSign">
        <p>Repeat Password</p>
        <input type="password" v-model="this.chPaw" name="" class="inpSign">
    </div>
    <div class="btnBox">
        <button class="btn" type="button" @click="goAccounting()">Cancel</button>
        <button class="btn" type="button" @click="dataGO()">Sign Up</button>
    </div>
    <!-- <Accountinglogin
    v-bind:inpAcc="this.acc"
    :inpPaw="this.paw"
    :inpChPaw="this.chPaw"
    />
    <Accounting
    v-bind:inpAcc="this.acc"
    :inpPaw="this.paw"
    :inpChPaw="this.chPaw"
    /> -->
</div>
</template>
<style scoped lang="scss">
.main{
    margin: auto;
    width: 100vmin;
    height: 100vmin;
    background-color: #161A30;
   .title{
    padding-top: 20vmin;
   }
   .inpText{
    width: 100%;
    height: 30vmin;
    margin-bottom: 2vmin;
    // background-color: antiquewhite;
   }
   .btnBox{
    width: 100%;
    height: 10vmin;
    // background-color: aliceblue; 
    .btn{
        margin-top: 10px;
        margin-right: 5vmin;
        background-color: #F0ECE5;
    }
   }
}
</style>