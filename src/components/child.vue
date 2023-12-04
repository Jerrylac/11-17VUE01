<script>
export default{
    data(){
        return{

        }
    },
    props:[
        "parentMsg",
        "inpName",
        "inpPaw",
        "inpMail",
        "parent",
        "personName"
    ]
}
</script>
<template>
<div class="childArea">
    <h3>childArea</h3>
    <!-- <h3>{{ this.parentMsg }}</h3>
    <h3>名子:{{ this.inpName }}</h3>
    <h3>密碼: {{ this.inpPaw }}</h3>
    <h3>手機: {{ this.inpMail }}</h3> -->
    

        <!-- <input type="text" v-model="this.personName" name="" id=""> -->

</div>
</template>
<style scoped lang="scss">
    .childArea{
        width: 300px;
        height: 300px;
        margin-top: 30px;
        margin-left: 35%;
        border: 1px solid red;
    }

</style>