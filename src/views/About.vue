<template>
  <div class="about">
    <h1>vue3.0生命周期</h1>
    <p>{{msg}}</p>
    <button @click="change">修改</button>
  </div>
</template>
<script lang="ts">
import { defineComponent,onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, ref } from 'vue';

export default defineComponent({
   setup() {
      const msg = ref('改变前')

      const change = () => {
        msg.value = '改变后'
      }
      onBeforeMount(() => {
          // 在挂载前执行某些代码
        console.log('onBeforeMount')
      })

      onMounted(() => {
          // 在挂载后执行某些代码
        console.log('onMounted')
      })

      onBeforeUpdate(() => {
          // 在更新前前执行某些代码
        console.log('onBeforeUpdate')
      })

      onUpdated(() => {
          // 在更新后执行某些代码
        console.log('onUpdated')
      })

      onBeforeUnmount(() => {
          // 在组件销毁前执行某些代码
        console.log('onBeforeUnmount')
      })

      onUnmounted(() => {
          // 在组件销毁后执行某些代码
        console.log('unMounted')
      })

      return {
        msg,
        change
      }
  }
})
</script>
