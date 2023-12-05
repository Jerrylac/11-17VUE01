<script>
import { mapState,mapActions } from 'pinia';
import counter from '../stores/counter';
import InjectFather from '../components/InjectFather.vue'
import {computed} from 'vue'
import {ref,provide} from 'vue'
export default{
    data(){
        return{
            message:"hello!!",
            dataArr:["a","b"],
            dog:{
                name:"可口可樂",
                age:65
            }
        }
    },
    components:{
        InjectFather
    },
    methods:{
        ...mapActions (counter,["setLocation"]),
        addArr(){
            this.dataArr.push(this.setupMsg)
        }
    },
    provide(){
        return{
            proMessage: computed(()=>this.message),
            arr:this.dataArr,
            pet:this.dog
        }
    },
    mounted(){
        this.setLocation(11)
    },
    setup(){
        let setupMsg=ref('setupMsg')
        provide ('setMsg',setupMsg)
        return{
            setupMsg
        }
    }

}
</script>
<template>
    <div class="grandArea">
        <h3>爺爺們的變數們</h3>
        <input type="text" v-model="this.message" name="" id="">
        <input type="text" v-model="setupMsg" name="" id="">
        <h4>{{ this.message }}</h4>
        <button type="button" @click="this.addArr()">btn</button>
        <p>{{ this.dataArr }}</p>
        <InjectFather/>
    </div>
</template>
<style scoped lang="scss">
.grandArea{
    height: 500px;
    width: 300px;
    border: 1px solid red ;
}
</style>