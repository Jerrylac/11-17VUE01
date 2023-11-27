<script>
export default{
    data(){
        return{
            title:"title",
            isBlue:false,
            isLarge:false,
            styleArr:[],
            imgText:"",
            arrTest:[1,2,3,4,5,6,7,8,9,10],
            arr:""
        }
    },
    methods:{
        test(){
            
            this.arr="https://media.discordapp.net/attachments/681432969960882178/1002944474978197534/3827eb802b3a5735.png?ex=65747854&is=65620354&hm=2414714a336c37b2fcd47d68da34d7d8e4685c1dafb8cbb8b285211ad43c4544&=&format=webp&width=1168&height=585"
            
        },
        test1(){
            this.arr=""
        }
    }

    
}
</script>

<template>
    <h1>title</h1>
    <h1 v-bind:class="title"> Head</h1>


    <h3>Class{}</h3>
    <label for="">isBlue</label>
    <input type="checkbox" value="true" v-model="isBlue">
    <label for="">isLarge</label>
    <input type="checkbox" value="true" v-model="isLarge">

    <h2 :class="{
        blue:isBlue,
        large:isLarge
    }">永欽銀行</h2>


    <h3>Class{{styleArr}}</h3>
    <label for="">Blue</label>
    <input type="checkbox" value="blue" v-model="styleArr" name="test">
    <label for="">Large</label>
    <input type="checkbox" value="large" v-model="styleArr" name="test">
    <label for="">blod</label>
    <input type="checkbox" value="blod" v-model="styleArr" name="test">
    <h2 :class="styleArr">烘焙坊</h2>

    <label for="">吉娃娃</label>
    <input type="radio" value="https://media.discordapp.net/attachments/483550384133111808/1166774573275029616/chihuahua-smile.gif?width=355&height=355" v-model="imgText" name="imgs">
    <br>
    <br>
    <label for="">Blue</label>
    <input type="radio" value="https://media4.giphy.com/media/TcdpZwYDPlWXC/giphy.gif" v-model="imgText" name="imgs">
    <br>
    <br>
    <label for="">HUH</label>
    <input type="radio" value="https://media.discordapp.net/attachments/853004774487097344/1096814329975804004/ezgif.com-gif-maker.gif" v-model="imgText" name="imgs">
<br>
<br>
        <img :src="imgText" alt="">
<br>
        <select name="" id="">
            <option value="">請選擇</option>
            <option :value="item" v-for="item in arrTest">{{ item }}</option>
        </select>
<br><br>
        <button type="button" @click="test()">1323</button>
        <button type="button" @click="test1()">1323</button>
        <img :src="arr" alt="">
</template>

<style scoped lang="scss">

.title{
    color: red;
}
.blue{
    color: blue;
}
.large{
    font-size: 100px;
}
.blod{
    font-style: italic;
}

</style>