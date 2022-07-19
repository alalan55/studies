<template>
  <template-wrapper title="Data provider" :description="text">
    <!-- IMPORTAÇÃO DO COMPONENTE PROVEDOR E CHAMA O SLOT DEFAULT CRIADO DESESTRUTURANDO OS DADOS RECEBIDOS -->
    <provider-component :url="url" v-slot="{ res: response, loading }">
      <place-card :info="response" :loading="loading" />
    </provider-component>
  </template-wrapper>
</template>

<script>
import templateWrapper from "@/components/bosons/templateWrapper.vue";
import providerComponent from "./components/providerComponent.vue";
import placeCard from "./components/placeCard.vue";
export default {
  components: {
    templateWrapper,
    providerComponent,
    placeCard,
  },
  setup() {
    const url = "https://random-data-api.com/api/address/random_address";
    const text = `Estudo sobre data provider component. Consumo de api para pegar um lugar diferente, utilizando o concecito de data provider pattern.`;
    return { text, url };
  },
};
</script>

<style lang="scss" scoped></style>
