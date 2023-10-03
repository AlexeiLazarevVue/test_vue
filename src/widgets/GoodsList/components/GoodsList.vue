<template>
  <div class="goods-list" v-if="products.length > 0">
    <goods v-for="item in products" :key="item.id" :product="item"></goods>
  </div>
  <div class="error" v-else>
    <h2>Товаров с выбранными характеристиками пока нет :( Но наш каталог постоянно расширяется, поэтому, возможно, подобный товар появится в ближайшем будущем :)</h2>
  </div>
</template>

<script>
import Goods from './Goods';


export default {
  components: { Goods },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
};
</script>

<style lang="less" scoped>
.goods-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  width: 100%;
  padding: 20px;
}
.error {
  width: 100%;
  text-align: center;
}
</style>