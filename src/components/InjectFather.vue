<script>
import InjectChild from '../components/InjectChild.vue'

export default{
    data(){
        return{
            
        }
    },
    components:{
        InjectChild,
    }
}
</script>
<template>
<div class="fatherArea">
    <h4>這是老爸的變數</h4>
    <InjectChild/>
</div>
</template>
<style scoped lang="scss">
.fatherArea{
    height: 400px;
    width: 300px;
    border: 1px solid blue ;
}
</style>