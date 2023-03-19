<template>
  <div class="list-item">
    <div class="list-item__header" @click="toggleShow()">
      <span> {{ show ? "-" : "+" }} {{ props.info.name }} </span>
    </div>
    <div v-if="show" class="list-item__body">
      <ul>
        <li
          v-for="(item, i) in props.info.rows"
          :key="i"
          draggable="true"
          @dragstart="startDrag($event, item)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const emits = defineEmits(["startDraggin"]);
const props = defineProps({
  info: { type: Object, default: null },
});

const show = ref(false);

const toggleShow = () => (show.value = !show.value);

const startDrag = (event, item) => {
  const id = (Math.random() + 1).toString(36).substring(7);
  item.id = id;
  emits("startDraggin", event, item);
};
</script>

<style lang="scss" scoped>
.list-item {
  padding: 0.6rem 0;
  &__header {
    cursor: pointer;
  }

  &__body {
    margin: 1rem 0 0 1rem;
    ul {
      padding: 0;

      li {
        list-style: none;
        cursor: pointer;
      }
    }
  }
}
</style>
