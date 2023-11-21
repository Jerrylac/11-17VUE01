<script>
export default{
    data(){
        return{
            title:"",
            text:""
        }
    },
    methods:{
        print(){
            let th=this
            console.log("btn");
            th.title="btn"
        },
        sky(){
            console.log("sky")
        },
        write(){
            console.log(this.text);
        },
        goOtherWay(){
            this.$router.push('/Vfor')
        }
    }
}
</script>

<template>
    <h1> V-on</h1>
    <button type="button" v-on:click="print()">btn</button>
    <p>{{ this.title }}</p>
    <br>

<select name="" id="" @change="sky()">
    <option value="1">1</option>
    <option value="2">2</option>
</select>
<br>
<br>
<input type="text" v-model="this.text" @keydown.enter="write()" name="" id="">
<br>
<br>
<button type="button" @click="goOtherWay()">123</button>

</template>
<style scoped lang="scss">


</style>