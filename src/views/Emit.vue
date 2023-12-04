<script>
import { mapState,mapActions } from 'pinia';
import counter from '../stores/counter';
import child2 from '../components/child2.vue'
export default{
    data(){
        return{
            child2Text:"",
            test:false,
        }
    },
    components:{
        child2
    },
    methods:{
        ...mapActions(counter,["setLocation"]),
        emitObj(xxx){
            console.log(xxx);
            this.child2Text=xxx
        },
        testCh(){
            if(this.test==false){
                this.test=true
            }
            else{
                this.test=false
            }
        }
    },
    mounted(){
        this.setLocation(9)
    }
}
</script>
<template>
    <div class="showArea" v-show="this.test==false">
        <h1>Emit</h1>
        <p>{{ child2Text }}</p>
    </div>
    <button type="button" @click="testCh()">btn</button>
    <child2 @orange="emitObj" v-show="this.test==true"/>
</template>
<style>

</style>