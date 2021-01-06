<template>
  <div>
    <h2>reactive创建响应式对象</h2>
    {{state.count}}
    <button @click="change">修改值</button>
  </div>
</template>
<script>
/**
 * ref 使用与单值，
 * reactive 使用与应用类型， 例如object, array等
 */
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  setup() {
    const state = reactive({count: 0})
    const change = () => {
      console.log(state, '---')
      state.count += 1;
    }
    return {
      state,
      change
    }
  }
})
</script>