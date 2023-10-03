<template>
  <div class="filter-menu__wrapper">
    <div class="filter-menu">
      <h2>{{ brands.title }}</h2>
      <div
        v-for="brand in brands.value.sort((a, b) => a.sort - b.sort)"
        :key="brand.id"
        class="filter"
      >
        <button
          class="filter__button"
          :style="
            selectedBrand === brand.id
              ? 'background: #3d3d3d; color: #fff;'
              : ''
          "
          @click="
            () => (selectedBrand = selectedBrand !== brand.id ? brand.id : null)
          "
        >
          {{ brand.title }}
        </button>
      </div>
      <h2>{{ colors.title }}</h2>
      <div
        v-for="color in colors.value.sort((a, b) => a.sort - b.sort)"
        :key="color.id"
        class="filter"
      >
        <button
          class="filter__button"
          :style="
            selectedColor === color.id
              ? 'background: #3d3d3d; color: #fff;'
              : ''
          "
          @click="
            () => (selectedColor = selectedColor !== color.id ? color.id : null)
          "
        >
          {{ color.title }}
        </button>
      </div>
      <h2>{{ sizes.title }}</h2>
      <div
        v-for="size in sizes.value.sort((a, b) => a.sort - b.sort)"
        :key="size.id"
        class="filter"
      >
        <button
          class="filter__button"
          :style="
            selectedSize === size.id ? 'background: #3d3d3d; color: #fff;' : ''
          "
          @click="
            () => (selectedSize = selectedSize !== size.id ? size.id : null)
          "
        >
          {{ size.title }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getFilteredProducts } from "../api/filterProducts";
import filterJson from "../api/filter.json";
import { onMounted, watch } from "vue";

const emit = defineEmits(["updatePostsList"]);

const { products, selectedColor, selectedSize, selectedBrand } =
  getFilteredProducts();

const brands = filterJson[0].brands;
const colors = filterJson[1].color;
const sizes = filterJson[2].size;

onMounted(() => emit("updatePostsList", products.value));
watch([selectedBrand, selectedColor, selectedSize], () =>
  emit("updatePostsList", products.value)
);
</script>

<style lang="less" scoped>
.filter-menu {
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 250px;
  padding: 15px 10px;
  gap: 10px;
  border-right: 1px solid #a3a3a3;
  text-align: center;
  &__wrapper {
    height: 100vh;
    min-width: 250px;
  }
  .filter__button {
    padding: 10px 20px;
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