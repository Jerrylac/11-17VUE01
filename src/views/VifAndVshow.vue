<script>
export default{
    data(){
        return{
            car:false,
            car1:false,
            house:0,
            house2:0
        }
    }
}
</script>

<template>
    <h1>V-if</h1>
    <label for="">小名有車</label>
    <input type="checkbox" value="true" v-model="car" name="" id="">
    <p v-if="car">確實有車</p>
    <p>-------------</p>
    <h1>V-show</h1>
    <label for="">有車</label>
    <input type="checkbox" value="true" v-model="car1" name="" id="">
    <p v-show="car1">確實有車</p>
    <p>---------</p>
    <h1>V-if&&V-elas</h1>
    <label for="">有房</label>
    <select name="" id="" v-model="house">
        <option value="">請選擇</option>
        <option value="1">1</option>
        <option value="2">2</option>
    </select>
    <p v-if="house==1">普</p>
    <p v-if="house==2">豪華</p>
    <p v-else>房子?</p>
    <p>---------</p>
    <h1>V-if&V-elas-if&V-elas</h1>
    <label for="">有房</label>
    <select name="" id="" v-model="house2">
        <option value="">請選擇</option>
        <option value="1">1</option>
        <option value="2">2</option>
    </select>
    <p v-if="house2==1">普</p>
    <p v-else-if="house2==2">豪華</p>
    <p v-else>房子?</p>

</template>

<style scoped lang="scss">


</style>