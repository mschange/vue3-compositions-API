<template>
  <div>
    <h2>watch：监听</h2>
    {{count}} --- {{state.count2}}
  </div>
</template>
<script>
import { defineComponent, ref, watch, reactive } from "vue";

export default defineComponent({
  name: "DestructReactiveObject",
  setup() {
    const count = ref(0);
    const state = reactive({ count2: 10, name: 'zs' })
    let timer = null,
        timer2 = null;
    watch(count, (newVal, oldVal) => {
      console.log(newVal, oldVal)
      if (newVal === 10) clearInterval(timer)
    })
    // 1秒后将state.count的值+1
    timer = setInterval(() => {
      count.value ++
    }, 1000)
    
    watch(
      [() => state.count2,() => state.name],
      ([newCount, newName], [oldvCount, oldvName]) => {
       console.log(newCount, oldvCount, '-----', newName, oldvName)
       if (newCount === 0) clearInterval(timer2)
      }
    )
    timer2 = setInterval(() => {
      // console.log(state, 'count2')
      state.count2 --,
      state.name = state.count2 + 's'
    }, 1000)
    return { 
      count,
      state
    };
  },
})
</script>