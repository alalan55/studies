<script setup>
import { ref } from "vue";
import Rect from "./components/rect.vue";

const nodes = ref([
  {
    id: 1,
    nextId: null,
    type: "node",
    nodeType: 0,
    x: 0,
    y: 0,
    text: "",
    conections: [],
  },
]);

const verifyIsLastChild = (id) => {
  const LAST_ELEMENT = nodes.value[nodes.value.length - 1];
  return LAST_ELEMENT.id == id;
};

const createNode = (node) => {
  const newNode = {
    id: nodes.value.length + 1,
    nextId: null,
    type: "node",
    nodeType: 0,
    x: 0,
    y: 0,
    text: "",
    conections: [],
  };

  const FOUND_REQUESTED_NODE = nodes.value.findIndex((no) => node.id == node.id);
  nodes.value[FOUND_REQUESTED_NODE].nextId = newNode.id;

  nodes.value.push(newNode);
};
</script>

<template>
  <div class="flow">
    <div class="flow__title">
      <h1>Página de fluxograma</h1>
    </div>

    <div class="flow__list">
      <div v-for="(item, i) in nodes" :key="i" class="flow__list__item">
        <template v-if="item.nodeType == 0">
          <Rect
            :info="item"
            :isLastChild="verifyIsLastChild(item.id)"
            @createNode="createNode"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.flow {
  height: calc(100vh - $navHeight - 40px);
  display: flex;
  flex-direction: column;

  &__title {
    padding: $s05;
  }

  &__list {
    height: 100%;
    display: flex;
    align-items: center;
    padding: $s1;
    border-radius: 10px;
    background: $blue-4;
    gap: 0.5rem;
  }
}
</style>
