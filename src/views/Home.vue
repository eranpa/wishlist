<template>
  <div>
    Eran and Dor
  <!-- <wish-list :wishs="getWishs" @removeWish="removeWish" @updateWishField="updateWishField"></wish-list> -->
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
    // getWishs() {
    //   return this.$store.getters.wishsForDisplay
    // },
  },
};
</script>

<style>
</style>

