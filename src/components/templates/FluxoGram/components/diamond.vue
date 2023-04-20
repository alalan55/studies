<script setup>
import PlusBtn from "../../../molecules/PlusBtn.vue";
const emit = defineEmits(["createNode"]);
const props = defineProps({
  info: {
    type: Object,
    required: true,
    default: null,
  },
  isLastChild: {
    type: Boolean,
    default: true,
  },
});

const createNode = (typeNode) => emit("createNode", props.info, typeNode);
</script>
<script>
export default {
  name: "Diamond",
};
</script>
<template>
  <div class="diamond">
    <div class="diamond__content">
      <div class="diamond__content__no-rotate">
        <span> {{ props.info.type }} - {{ props.info.id }}</span>
      </div>
    </div>
    <div class="diamond--actions">
      <div v-if="isLastChild" class="plus">
        <div class="line-plus"></div>
        <PlusBtn @clicked="createNode" />
        <div class="line-plus"></div>
      </div>
      <div v-else class="line"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.diamond {
  display: flex;
  align-items: center;
  gap: $s1;
  //   margin: 0 1rem;
  &__content {
    background: $blue-2;
    border-radius: 10px;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    transform: rotate(45deg);
    span {
      font-weight: 700;
      font-size: 1.3rem;
    }

    &__no-rotate {
      transform: rotate((-45deg));
    }
  }

  &--actions {
    .line {
      background: $blue-1;
      width: 85px;
      padding: 2px;
      border-radius: 5px;
    }
    .plus {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      .line-plus {
        background: $blue-1;
        width: 30px;
        padding: 2px;
        border-radius: 5px;
      }
    }
  }
}
</style>
