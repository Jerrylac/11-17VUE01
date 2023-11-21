<script>
export default{
    data(){
        return{
            arr:[1,2,3,4,5,6],
            arr2:[
                {
                    name:"可口可樂",
                    type:"臘腸",
                    age:2
                },
                {
                    name:"百事可樂",
                    type:"吉娃娃",
                    age:8
                },
                {
                    name:"零卡可樂",
                    type:"馬爾濟斯",
                    age:6
                }
            ],
            arr3:[1,2,3,4,5,6,7,8,9,10]
        }
    }
}
</script>

<template>
<h3>V-for</h3>
<!-- arr -->
<p v-for="item in arr"> {{ item }}</p>
<br>
<p v-for="(item,index) in arr"> {{ index }}：{{ item }}</p>
<br>
<!-- arr2 -->
<ol v-for="elemet in arr2">

    <li>{{ elemet.name }}</li>
    <li>{{ elemet.type }}</li>
    <li>{{ elemet.age }}</li>
    <p>-----------</p>

</ol>
<br>
<!-- arr3 -->
<select name="" id="">
    <option value="">請選擇</option>
    <option v-for="item in arr3" value="xxx">{{ item }}</option>
</select>

<div class="cool" v-for="item in arr"></div>

</template>
<style scoped lang="scss">
.cool{
    width: 200px;
    height: 200px;
    border: 1px solid black;
}
</style>