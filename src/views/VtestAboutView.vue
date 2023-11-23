<script>
import { mapState,mapActions } from 'pinia';
import counter from '../stores/counter';
export default{
  data(){
    return{
      title:"title",
      info:{
        neame:"可口可樂",
        age:2,
        type:"臘腸"
      },
      cool:"",
      selectText:"",
      lazyText:"",
      numberText:"",
      trimText:"",
      checkboxTest:[],
      radioText:""
    }
    
    
  },
  methods:{
    ...mapActions(counter,["getLocation","setLocation","getf"])
  }
}
</script>

<template>
  <button type="button" @click="getLocation()">get</button>
  <button type="button" @click="setLocation(2)">set</button>
  <br>
  <button type="button" @click="getf">123</button>
  <h1>{{ this.title }}</h1>
  <h2>V-text</h2>
  <p v-text="'this is a page'"></p>
  <p v-text="info"></p>
  <p v-text="'info'+info"></p>
  <p v-text="`info ${info.neame}`"></p>
  <br>
  <h2>V-model</h2>
  <input type="text" v-model="cool">
  <p>{{ this.cool }}</p>


  <!-- lazy -->

  <h2>lazt</h2>
  <input type="text" name="" id="" v-model.lazt="lazyText">
  <p>{{ this.lazyText }}</p>
  <h2>number</h2>
  <input type="text" name="" id="" v-model.number="numberText">
  <p>{{ this.numberText }}</p>
  <h2>trim</h2>
  <input type="text" name="" id="" v-model.trim="trimText">
  <p>{{ this.trimText }}</p>

<!--checkboxTest  -->


<!-- radio -->
<label for="">早餐</label>
<input type="radio" value="早餐" v-model="radioText" name="food">
<label for="">午餐</label>
<input type="radio" value="午餐" v-model="radioText" name="food">
<label for="">晚餐</label>
<input type="radio" value="晚餐" v-model="radioText" name="food">

<p>{{ this.radioText }}</p>

</template>

<style scoped lang="scss">




</style>
