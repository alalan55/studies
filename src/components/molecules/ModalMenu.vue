<template>
  <div class="menu">
    <div class="menu__item" v-for="(route, index) in routesArr" :key="index">
      <div class="menu__item__title" @click="goTo(route.namePath), close()">
        <span>
          {{ route.title }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { navigation } from "@/utils/navigation";
export default {
  setup(props, { emit }) {
    const router = useRouter();
    const routesArr = ref([]);

    routesArr.value = navigation;

    const goTo = (path) => router.push({ name: path });
    const close = () => emit("close");

    return { routesArr, goTo, close };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utilities";

.menu {
  width: 100%;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.09);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  border: 3px solid rgba(255, 255, 255, 0.05);

  &__item {
    padding: $s05 $s1;
    cursor: pointer;

    &:hover {
      background: $blue-4;
      border-radius: 10px;
    }
    &__title {
      span {
        font-weight: 500;
      }
    }
  }
}
</style>
