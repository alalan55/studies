<template>
  <templateWrapper title="Data provider" :description="text"> </templateWrapper>
</template>

<script>
import templateWrapper from "@/components/bosons/templateWrapper.vue";
export default {
  components: {
    templateWrapper,
  },
  setup() {
    const text = `Estudo sobre data provider component. Consumo de api para pegar um lugar diferente, utilizando o concecito de data provider pattern.`;
    return { text };
  },
};
</script>

<style lang="scss" scoped></style>
