<template>
  <template-wrapper title="Data provider" :description="text">
    <!-- IMPORTAÇÃO DO COMPONENTE PROVEDOR E CHAMA O SLOT DEFAULT CRIADO DESESTRUTURANDO OS DADOS RECEBIDOS -->
    <provider-component :url="url" v-slot="{ res: response, loading }" ref="provider">
      <place-card :info=" response" :loading="loading" />
    </provider-component>
  </template-wrapper>

  <button @click="makeFetch">
   <span>
     Buscar outra localização
   </span>
  </button>
</template>

<script>
import {ref} from 'vue'
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
    const provider = ref(null)
    const url = "https://random-data-api.com/api/address/random_address";
    const text = `Estudo sobre data provider component. Consumo de api para pegar um lugar diferente, utilizando o concecito de data provider pattern.`;

    const makeFetch = () =>{
      console.log(provider.value)
    }
    return { text, url, provider, makeFetch };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/utilities';

button{
  width: 100%;
  padding: $s1;
  border-radius: 10px;
  border: none;
  background: $blue-2;
  cursor: pointer;
  transition: .2s ease-in-out;

  span{
    color: white;
    font-size: 1.2em;
    font-weight: 500;
  }

  &:hover{
    background: $blue-1;
  }
}

</style>
