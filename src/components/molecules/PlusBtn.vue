<script setup>
const emit = defineEmits(["clicked"]);

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
</script>

<template>
  <div class="btn" :style="buttonSize()" @click="emit('clicked')">
    <span> + </span>
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
  span {
    font-size: 1.1rem;
    font-weight: 600;
  }
}
</style>
