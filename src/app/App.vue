<template>
  <div class="container">
    <header-widget></header-widget>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderWidget from "@/widgets/HeaderWidget/components/HeaderWidget";
import { useStore } from 'vuex'
import { onBeforeUnmount, watch } from 'vue';

export default {
  components: { HeaderWidget },
  setup() {
      const store = useStore()

      const saveBasket = () => {
        window.localStorage.setItem('basket', JSON.stringify(store.state.basket))
      }
      
      watch(store.state.basket, () => saveBasket())
      

      
    }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
