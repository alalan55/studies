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
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.01);

  &__logo {
    span {
      font-weight: normal;
      font-size: 1.1em;
    }
  }
  &__icon {
    figure {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      img {
        width: 90%;
        height: 90%;
        object-fit: contain;
      }
    }
  }
}
</style>
