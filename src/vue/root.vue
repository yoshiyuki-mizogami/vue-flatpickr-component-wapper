<template>
  <div class="main">
    <fl v-model="date"></fl>
  </div>
</template>
<style>
</style>
<script>
import moment from 'moment'
import fl from './fl-wrapper.vue'
export default {
  data(){
    return {
      date:null
    }
  },
  components:{
    fl
  }
}
</script>
