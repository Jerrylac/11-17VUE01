<script>
export default{
    data(){
        return{
            obj:[],
            objArr:[],
            text:"",
            amount:"",
            err:"",
            total:"",
            num:"",
            tot:"income",
            moy:"",
            income:0,
            expense:0,
            longUpTest:""
        }
        
    },
    props:[
        "acc"
    ],
    computed:{
        getMoy(){
            let inc=this.income
            let exp=this.expense
            this.obj.forEach(item=>{
            if(item.type==="income"){
                inc+=item.amout
            }else{
                exp+=item.amout
            }
        })
        return {inc,exp}
        },
    },
    mounted(){
        this.loadData()
    },
    methods:{
        
        delinp(){
            this.text=""
            this.amount=""
        },
        delbtn(index){
            console.log(index);
            
            const btnDelete=window.confirm("確定要刪除嗎?")
            if(btnDelete){
                this.obj.splice(index,1)
                console.log(this.obj);
                localStorage.setItem("Accounting",JSON.stringify(this.obj))
            }
        },
        totalAmount(){
            let dataCosts=JSON.parse(localStorage.getItem("Accounting"))
            let sum=this.getMoy.inc-this.getMoy.exp;
            return sum
            
        },
        
        saveData(){
            this.obj.push({text:this.text,amout:this.amount,type:this.tot})
            
            localStorage.setItem("Accounting",JSON.stringify(this.obj))
            
            
        },
        loadData(){
            const saved=JSON.parse(localStorage.getItem("Accounting"))||[]
            this.obj=saved
        },
        longUp(){
            this.longUpTest=false
            this.$emit("logUp",this.longUpTest)
        }
        
    },
    
    
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
        <div class="btnBox">
            <button type="button" @click="this.longUp()"><i class="fa-solid fa-arrow-right-from-bracket"></i></button>
        </div>
        
    </div>
    <div class="right">
        <h1 class="errText">{{ this.err }}</h1>
        <div class="top">
            <div class="ct1">
                <p>INCOME </p>
                <p>收入</p>
                <p>{{ getMoy.inc }}</p>
            </div>
            <div class="ct2">
                <p>EXPENSE </p>
                <p>支出</p>
                <p>{{ getMoy.exp }}</p>
            </div>
        </div>
        <div class="addBtn">

            <button type="button" @click="delinp()" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add transaction</button>

        </div>
        <div class="box" v-for="(item,index) in obj">
                <p class="text">{{ item.text }}</p>
                <p class="amout">{{ item.amout }}</p>
                <button type="button" class="btn" @click="delbtn(index)">Delete</button>

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
          <span>收入</span>
          <input type="radio" name="tot" id="" value="income" v-model="this.tot">
          <span>支出</span>
          <input type="radio" name="tot" id="" value="expense" v-model="this.tot">
        </form>
      </div>
      <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="saveData()">Add transaction 收入</button>
          
        
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
        .btnBox{
            width: 20%;
            margin-top: 50%;
            margin-left: 10%;
            // background-color: aqua;
            button{
                width: 6vmin;  
                margin-left: 0px;
                background-color: #F0ECE5;
                border-radius: 10px;
                opacity: 0.5;
                .fa-arrow-right-from-bracket{
                    font-size: 30px;
                    color: #161A30;
                }
            }&:hover{
                button{
                    opacity: 1;
                }
            }

        }
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
            .ct1{
                margin: 20vmin;
                margin-top: 2vmin;
                margin-left: 20%;
                font-size: 5vmin;
                color: green;
            }
            .ct2{
                margin: 20vmin;
                margin-top: 2vmin;
                margin-left: 20%;
                font-size: 5vmin;
                color: red;
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
                opacity: 0.5;
            }&:hover{
                .btn{
                    opacity: 1;
                }
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