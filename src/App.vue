<template>
  <div id="nav">
    <router-link to="/">setup函数</router-link> |
    <router-link to="/about">生命周期</router-link> |
    <router-link to="/reactive">reactive创建对象</router-link> |
    <router-link to="/toRef">toRef转化为响应式</router-link> |
    <router-link to="/toRefs">toRefs转化为响应式</router-link> |
    <router-link to="/shallowReactive">shallowReactive - 浅层响应式数据对象</router-link> |
    <router-link to="/shallowRef">shallowRef - 创建浅层的 ref</router-link> |
    <router-link to="/watch">watch - 监听器</router-link> |
    <router-link to="/watchEffect">watchEffect - 监听器</router-link>
  </div>
  <router-view/>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
