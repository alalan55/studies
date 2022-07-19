<template>
  <div class="card">
    <div class="card__loading" v-if="loading">
      <div class="card__loading__message">
        <span> ... Buscando dados </span>
      </div>
    </div>

    <div class="card__wrapper" v-else>
      <ul>
        <li class="item">
          <span> <strong>Estado:</strong> {{ info.state }} </span>
        </li>
        <li class="item">
          <span> <strong>Pais:</strong> {{ info.country }} </span>
        </li>
        <li class="item">
          <span> <strong>Cidade:</strong> {{ info.city }} </span>
        </li>
        <li class="item">
          <span> <strong>Rua:</strong> {{ info.street_address }} </span>
        </li>
        <li class="item">
          <span>
            <strong>Endereço completo:</strong> {{ info.full_address }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: { type: Object },
    loading: { type: Boolean, default: false },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utilities";
.card {
  &__loading {
    border-radius: 10px;
    text-align: center;
    background: $blue-4;
    &__message {
      padding: $s1;
      span {
        font-weight: 600;
        color: $blue-0;
        font-size: 1.1em;
      }
    }
  }
  &__wrapper {
    background: $blue-4;
    padding: $s1;
    margin: $s2 0;
    border-radius: 10px;

    ul {
      padding: 0;
      li {
        list-style: none;
        margin: $s2 0;

        span {
          strong {
            color: $blue-0;
            font-size: 1.1em;
          }
        }
      }
    }
  }
}
</style>
