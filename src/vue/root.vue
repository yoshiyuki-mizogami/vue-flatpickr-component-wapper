<template>
  <div class="main">
    <fl v-model="date" :config="config"></fl>
  </div>
</template>
<style>
</style>
<script>
import fl from '../../fl-vue-wrapper.vue'
import ja from 'flatpickr/dist/l10n/ja'
export default {
  data(){
    return {
      date:null,
      config:{
        locale:ja.ja
      }
    }
  },
  components:{
    fl
  }
}
</script>
