<template>
    <div class="famArea">
        <div class="le">
            <RouteFamBar/>
        </div>
        <div class="rg">
            <RouterView/>
        </div>
    </div>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import RouteFamBar from '../views/RouteFamBar.vue'
export default {
    components:{
        RouterView,
        RouteFamBar
    }
}
</script>
<style scoped lang="scss">
.famArea{
    width: 100%;
    height: 100%;
    display: flex;

    .le{
        width: 100%;
        height: 30%;
        border: 1px solid black;
        font-size: 30px;
        a{
            
        }
    }
    .rg{
        width: 100%;
        height: 30%;
        border: 1px solid black;
    }
}
</style>