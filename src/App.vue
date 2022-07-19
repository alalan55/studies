<script setup>
// import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "@/components/molecules/NavBar.vue";
</script>

<template>
  <div class="wrapper">
    <NavBar />

    <div class="wrapepr__content">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  border: 1px solid red;
}
</style>
