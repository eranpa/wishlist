
<template>
  <div>
    <router-view></router-view>
  </div>

</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: "main-app",
  props: [],
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
  },

  created() {
    this.$store.dispatch({ type: 'loadWishes' }) 
  },

};
</script>

<style>
</style>