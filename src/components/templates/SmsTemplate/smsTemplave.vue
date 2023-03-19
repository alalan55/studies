<script setup>
import { ref } from "vue";

const msg = ref("");
</script>

<template>
  <div class="wrapper">
    <div class="wrapper__left">
      <div class="wrapper__left__text">
        <span> Digite a mensagem</span>
        <div class="inpt">
          <input v-model="msg" type="text" />
        </div>
      </div>
    </div>
    <div class="wrapper__right">
      <figure>
        <img src="/img/phone-sms-2.png" alt="phone" />

        <span v-if="msg" class="box-msg">
          {{ msg }}

        </span>
      </figure>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-height: 70vh;
  gap: 1rem;
  & > div {
    flex: 1 1 500px;
    padding: 1rem;
    height: 100%;
  }

  &__left {
    &__text {
      span {
        font-size: 1.1rem;
        font-weight: 700;
      }
      .inpt {
        margin-top: 0.5rem;
        input {
          width: 100%;
          height: 100%;
          padding: 0.5rem 0.5rem;
          border-radius: 10px;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
  &__right {
    display: flex;
    align-items: center;
    justify-content: center;
    figure {
      width: 500px;
      height: 500px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .box-msg {
        position: absolute;
        display: block;
        // height: 30px;
        top: 120px;
        left: 160px;
        max-width: 170px;
        width: 100%;
        max-height: 280px;
        border-radius: 20px;
        background: #151925;
        color: white;
        font-weight: 500;
        padding: .8rem 0.7rem;
        font-size: 0.9rem;
        overflow-y: auto;
        word-break:break-all;

        &::-webkit-scrollbar {
          width: 5px;
        }

        /* Track */
        &::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
          background: #888;
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      }
    }
  }
}
</style>
