import { computed, ref } from "vue"

export const getCombinations = (offers) => {
  const selectedColor = ref(null)
  const selectedSize = ref(null)

  const allColors = ref(new Set())
  const allSizes = ref(new Set())

  const availableColors = ref(new Set())
  const availableSizes = ref(new Set())

  const fillAvailableColors = (offers) => {
    if (offers) {
      const colors = []
      offers.forEach(offer => {
        if (offer.available) {
          colors.push(offer.color)
        }
      });
      return new Set(colors)
    }
  }
  allColors.value = fillAvailableColors(offers)
  availableColors.value = fillAvailableColors(offers)

  const fillAvailableSizes = (offers) => {
    if (offers) {
      const sizes = []
      offers.forEach(offer => {
        if (offer.available) {
          sizes.push(offer.sizes)
        }
      });
      return new Set(sizes)
    }
  }
  allSizes.value = fillAvailableSizes(offers)
  availableSizes.value = fillAvailableSizes(offers)

  const combinations = computed(() => {
    const list = []

    // productsJson.forEach(item => {
    //   const sameColorItem = item.offers?.find(offer => offer.color === selectedColor.value)
    //   if (selectedColor.value === null || sameColorItem) {
    //     const sameSizeItem = item.offers?.find(offer => offer.sizes === selectedSize.value)
    //     if (selectedSize.value === null || sameSizeItem) {
    //       list.push(item)
    //     }
    //   }

    // });

    return list
  })

  return {
    combinations,
    selectedColor,
    selectedSize,
    availableColors,
    availableSizes,
    fillAvailableColors,
    fillAvailableSizes,
    allColors,
    allSizes
  }
}