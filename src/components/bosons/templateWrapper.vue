<template>
  <div class="wrapper">
    <div class="wrapper__title">
      <h1>{{ title }}</h1>
    </div>
    <div class="wrapper__description">
      <p>
        {{ description }}
      </p>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true, default: "Título" },
    description: { type: String, default: "" },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utilities";
.wrapper {
  &__title {
    h1 {
      font-weight: normal;
      color: $blue-0;
    }
  }
  &__description {
    margin: $s1 0;
    p {
      text-align: justify;
    }
  }
}
</style>
