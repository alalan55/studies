<script setup>
import { ref } from "vue";
import Circle from "./components/circle.vue";
import Diamond from "./components/diamond.vue";
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

const verifyLastDiamondPosition = (type) => {
  let POS_Y = 0;
  const PEXELS = 70
  if (type == 2) {
    let LAST = null;
    // VERIFICAR SE JÁ EXISTE NO ARRAY ALGUM CARA QUE É DO TIPO 2
    const SOME_DIAMOND = nodes.value.some((data) => data.nodeType == 2);
    // SE NÃO EXISTIR, O VALOR INICIAL VAI SER IGUAL A 50
    if (!SOME_DIAMOND) POS_Y = PEXELS;
    // SE EXISTIR, O VALOR VAI SER O VALOR DO ULTIMO CARA ENCONTRADO + 50
    if (SOME_DIAMOND) {
      for (let i = nodes.value.length - 1; i >= 0; i--) {
        if (nodes.value[i].nodeType == type) {
          LAST = nodes.value[i];
          break;
        }
      }

      POS_Y = LAST.y + PEXELS;
    }
  }

  return POS_Y;
};

const createNode = async (node, typeNode) => {
  const POS_Y = await verifyLastDiamondPosition(typeNode.type);

  const newNode = {
    id: nodes.value.length + 1,
    nextId: null,
    type: "node",
    nodeType: typeNode.type,
    x: 0,
    y: POS_Y,
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
    <!-- <pre>
            {{ nodes }}
        </pre
    > -->

    <div class="flow__list">
      <div v-for="(item, i) in nodes" :key="i" class="flow__list__item">
        <template v-if="item.nodeType == 0">
          <Rect
            :info="item"
            :isLastChild="verifyIsLastChild(item.id)"
            @createNode="createNode"
          />
        </template>
        <template v-if="item.nodeType == 1">
          <Circle
            :info="item"
            :isLastChild="verifyIsLastChild(item.id)"
            @createNode="createNode"
          />
        </template>
        <template v-if="item.nodeType == 2">
          <Diamond
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
