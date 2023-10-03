<template>
  <div class="main-page">
    <filter-menu-widget @updatePostsList="updatePostsList"></filter-menu-widget>
    <goods-list :products="products"></goods-list>
  </div>
</template>

<script>
import GoodsList from "@/widgets/GoodsList/components/GoodsList.vue";
import FilterMenuWidget from "@/widgets/FilterMenuWidget";
import { ref } from "vue";

export default {
  components: { GoodsList, FilterMenuWidget },

  setup() {
    const products = ref([]);

    const updatePostsList = (updatedProducts) => {
      products.value = updatedProducts;
    };

    return {
       products ,
       updatePostsList
      };
  },
};
</script>

<style lang="less" scoped>
.main-page {
  display: flex;
}
</style>