<script>
import { ref } from "vue";
export default {
  props: {
    url: { type: String, required: true, default: "" },
  },
  setup(props, ctx) {
    let res = ref("");
    let loading = ref(true);

    const makeFetch = () => {
      console.log("hello");
      fetch(props.url)
        .then((response) => response.json())
        .then((response) => {
          res.value = response;
          loading.value = false;
        });
    };
    makeFetch();

    return () => ctx.slots.default({ res: res.value, loading: loading.value });
  },
};
</script>
