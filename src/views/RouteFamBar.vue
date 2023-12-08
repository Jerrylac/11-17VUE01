<template >
    <div>
        <RouterLink to="/RouteFam/RouteChild1" class="link
        ">RouteChild1</RouterLink>
        <RouterLink to="/RouteFam/RouteChild2" class="link">RouteChild2</RouterLink>
    </div>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    components:{
        RouterLink
    }
}
</script>
<style scoped lang="scss">
    .link{
        color: black;
    }
    .link:hover{
        color: aqua;
    }
</style>