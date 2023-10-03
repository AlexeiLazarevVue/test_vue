<template>
  <div class="good">
    <img class="good__image" :src="product.image" alt="" />
    <h2>{{ product.title }}</h2>
    <h3>
      {{ product.price.value }} <span>{{ product.price.currency }}</span>
    </h3>
    <button
      class="good__parameters-button"
      v-for="color in allColors"
      :disabled="!availableColors.has(color)"
      @click="
        () => {
          if (selectedColor !== color) {
            availableSizes = fillAvailableSizes(
              product.offers.filter((offer) => offer.color === color)
            );
            selectedColor = color;
          } else {
            availableSizes = fillAvailableSizes(product.offers);
            selectedColor = null;
          }
        }
      "
      :key="color"
      :style="
        selectedColor === color ? 'background: #3d3d3d; color: #fff;' : ''
      "
    >
      {{ color }}
    </button>
    <br />
    <button
      class="good__parameters-button"
      v-for="size in allSizes"
      :disabled="!availableSizes.has(size)"
      @click="
        () => {
          if (selectedSize !== size) {
            availableColors = fillAvailableColors(
              product.offers.filter((offer) => offer.sizes === size)
            );
            selectedSize = size;
          } else {
            availableColors = fillAvailableColors(product.offers);
            selectedSize = null;
          }
        }
      "
      :key="size"
      :style="selectedSize === size ? 'background: #3d3d3d; color: #fff;' : ''"
    >
      {{ size }}
    </button>
    <br />
    <button
      class="good__basket-button"
      @click="
        () => {
          if (
            (selectedColor !== null || !allColors) &&
            (selectedSize !== null || !allSizes)
          ) {
            this.$store.commit('addToBasket', productItem);
          }
        }
      "
    >
      {{
        this.$store.state.basket.find((item) => item.id === productItem.id)
          ? `В корзине ${
              this.$store.state.basket.filter(
                (item) => item.id === productItem.id
              ).length
            }`
          : "В корзину"
      }}
    </button>
  </div>
</template>

<script>
import { getCombinations } from "../api/getCombinations.js";

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const {
      fillAvailableColors,
      fillAvailableSizes,
      availableColors,
      availableSizes,
      allColors,
      allSizes,
      selectedColor,
      selectedSize,
    } = getCombinations(props.product.offers);

    const productItem = {
      ...props.product,
      color: selectedColor.value,
      size: selectedSize.value,
    };

    return {
      fillAvailableColors,
      fillAvailableSizes,
      availableColors,
      availableSizes,
      allColors,
      allSizes,
      selectedColor,
      selectedSize,
      productItem,
    };
  },
};
</script>

<style lang="less" scoped>
.good {
  width: 300px;
  &__image {
    width: 100%;
  }
  &__parameters-button,
  &__basket-button {
    padding: 5px 10px;
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