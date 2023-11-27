<script>
import { mapState,mapActions } from 'pinia';
import counter from '../stores/counter';
export default{
  data(){

  },
  computed:{
    ...mapActions(counter,["getLocation","setLocation","getf"])
    },
}

</script>

<template>
  <main>
    <h1>123</h1>


  </main>
</template>

<style scoped lang="scss"></style>
