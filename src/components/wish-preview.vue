<template>
    <tr>
        <td>{{ wish.title }}</td>
        <td>{{ wish.importance }}</td>
        <td>{{ wish.description }}</td>
        <td><button @click="removeWish(wish._id)">Delete wish</button></td>
    </tr>
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