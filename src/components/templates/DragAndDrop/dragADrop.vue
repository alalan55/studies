<script setup>
import { ref } from "vue";
// import draggable from "vuedraggable";
import listItem from "./components/listItem.vue";
import templateWrapper from "../../bosons/templateWrapper.vue";

const text = "Estudo sobre drag and drop, afim de implementação real de query builder";
const columns = ref([
  {
    name: "ID",
    rows: [
      {
        name: "Número",
        value: "",
      },
    ],
  },
  {
    name: "CPF",
    rows: [
      {
        name: "Número",
        value: "",
      },
    ],
  },
  {
    name: "CEP",
    rows: [
      {
        name: "Número",
        value: "",
      },
    ],
  },
  {
    name: "GENERO",
    rows: [
      {
        name: "Número",
        value: "",
      },
    ],
  },
  {
    name: "EMAIL",
    rows: [
      {
        name: "Número",
        value: "",
      },
    ],
  },
]);
</script>

<template>
  <templateWrapper title="Drag and Drop" :description="text">
    <div class="content">
      <div class="content__left">
        <div class="list">
          <listItem
            v-for="(item, i) in columns"
            :key="i"
            :info="item"
            class="list__item"
          />
        </div>
      </div>
      <div class="content__right"></div>
    </div>
  </templateWrapper>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.content {
  display: flex;
  & > div {
    flex: 1 1 500px;
    border: 1px solid;
  }

  &__left {
    .list {
      &__item {
        border-bottom: 1px solid;
      }
    }
  }
  &__right {
  }
}
</style>
