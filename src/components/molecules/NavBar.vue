<template>
  <nav class="nav">
    <div class="nav__logo">
        <span>
            Studies
        </span>
    </div>
    <div class="nav__icon">
        <figure>
            <img src="/img/menu.svg" alt="Menu">
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

nav {
  border: 1px solid;
  width: 100%;
  height: $navHeight;
  display: flex;
  align-items: center;
  padding: 0 $s1;
  justify-content: space-between;
}
</style>
