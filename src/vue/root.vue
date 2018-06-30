<template>
  <div class="main">
    <fl v-model="date"></fl>
  </div>
</template>
<style>
</style>
<script>
import fl from '../../fl-vue-wrapper.vue'
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
