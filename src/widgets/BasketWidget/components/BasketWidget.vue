<template>
  <div class="basket">
    <div class="basket-item" v-for="item in basket" :key="item.id">
      <img class="basket-item__image" :src="item.image" alt="" />
      <h2>{{ item.title }}</h2>
      <h3>
        {{ item.price.value }} <span>{{ item.price.currency }}</span>
      </h3>
      <button @click="this.$store.commit('deleteFromBasket', item.basketId)">Удалить</button>
    </div>
  </div>
  <div class="buy-panel">
    <button class="buy-panel__button" @click="console.log(basket)">
      Купить
    </button>
  </div>
</template>

<script>
import { mapState, useStore } from "vuex";

export default {
  computed: {
    ...mapState({
      basket: "basket",
    }),
  },
};
</script>

<style lang="less" scoped>
.basket {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  width: 100%;
  padding: 20px;
  .basket-item {
    width: 300px;
    &__image {
      width: 100%;
    }
  }
}
.buy-panel {
  display: flex;
  width: 100%;
  justify-content: center;
  &__button {
    padding: 20px 35px;
    font-size: 25px;
    margin-bottom: 10px;
    border: 2px solid #3d3d3d;
    background: none;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      background: #3d3d3d;
      color: #fff;
    }
  }
}
</style>