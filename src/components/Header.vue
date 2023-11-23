<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapState,mapActions } from 'pinia';
import counter from '../stores/counter';
export default{
    data(){
        return{

        }
    },
    components:{
        RouterLink,
        // RouterView
    },
    computed:{
        ...mapState(counter,["location","locationInfo"])
    }
}
</script>

<template>
<div class="headerSowh">
    <RouterLink to="/" class="link">Home</RouterLink>
    <RouterLink to="/VtestAboutView" class="link">VtestAboutView</RouterLink>
    <RouterLink to="/Vfor" class="link">V-for</RouterLink>
    <RouterLink to="/Von" class="link">V-on</RouterLink>
    <RouterLink to="/test" class="link">test</RouterLink>
    <RouterLink to="/Vbind" class="link">V-bind</RouterLink>
</div>
<span> {{ location }}</span>
<span> {{ locationInfo }}</span>

</template>

<style scoped lang="scss">
.headerSowh{
    width: 100%;
    height: 100%;
    font-size: 30px;
    background-color: #E19898;
    
}
a{
    color: aqua;
}
a.router-link-exact-active{
    color: red;
    font-weight: bold;
}

</style>