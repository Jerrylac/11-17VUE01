<template>
    <slot :text="this.message" :count="1">

    </slot>
</template>
<script>
export default {
    data(){
        return{
            message:"message"
        }
    }
}
</script>
<style lang="">
    
</style>