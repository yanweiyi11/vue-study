<template>
    <div class="footer" v-show="bugList.length">
        <button class="small red button" @click="clearResolved">清除已解决</button>
        <span>当前BUG总量{{ bugList.length }}个，已解决{{ resolvedCount }}个</span>
    </div>
</template>

<script>
    export default {
        name: 'BugFooter',
        props: ['bugList', 'clearResolvedCallback'],
        computed: {
            resolvedCount() {
                // 采用普通计数器的方式
                /* let count = 0
                this.bugList.forEach((bug) => {
                  if (bug.resolved) count++
                })
                return count */

                // 使用 ES6 数组的 reduce 方法进行对数组条件的统计
                // this.bugList.reduce(回调函数, 统计起点)
                // 统计起点从 0 开始
                // 回调函数有 2 个参数：a，b
                // a：上一次回调函数调用之后的返回值
                // b：当前被统计的对象
                // 回调函数的调用次数和数组中元素总量有关系。
                /* return this.bugList.reduce((a, b) => {
                  return a + (b.resolved ? 1 : 0)
                }, 0) */

                // 简写
                return this.bugList.reduce((a, b) => a + (b.resolved ? 1 : 0), 0);
            }
        },
        methods: {
            clearResolved() {
                this.clearResolvedCallback()
            }
        }
    }
</script>

<style scoped>
    .footer {
        margin-top: 10px;
    }

    .footer span {
        font-size: 12px;
    }
</style>