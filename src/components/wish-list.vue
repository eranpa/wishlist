<template>
    <section class="wish-list" v-if="wishes">

                <wish-preview v-for="wish in wishes" :key="wish._id" @removeWish="removeWish"
                  :wish="wish">
                </wish-preview>

      
    </section>
</template>

<script>
import wishPreview from './wish-preview.vue'

export default {
    name: 'wish-list',
    props: {
        wishes: {
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