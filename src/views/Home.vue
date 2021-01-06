<template>
  <div class="home">
    <p>setup方法</p>
    {{number}}
    <button @click="add">添加</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    
  },
  setup(props, context) {
    console.log(props, context)
    const number = ref(0)

    const add = () => {
      number.value += 1;
    }
    return {
      number,
      add
    }
  }
});
</script>
