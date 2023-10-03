<template>
  <div class="header__wrapper">
    <header>
      <nav>
        <router-link to="/">Каталог</router-link>
        <router-link to="/basket"
          >Корзина {{ this.$store.state.basket.length }}</router-link>
      </nav>
    </header>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
.header__wrapper {
  min-height: 58px;
}
header {
  position: fixed;
  width: 100vw;
  background: #3d3d3d;
  z-index: 19;
  nav {
    display: flex;
    width: 100%;
    a {
      padding: 20px 30px;
      text-decoration: none;
      color: #fff;
      transition: 0.3s;
      &:hover {
        background: #222222;
      }
    }
  }
}
</style>