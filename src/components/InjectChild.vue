<script>
export default{
    data(){
        return{

        }
    },
    inject:[
        "proMessage",
        "setMsg",
        "arr",
        "pet"
    ]
}
</script>
<template>
<div class="childArea">
    <h4>這是兒子區域</h4>
    <p>{{ this.proMessage }}</p>
    <p>{{ this.setMsg }}</p>
    <p>{{ this.arr }}</p>
    <p>{{ this.pet }}</p>
</div>
</template>
<style scoped lang="scss">
.childArea{
    height: 300px;
    width: 300px;
    border: 1px solid red ;
}
</style>