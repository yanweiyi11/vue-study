<template>
    <div v-show="bugList.length">
        <table>
            <thead>
                <tr>
                    <!--<th class="c1">全选 <input type="checkbox" :checked="isAll" @change="selectAll"></th>-->
                    <th class="c1">全选 <input v-model="isAll" type="checkbox"></th>
                    <th>bug描述</th>
                    <th class="c2">操作</th>
                </tr>
            </thead>
            <tbody>
                <BugItem v-for="bug in bugList" :key="bug.id" :deleteByIdCallback="deleteByIdCallback"
                         :modifyResolvedCallback="modifyResolvedCallback"
                         :updateDescCallback="updateDescCallback"
                         :bug="bug">{{ bug }}
                </BugItem>
            </tbody>
        </table>
    </div>
</template>

<script>
    import BugItem from "@/BugItem.vue";

    export default {
        name: 'BugList',
        props: ['bugList', 'modifyResolvedCallback', 'deleteByIdCallback', 'selectAllCallback', 'updateDescCallback'],
        computed: {
            resolvedCount() {
                return this.bugList.reduce((a, b) => a + (b.resolved ? 1 : 0), 0)
            },
            /* isAll() {
                return (this.bugList.length === this.resolvedCount) && this.bugList.length > 0;
            } */
            isAll: {
                get() {
                    return (this.bugList.length === this.resolvedCount) && this.bugList.length > 0;
                },
                set(val) {
                    this.selectAllCallback(val)
                }
            }
        },
        methods: {
            /* selectAll(e) {
                this.selectAllCallback(e.target.checked)
            } */
        },
        components: {BugItem}
    }
</script>

<style scoped>
    table {
        width: 40%;
        border-collapse: collapse;
    }

    table caption {
        font-size: 1em;
        font-weight: bold;
        margin: 1em 0;
    }

    .c1, .c2 {
        width: 100px;
    }

    th {
        border: 1px solid #999;
        text-align: center;
        padding: 5px 0;
    }

    table thead tr {
        background-color: #008c8c;
        color: #fff;
    }
</style>