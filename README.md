# fl-vue-component-wapper
added events  to vue-flatpikr-component  
move date when mouse wheel  and set today when clicked the form  
only support date input (The function will be broken if time is enabled)
# install
```sh
npm i git+https://github.com/yoshiyuki-mizogami/vue-flatpickr-component-wapper
```

# Demo build
```sh
cd node_modules/fl-vue-wrapper
npm i
npm start
```

# How to use on component system (.e.g webpack)
```vue
<template>
  <div>
    <fl-vue-wrapper v-model="date"/>
  </div
</template>
<script>
  import FlVueWrapper from 'fl-vue-wrapper'
  exports default {
    data(){
      return {
        date:new Date()
      }
    },
    components:{
      FlVueWrapper
    }
  }
</script>
```

# How to use as standalone
include script then global variable `FlVueWrapper` is set
```html
  <script src="vue.js"></script>
  <script src="dist/fl-vue-wapper.js"></script>
  <!-- omit -->
  <div id="app">
    <fl-vue-wapper v-model="date"></fl-vue-wapper>
  </div>
```
```js
  new Vue({
    el:'#app',
    data:{
      date:new Date()
    },
    components:{
      FlVueWrapper
    }
  }
```

# Config object through to original component
See also [Flatpickr options](https://flatpickr.js.org/options/)
```vue
<template>
  <div>
    <fl-vue-wrapper v-model="date" :config="config"/>
  </div
</template>
<script>
  import FlVueWrapper from 'fl-vue-wrapper'
  import lang from 'flatpickr/dist/l10n/ja'
  exports default {
    data(){
      return {
        date:new Date(),
        config:{
          locale:lang.ja
        }
      }
    },
    components:{
      FlVueWrapper
    }
  }
</script>
```

## on change hook
```vue
<template>
  <div>
    <fl-vue-wrapper v-model="date" @change="hook"/>
  </div
</template>
<script>
  import FlVueWrapper from 'fl-vue-wrapper'
  exports default {
    data(){
      return {
        date:new Date()
      }
    },
    components:{
      FlVueWrapper
    },
    methods:{
      hook(newValue){
        console.log(newValue)
      }
    }
  }
</script>
## Config allowInput
```vue
<template>
  <div>
    <fl-vue-wrapper v-model="date" :config="{allowInput:true}"/>
  </div
</template>
<script>
  import FlVueWrapper from 'fl-vue-wrapper'
  exports default {
    data(){
      return {
        date:new Date()
      }
    },
    components:{
      FlVueWrapper
    }
  }
</script>
```