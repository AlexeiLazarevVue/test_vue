import { createStore } from "vuex"

export default createStore({
  state: {
    basket: JSON.parse(window.localStorage.getItem('basket')) || []
  },
  mutations: {
    addToBasket: (state, item) => {
      if(item.stock - state.basket.filter(BasketItem => BasketItem.id === item.id).length >= 0) {
        const obj = {
          ...item,
          basketId: state.basket.length
        }
        state.basket.push(obj)
      }
    },
    deleteFromBasket: (state, basketId) => {
      state.basket = state.basket.filter(item => item.basketId !== basketId)
    }
  }
})