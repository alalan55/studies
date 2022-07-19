<template>
  <nav class="nav">
    <div class="nav__logo">
      <span> Studies </span>
    </div>
    <div class="nav__icon">
      <figure>
        <img src="/img/menu.svg" alt="Menu" />
      </figure>
    </div>
  </nav>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utilities";

.nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  height: $navHeight;
  display: flex;
  align-items: center;
  padding: 0 $s1;
  justify-content: space-between;
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.09);
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.09);
  background: white;

  &__logo {
    span {
      font-weight: normal;
      font-size: 1.1em;
    }
  }
}
</style>
