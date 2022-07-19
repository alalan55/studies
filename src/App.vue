<script setup>
import { RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "@/components/molecules/NavBar.vue";
</script>

<template>
  <div class="wrapper">
    <NavBar />
    <div class="wrapper__content">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/utilities";
.wrapper {
  &__content {
    position: relative;
    margin-top: $navHeight;
    padding: $s1;
    background: $blue-5;
    min-height: calc(100vh - $navHeight);
  }
}
</style>
