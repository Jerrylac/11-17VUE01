<script>
import { mapState,mapActions } from 'pinia';
import counter from '../stores/counter';
export default{
  data(){

  },
  computed:{
    ...mapActions(counter,["getLocation"])
    }
}
</script>

<template>
    
</template>

<style scoped lang="scss">


</style>