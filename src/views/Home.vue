<template>
  <div>
    Eran and Dor
  <wish-list :wishes="getWishes" @removeWish="removeWish"></wish-list>
  </div>
</template>

<script>
import wishList from "../components/wish-list.vue"


export default {
  name: "main-app",
  props: [],
  components: {
    wishList,
  },
  created() {
  },
  methods: {
    removeWish(wishId) {
      this.$store.dispatch({ type: 'removeWish', id: wishId })
    },
  },
  computed: {
    getWishes() {
      return this.$store.getters.wishesForDisplay
    },
  },
};
</script>

<style>
</style>

