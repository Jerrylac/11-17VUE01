<script>
export default{
    data(){
        return{
            data:{
                name:"",
                phone:"",
                sex:"",
                address:"",
                age:""
            }
        }
    },
    methods:{
        goData(){
            this.$emit("orange",this.data)
        }
    }
}

</script>
<template>
    <div class="boxChild">
        <h2>FlowChild1這邊輸入資料</h2>
        <form action="">
            <label for="">姓名</label>
            <input type="text" v-model="this.data.name">
            <br>
            <label for="">手機</label>
            <input type="text" v-model="this.data.phone">
            <br>
            <label for="">性別:</label>
            <span>
                男
                <input type="radio" name="gender" value="男" v-model="this.data.sex">
                女
                <input type="radio" name="gender" value="女" v-model="this.data.sex">
            </span>
            <br>
            <label for="">地址</label>
            <input type="text" v-model="this.data.address">
            <br>
            <label for="">年齡</label>
            <input type="text" v-model="this.data.age">
            <br>
            <br>
            <button type="button" @click="goData()">送出</button>
        </form>
    </div>
    
</template>
<style scoped lang="scss">
.boxChild{
    width: 50vmin;
    height: 50vmin;
    border: 1px solid black;
    input{
        margin-top: 20px;
    }
}
</style>