<template>
    <div>
        <User></User>
        <hr>
        <Vip></Vip>
        <hr>
        <Name></Name>
    </div>
</template>

<script>
    import User from "@/components/User.vue";
    import Vip from "@/components/Vip.vue";
    import Name from "@/components/Name.vue";

    export default {
        name: 'App',
        components: {Name, User, Vip}
    }
</script>
