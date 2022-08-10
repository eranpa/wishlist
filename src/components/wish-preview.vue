<template>
    <div>
        <div>{{ wish.title }}</div>
        <!-- <div>{{ wish.rating }}</div>
        <div>{{ wish.description }}</div> -->
        <div><button @click="removeWish(wish._id)">Delete wish</button></div>
    </div>
</template>
<!-- :wishStatus="wish.status" -->
<script>
export default {
    name: 'wish-preview',
    props:
    {
        wish: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
        }
    },
    created() {
    },
    components: {
    },
    methods: {
        removeWish(wishId) {
            this.$emit("removeWish", wishId)
        },
    },
    computed: {}
}
</script>

<style>
</style>