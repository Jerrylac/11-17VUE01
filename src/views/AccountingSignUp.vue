<script>
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
    mounted(){
        // this.dataGO()
    },
    methods:{
        goAccounting(){
            this.accArr=false
            this.$emit("accGo",this.accArr)
        },
        saveData(){
            
            if(JSON.parse(localStorage.getItem("costs"))!==null){
                this.arr=JSON.parse(localStorage.getItem("costs"))
            }else{
                this.arr=[]
            }
            this.arr.push({acc:this.acc,paw:this.paw,test:false})
            this.$emit("orange",this.arr)
            localStorage.setItem("costs",JSON.stringify(this.arr))
        },
        dataGO(){
            const inpSign=document.querySelectorAll(".inpSign")
            const saved=JSON.parse(localStorage.getItem("costs"))||[]
            // console.log(saved);
            if(this.acc==""||this.paw==""||this.chPaw==""){
                window.alert("有資料尚未輸入");
            }
            else{
                
                saved.forEach(item=>{
                    console.log(item.acc);
                    if(item.acc==this.acc){
                        window.alert("已有該帳號請從新輸入")
                        this.acc=""
                        this.paw=""
                        this.chPaw=""
                    }else if(this.paw!=this.chPaw){
                        window.alert("請確認密碼是否正確");
                        this.chPaw=""
                    }else{
                        this.saveData()
                    }
                })
            }
        }
    },
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