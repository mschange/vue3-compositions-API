<template>
  <div>
    <h2>watchEffect：监听</h2>
    {{state.count2}} --- {{state.name}}
  </div>
</template>
<script>
/**
 * watch跟watchEffect区别：
 * 不需要手动传入依赖
   每次初始化时会执行一次回调函数来自动获取依赖
   无法获取到原值，只能得到变化后的值
 * 
 */
import { defineComponent, watchEffect, reactive } from "vue";

export default defineComponent({
  name: "DestructReactiveObject",
  setup() {
    const state = reactive({ count2: 10, name: '10s' })
    let timer = null;

    watchEffect(() => {
      console.log(state.count2, state.name)
      if (state.count2 === 0) clearInterval(timer)
    })

    timer = setInterval(() => {
      state.count2 --;
      state.name = state.count2 + 's'
    }, 1000);
    return {
      state
    }
  },
})
</script>