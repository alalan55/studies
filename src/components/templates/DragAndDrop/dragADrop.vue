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
const droped = ref([]);
const startDrag = (event, item) => {
    console.log(event, item);
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("itemID", item.id);
};
const onDrop = (event) => {
  const itemID = event.dataTransfer.getData("itemID");
  const item = columns.value.find((item) => item.rows.find((row) => row.id == itemID));
  droped.value.push(item);
  //   console.log(itemID, item);
  //   const item = arrayData.value.find((item) => item.id == itemID);
  //   item.state = state;
};


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
            @startDraggin="startDrag"
          />
        </div>
      </div>
      <div
        class="content__right"
        @drop="onDrop($event)"
        @dragenter.prevent
        @dragover.prevent
      >
        <div class="content__right__list">
          <div v-for="(item, i) in droped" :key="i" draggable="true"  class="content__right__list__item"   @dragstart="startDrag($event, item)">
            <img src="/img/drag-drop.svg" alt="Arrastar e soltar" />
            <input v-model="item.name" readonly type="text" />
            <span> = </span>
            <input type="text" />
            <!-- {{ item.name }} -->
          </div>

          <!-- VERIFICAR, POIS ELE ESTÁ CLONANDO O ID QUANDO EU ARRASTO O MESMO ELEMENTO, ESSE ITEM ACIMA, TAMBÉM VAI TER QUE SER DRAGGLABLE, PRA CONSEGUIRMOS ARRASTAR ELE-->
        </div>
      </div>
    </div>

    <pre>{{ droped }}</pre>
  </templateWrapper>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.content {
  display: flex;
  & > div {
    flex: 1 1 500px;
    // border: 1px solid;
  }

  &__left {
    .list {
      &__item {
        // border-bottom: 1px solid;
      }
    }
  }
  &__right {
    background: rgb(177, 177, 177);
    padding: 0.5rem;
    &__list {
      &__item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
        input {
          width: 100%;
        }

        img {
          width: 23px;
          height: 23px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
