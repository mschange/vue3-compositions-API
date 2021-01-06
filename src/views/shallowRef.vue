<template>
	<p>{{ state.a }}</p>
	<p>{{ state.first.b }}</p>
	<p>{{ state.first.second.c }}</p>
	<button @click="change1">改变1</button>
	<button @click="change2">改变2</button>
</template>

<script>
/**
 * shallowRef 跟shallowReactive类似，修改第一层，视图会更新，其余多层不会更新
 * 配合triggerRef使用，则会更新视图
 */
import {defineComponent, shallowRef, triggerRef} from 'vue'
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

        const state = shallowRef(obj)
        console.log(state);

        function change1() {
            // 直接将state.value重新赋值
            state.value = {
                a: 7,
                first: {
                    b: 8,
                    second: {
                        c: 9
                    }
                }
            }
        }

        function change2() {
            state.value.first.b = 8
            state.value.first.second.c = 9
            triggerRef(state);
            console.log(state);

        }

        return {state, change1, change2}
    }
})
</script>
