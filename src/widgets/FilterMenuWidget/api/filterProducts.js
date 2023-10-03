import { computed, ref, watch } from "vue"
import productsJson from './products.json'

export const getFilteredProducts = () => {
  const selectedColor = ref(null)
  const selectedSize = ref(null)
  const selectedBrand = ref(null)
  const products = computed(() => {
    const list = []

    productsJson.forEach(item => {
      if (selectedBrand.value === null || item.brand == selectedBrand.value) {
        const sameColorItem = item.offers?.find(offer => offer.color === selectedColor.value)
        if (selectedColor.value === null || sameColorItem) {
          const sameSizeItem = item.offers?.find(offer => offer.sizes === selectedSize.value)
          if (selectedSize.value === null || sameSizeItem) {
            list.push(item)
          }
        }
        
      }
    });

    return list
  })

  return {
    products,
    selectedColor,
    selectedSize,
    selectedBrand
  }
}