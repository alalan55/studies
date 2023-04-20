<script setup>
import PlusBtn from "../../../molecules/PlusBtn.vue";
const emit = defineEmits(['createNode'])
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
</script>
<script>
export default {
  name: "Rect",
};
</script>
<template>
  <div class="rect">
    <div class="rect__content">
      <span> {{ props.info.type }} - {{ props.info.id }}</span>
    </div>
    <div class="rect--actions">
      <div v-if="isLastChild" class="plus">
        <div class="line-plus"></div>
        <PlusBtn  @click="emit('createNode', props.info)"/>
        <div class="line-plus"></div>
      </div>
      <div v-else class="line"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.rect {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &__content {
    background: $blue-2;
    border-radius: 10px;
    width: 150px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    span {
      font-weight: 700;
      font-size: 1.3rem;
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
