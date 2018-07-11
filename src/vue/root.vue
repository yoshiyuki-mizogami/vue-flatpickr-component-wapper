<template>
  <div class="main">
    <fl v-model="date" @change="changeHook" :config="config"></fl>
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
  },
  methods:{
    changeHook(newValue){
      console.log(newValue)
    }
  }
}
</script>
