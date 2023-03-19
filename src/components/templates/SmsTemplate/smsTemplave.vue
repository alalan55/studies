<script setup></script>

<template>
  <div class="wrapper">
    <div class="wrapper__left">
      <div class="wrapper__left__text">
        <span> Digite a mensagem</span>
        <div class="inpt">
          <input type="text" />
        </div>
      </div>
    </div>
    <div class="wrapper__right"></div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 70vh;
  gap: 1rem;
  & > div {
    flex: 1 1 500px;
    padding: 1rem;
    height: 100%;
  }

  &__left {
    &__text{
        span{
            font-size: 1.1rem;
            font-weight: 700;
        }
        .inpt{
            margin-top: .5rem;
            input{
                width: 100%;
                height: 100%;
                padding: .5rem .5rem;
                border-radius: 10px;

                &:focus{
                    outline: none;
                }
            }
        }
    }
  }
}
</style>
