<script>
import AccountingMain from './AccountingMain.vue'
import AccountingSignUp from './AccountingSignUp.vue'

export default{
    data(){
        return{
            arr:{
                acc:"",
                paw:""
            },
            arr1:[],
            acc:"",
            paw:"",
            signUp:false,
            accMain:false,
            errMsg:""
        }
    },
    methods:{
        goAccounting(){
            // console.log(this.arr.acc);
            const inpLog=document.querySelectorAll(".inpLog")
            let dataCosts=JSON.parse(localStorage.getItem("costs"))
            this.num=0
            inpLog.forEach(item=>{
                dataCosts.forEach(item2=>{
                    if(item.value.length==0){
                        this.errMsg="請輸入帳號或密碼"
                        return
                    }
                    if(item2.acc!=this.acc){
                        this.errMsg="尚未有該帳號"
                    }
                    if(item2.paw!=this.paw){
                        this.errMsg="密碼錯誤"
                    }
                    else{
                        if(this.acc==item2.acc&this.paw==item2.paw){
                            // this.$router.push('/Accounting')
                            console.log("已登入");
                            // this.acc=""
                            this.paw=""
                        }else{
                            this.errMsg="確認是否都正確";
                        }
                        this.accMain=true
                    }
                })
            })
        },
        goAcc(zzz){
            this.signUp=zzz
        },
        goAccountingSignUp(){
            this.signUp=true
        },
        getSignUp(xxx){
            console.log(xxx);
            // this.arr.push(xxx)
            this.arr=xxx
            this.arr.forEach(item=>{
                this.signUp=item.test

            })
            // console.log(this.arr);
        },
        getMain(aaa){

        }
    },
    components:{
        AccountingMain,
        AccountingSignUp
    }
}
</script>
<template>
<div class="main" v-show="signUp==false&&accMain==false">
    <div class="title">
        <h1>Expense Tracker</h1>
    </div>
    <div class="inpText">
        <p>Account</p>
        <input type="text" v-model="this.acc" name="" class="inpLog">
        <p>Password</p>
        <input type="password" v-model="this.paw" name="" class="inpLog">
    </div>
    <div class="msgBox">
        <p class="msg">{{ this.errMsg }}</p>
    </div>
    <div class="btnBox">
        <button class="btn" type="button" @click="goAccountingSignUp()">Sign Up</button>
        <button class="btn" type="button" @click="goAccounting()">Log In</button>
    </div>
</div>
    <AccountingSignUp @orange="getSignUp" @accGo="goAcc"  v-show="signUp==true"/>
    <AccountingMain  v-if="accMain==true" v-bind:acc="this.acc"/>
    
</template>
<style scoped lang="scss">
.main{
    margin: auto;
    width: 100vmin;
    height: 100vmin;
    background-color: #161A30;
    .msgBox{
        width: 100%;
        .msg{
            color: red;
            width: 50%;
            margin-left: 16%;
        }
    }
   .title{
    padding-top: 20vmin;
   }
   .inpText{
    width: 100%;
    height: 20vmin;
    margin-bottom: 2vmin;
   }
   .btnBox{
    width: 100%;
    height: 10vmin;
    /* background-color: aliceblue; */
    .btn{
        margin-top: 10px;
        margin-right: 5vmin;
        background-color: #F0ECE5;
    }
   }
}
</style>