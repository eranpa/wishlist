<template>
    <div>
        <div>{{ displayedBook.title }}</div>
        <div>{{ displayedBook.author }}</div>
        <div>{{ displayedBook.description }}</div>
        <div>{{ displayedBook.rating }}</div>
        <div>{{ displayedBook.price }}</div>
    </div>
</template>
<script>
export default {
    template: `
`,
    props: [],
    data() {
        return {
        };
    },
    created() { },
    methods: {},
    computed: {
        displayedBook() {
            return this.$store.getters.getDisplayedBook
        }
    },
    unmounted() { },
    components: {}
}
</script>
