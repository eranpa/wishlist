<template>
    <section class="wish-list" v-if="wishs">
        <table>
            <tbody>
                <wish-preview v-for="wish in wishs" :key="wish._id" @removeWish="removeWish"
                    @updateWishField="updateWishField" :wish="wish">
                </wish-preview>
            </tbody>
        </table>
    </section>
</template>

<script>
import wishPreview from './wish-preview.vue'

export default {
    name: 'wish-list',
    props: {
        wishs: {
            type: Array,
            required: true
        },
    },
    components: {
        wishPreview
    },
    computed: {

    },
    mounted() {
    },
    methods: {
        removeWish(wishId) {
            this.$emit("removeWish", wishId)
        }
    },
}
</script>

<style>
</style>