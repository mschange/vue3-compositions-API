<template>
  <div>
    <h2>toRefs</h2>
    <h1>解构响应式对象数据</h1>
    <p>Username: {{username}}</p>
    <p>Age: {{age}}</p>
    <button @click="change">修改值toRefs</button>
  </div>
</template>
<script>
/**
 * 把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref ，和响应式对象 property 一一对应
 * 
 * 作用：在页面中可以直接使用属性名称，不用使用xxx.属性名
 */
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "DestructReactiveObject",
  setup() {
    const user = reactive({
      username: "haihong",
      age: 10000,
    });

    const change = () => {
      console.log(user, '00000')
      user.age = 100;
      user.username = "修改"
    }
    return { 
      ...toRefs(user),
      change
    };
  },
})
</script>