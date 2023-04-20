<script setup>
import { ref } from "vue";

const emit = defineEmits(["clicked"]);

const showOptions = ref(false);

const props = defineProps({
  size: {
    type: String,
    default: "small",
  },
});

const buttonSize = () => {
  let buttonFormat = "";

  switch (props.size) {
    case "small":
      buttonFormat = "height: 25px; width: 25px";
      break;
  }

  return buttonFormat;
};

const types_nodes = [
  {
    name: "Bloco",
    type: 0,
  },
  {
    name: "Circulo",
    type: 1,
  },
  {
    name: "Diamante",
    type: 2,
  },
];
</script>

<template>
  <div class="btn" :style="buttonSize()" @click="showOptions = !showOptions">
    <span> + </span>

    <div v-if="showOptions" class="btn__types">
      <ul class="btn__types__list">
        <li v-for="item in types_nodes" :key="item.type" @click="emit('clicked', item)">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.btn {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: $blue-1;
  color: white;
  cursor: pointer;
  position: relative;
  span {
    font-size: 1.1rem;
    font-weight: 600;
  }

  &__types {
    position: absolute;
    background: $blue-1;
    padding: 0.5rem;
    border-radius: 10px;
    top: -120px;

    ul {
      padding: 0;
      li {
        list-style: none;
        &:not(:last-child) {
          margin-bottom: $s1;
        }
        &:hover {
          background: $blue-2;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
