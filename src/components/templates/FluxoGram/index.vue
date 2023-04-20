<script setup>
import { ref } from "vue";
import Rect from "./components/rect.vue";
const nodes = ref([
  {
    id: 1,
    tipo: "node",
    x: 0,
    y: 0,
    texto: "",
    conexoes: [],
  },
]);
</script>

<template>
  <div class="flow">
    <h1>Página de fluxograma</h1>

    <div class="flow__list">
        hey
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.flow {
  height: calc(100vh - $navHeight - 40px);
  display: flex;
  flex-direction: column;

  &__list{
    border: 1px solid;
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
