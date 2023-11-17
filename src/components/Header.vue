<script>
import { RouterLink, RouterView } from 'vue-router'
export default{
    data(){
        return{

        }
    },
    components:{
        RouterLink,
        // RouterView
    }
}
</script>

<template>
<div class="headerSowh">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
</div>
</template>

<style scoped lang="scss">
.headerSowh{
    width: 100%;
    height: 100%;
    background-color: #E19898;
}
</style>