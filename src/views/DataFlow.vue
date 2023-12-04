<script>
import { mapState,mapActions } from 'pinia';
import counter from '../stores/counter';
import FlowChild1 from '../components/FlowChild1.vue'
import FlowChild2 from '../components/FlowChild2.vue'
export default{
    data(){
        return{
            childData:{}
        }
    },
    methods:{
        ...mapActions(counter,["setLocation"]),
        getData(xxx){
            this.childData=xxx
            console.log(this.childData);
        }
    },
    mounted(){
        this.setLocation[10]
    },
    components:{
        FlowChild1,
        FlowChild2
    }

}
</script>
<template>
<h2>DataFlow</h2>
<div class="box">
    <FlowChild1 @orange="getData"/>
    <FlowChild2 :dataName="childData.name" :dataAge="childData.age" :dataPhone="childData.phone" :dataSex="childData.sex" :dataAddress="childData.address"/>
</div>

</template>
<style scoped lang="scss">
.box{
    margin-left: 25%;
    display: flex;
}
</style>