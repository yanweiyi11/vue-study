<template>
    <tr>
        <td><input :checked="bug.resolved" type="checkbox" @change="modifyResolved(bug.id)"></td>
        <!--<td><input type="checkbox" v-model="bug.resolved"></td>-->
        <td>
            <span v-show="!bug.edit" class="desc" @click="enterEdit(bug)">{{ bug.desc }}</span>
            <input v-show="bug.edit" ref="inputDesc" :value="bug.desc" @blur="updateDesc(bug, $event)" type="text">
        </td>
        <td>
            <button class="small red button" @click="deleteById(bug.id)">删除</button>
        </td>
    </tr>
</template>

<script>
    export default {
        name: 'BugItem',
        props: ['bug', 'modifyResolvedCallback', 'deleteByIdCallback', 'updateDescCallback'],
        methods: {
            modifyResolved(bugId) {
                this.modifyResolvedCallback(bugId)
            },
            deleteById(bugId) {
                this.deleteByIdCallback(bugId)
            },
            enterEdit(bug) {
                // 显示 input 框，隐藏 span
                if (bug.hasOwnProperty('edit')) {
                    bug.edit = true;
                } else {
                    // 这里的代码只会第一次执行
                    this.$set(bug, 'edit', true);
                }

                // 获取文本框，并且让文本框获得焦点
                // 第一种方案：
                // setTimeout(() => this.$refs.inputDesc.focus())

                // 第二种方案：使用 Vue 提供好的 API
                // nextTick 方法会绑定一个回调函数，这个回调函数在下一次 DOM 全部渲染完毕后被调用
                this.$nextTick(() => this.$refs.inputDesc.focus());
            },
            updateDesc(bug, e) {
                // 获取描述信息
                let newDesc = e.target.value.trim()
                if (!newDesc) return
                // 更新描述信息
                this.updateDescCallback(bug.id, newDesc)
                // 隐藏文本框
                this.bug.edit = false
            }
        }
    }
</script>

<style scoped>
    table tbody tr:nth-child(odd) {
        background-color: #eee;
    }

    table tbody tr:hover {
        background-color: #ccc;
    }

    table tbody tr td:first-child {
        color: #f40;
    }

    td {
        border: 1px solid #999;
        text-align: center;
        padding: 5px 0;
    }

    .desc {
        cursor: pointer;
    }
</style>