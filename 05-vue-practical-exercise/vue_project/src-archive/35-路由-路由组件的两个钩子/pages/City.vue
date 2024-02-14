<script>
    export default {
        name: "City",
        props: ['a1', 'a2', 'a3']
    }
</script>

<template>
    <div>
        <h2>区</h2>
        <ul>
            <li>{{ a1 }}</li>
            <li>{{ a2 }}</li>
            <li>{{ a3 }}</li>
        </ul>
    </div>
</template>

<style scoped>

</style>