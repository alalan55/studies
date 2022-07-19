<template>
  <div class="wrapper">
    <div class="wrapper__title">
      <h1>{{ title }}</h1>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true, default: "Título" },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utilities";
.wrapper{
    &__title{
        h1{
            font-weight: normal;
            color: $blue-0;
        }
    }
}
</style>
