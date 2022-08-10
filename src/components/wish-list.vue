<template>
    <section class="wish-list" v-if="wishes">

        <li v-for="wish in wishes" @click="selectWish(wish._id)"><wish-preview :key="wish._id" @removeWish="removeWish" :wish="wish">
        </wish-preview></li>
      


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
        selectWish(wishId) {
            // console.log('hello')
            this.$store.dispatch({ type: 'loadWish', id: wishId })
        },
        removeWish(wishId) {
            this.$emit("removeWish", wishId)
        }
    },
}
</script>

<style>
</style>