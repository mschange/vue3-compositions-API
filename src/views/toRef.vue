<template>
  <div>
    <h2>toRef</h2>
    {{state2}}
    <button @click="change">修改值toRef</button>
    {{state1}}
    <button @click="change1">修改值ref</button>
  </div>
</template>
<script>
/**
 * ref 是对传入数据的拷贝；toRef 是对传入数据的引用
   ref 的值改变会更新视图；toRef 的值改变不会更新视图
 */
import { defineComponent, toRef, ref } from 'vue'
export default defineComponent({
  setup() {
    const obj = {count: 3}
    const state2 = toRef(obj, 'count')
    const state1 = ref(obj.count)
    const change = () => {
      console.log(state2, '---')
      state2.value += 1;
    }
    const change1 = () => {
      state1.value += 1;
    }
    return {
      state2,
      change,
      state1,
      change1
    }
  }
})
</script>