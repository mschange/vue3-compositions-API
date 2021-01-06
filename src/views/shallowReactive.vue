<template>
	<p>{{ state.a }}</p>
	<p>{{ state.first.b }}</p>
	<p>{{ state.first.second.c }}</p>
	<button @click="change1">改变1</button>
	<button @click="change2">改变2</button>
</template>
<script>
/**
 * 只为某个对象的第一层属性创建浅层的响应式代理，不会对“属性的属性”做深层次、递归地响应式代理，而只是保留原样
 * 第一层修改，视图会修改，
 * 第二层以及内层，视图不会修改
 */
import {shallowReactive, defineComponent} from 'vue'
export default defineComponent({
    setup() {
      const obj = {
        a: 1,
        first: {
          b: 2,
          second: {
            c: 3
          }
        }
      }

      const state = shallowReactive(obj)

      function change1() {
        state.a = 7
      }

      function change2() {
        state.first.b = 8
        state.first.second.c = 9
        console.log(state);
      }

      return {
        state,
        change1,
        change2
      }
    }
})
</script>