<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapState,mapActions } from 'pinia';
import counter from '../stores/counter';
export default{
    data(){
        return{
            arr:["aaa","bbb","ccc"]
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
    <RouterLink to="/" class="link" >Home</RouterLink>
    <RouterLink to="/VtestAboutView" class="link"  >VtestAboutView</RouterLink>
    <RouterLink to="/Vfor" class="link" >V-for</RouterLink>
    <RouterLink to="/Von" class="link" >V-on</RouterLink>
    <RouterLink to="/test" class="link" >test</RouterLink>
    <RouterLink to="/Vbind" class="link" >V-bind</RouterLink>
    <RouterLink to="/VifAndVshow" class="link" >V-if And V-show</RouterLink>
    <RouterLink to="/WatchAndComputed" class="link" >WatchAndComputed</RouterLink>
    <RouterLink to="/Props" class="link" >Props</RouterLink>
    <RouterLink to="/Accountinglogin" class="link" >記帳</RouterLink>

    <RouterLink to="/Emit" class="link" >Emit</RouterLink>
    <RouterLink to="/DataFlow" class="link" >DataFlow</RouterLink>
    <RouterLink to="/Vslot" class="link" >Vslot</RouterLink>
    <RouterLink to="/ProvideAndInject" class="link" >ProvideAndInject</RouterLink>
    <RouterLink v-for="item in arr" :to="`/User/${item}`" class="link" :class="{'cass':this.location===11}" >User {{ item }}</RouterLink>
    <RouterLink to="/RouteFam" class="link" :class="{'cass':this.location===11}" >RouteFam {{ item }}</RouterLink>

</div>
<span> {{ location }}</span>
<span> {{ locationInfo }}</span>

</template>

<style scoped lang="scss">
.headerSowh{
    width: 100%;
    // height: 15vmin;
    font-size: 30px;
    background-color: #393646;
    margin-bottom: 0px;
    flex-wrap: wrap;
    position:fixed;
    top: 0px;
    
}
a{
    color: aqua;
}
// .cass{
//     color: red;
//     font-weight: bold;
// }
a.router-link-exact-active{
    color: white;
    font-weight: bold;
    background-color: #e42424;
    box-shadow: 3px 5px 1px black;
}

</style>