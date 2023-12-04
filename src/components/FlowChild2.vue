<script>
export default{
    data(){
        return{

        }
    },
    props:[
        "dataName",
        "dataAge",
        "dataPhone",
        "dataSex",
        "dataAddress"
    ]
}
</script>
<template>
    <div class="boxChild">
        <h2>FlowChild2這邊確認資料</h2>
            <label for="">姓名</label>
            <input type="text" v-model="this.dataName" disabled>
            <br>
            <label for="">手機</label>
            <input type="text" v-model="this.dataName" disabled>
            <br>
            <label for="">性別:</label>
            <span>
                {{dataSex}}
            </span>
            <br>
            <label for="">地址</label>
            <input type="text" v-model="this.dataAddress" disabled>
            <br>
            <label for="">年齡</label>
            <input type="text" v-model="this.dataAge" disabled>
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