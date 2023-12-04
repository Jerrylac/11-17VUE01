<script>
export default{
    data(){
        return{
            Text:"childOrange",
            Text1:"childOrange123"
        }
    },
    methods:{
        emitGo(){
            this.$emit("orange",this.Text)
        }
    },
    mounted(){

    }
}
</script>
<template>
    <div class="childArga">
        <p>In child2</p>
        <p>{{ this.Text }}</p>
        <button type="button" @click="emitGo()">Btn</button>
        <button type="button" @click="$emit('orange',this.Text1)">Btn1</button>
    </div>
</template>
<style>

</style>