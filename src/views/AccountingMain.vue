<script>
export default{
    data(){
        return{
            obj:[],
            text:"",
            amount:"",
            id:0,
            err:"",
            total:"",
            num:"",
            income:0,
            expense:0,
            moy:""
        }
        
    },
    props:[
        "acc"
    ],
    methods:{
        gatMoy(){
            const formcontrol=document.querySelectorAll("input")
            this.num=0
            formcontrol.forEach(item=>{
                if(item.value.length==0){
                    this.err="請確認是否已填寫完畢"
                }
                else{
                    this.err=""
                }
                this.num++
            })
            if(this.num==formcontrol.length){
                this.obj.push({text:this.text,amout:this.amount,id:this.id++})
                localStorage.setItem("Accounting",JSON.stringify(this.obj))
                // this.err=""
                // this.obj.amout=this.amount
                // console.log(this.obj);
                // console.log(typeof (this.sum));
            }
            if(this.amount<0){
                this.expense+=this.amount
            }
            if(this.amount>0){
                this.income+=this.amount
            }
            

        },
        delinp(){
            this.text=""
            this.amount=""
        },
        delbtn(e){
            this.obj.forEach((item,index)=>{
                
                if(item.id==e.currentTarget.value){
                    console.log(this.obj);
                    this.obj.splice(index,1)
                }
            })
        },
        totalAmount(){
            let dataCosts=JSON.parse(localStorage.getItem("Accounting"))
            let sum=0;
            // dataCosts.forEach(item=>{
            //     // console.log(item);
            //     sum+=item.amount
            // })
            this.obj.forEach(item=>{
                // console.log(item.amout);
                sum+=item.amout
            })
            return sum
            
        }
    }
    
}
</script>
<template>
<div class="main">
    <div class="left">
        <div class="title">
            <h1>Expense Tracker</h1>
        </div>
        <div class="userName">
            <h3>{{ this.acc}}</h3>
        </div>
        <div class="moy">
            <p>YOUR BALANCE</p>
            <span>${{ totalAmount() }}</span>
        </div>

    </div>
    <div class="right">
        <h1 class="errText">{{ this.err }}</h1>
        <div class="top">
            <div class="ct">
                <p>INCOME </p>
                <p>收入</p>
                <p>{{ this.income }}</p>
            </div>
            <div class="ct">
                <p>EXPENSE </p>
                <p>支出</p>
                <p>{{ this.expense }}</p>
            </div>
        </div>
        <div class="addBtn">

            <button type="button" @click="delinp()" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add transaction</button>

        </div>
        <div class="box" v-for="item in obj">
                <p class="text">{{ item.text }}</p>
                <p class="amout">{{ item.amout }}</p>
                <button type="button" class="btn" @click="delbtn">Delete</button>

        </div>

    </div>
</div>

<!-- 輸入頁 面 -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label" >Text</label>
            <input type="text" class="form-control aaa" id="recipient-name" v-model="this.text">
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Amount</label>
            <input type="number" class="form-control aaa" id="recipient-name" v-model="this.amount">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="gatMoy()">Add transaction</button>
      </div>
    </div>
  </div>
</div>
</template>
<style scoped lang="scss">
.main{
    width: 100%;
    height: 100%;
    display: flex;
    .left{
        width: 30%;
        height: 100%;
        background-color: #161A30;
    }
    .right{
        width: 70%;
        height: 100%;
        background-color: #B6BBC4;
        .top{
            width: 100%;
            height: 30vmin;
            // background-color: bisque;
            display: flex;
            .ct{
                margin: 20vmin;
                margin-top: 2vmin;
                margin-left: 30vmin;
                font-size: 5vmin;
            }

        }
        .addBtn{
            width: 100%;
            height: 20vmin;
            display: flex;
            justify-content: center;
            align-items: center;
            button{
                background-color: #F0ECE5;
            }
        }
        .box{
            margin-left: 30%;
            width: 60vmin;
            height: 10vmin;
            background-color: #161A30;
            display:flex;
            align-items: center;
            border-radius: 10px;    
            .text{
                margin-left: 5%;
            }
            .amout{
                margin-left: 30%;
            }
            .btn{
                width: 10vmin;
                height: 5vmin;
                align-items: center;
                margin-left: auto;
                margin-right: 5%;
                background-color: #F0ECE5;
            }
            
        }
        .errText{
            width: 100%;
            height: 10vmin;
            margin-bottom: 0px;
            // background-color: bisque;
        }
    }
}
.fade{
    color: #161A30;
}
</style>