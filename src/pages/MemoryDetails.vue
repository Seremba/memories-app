<template>
    <base-layout :pageTitle="loadedMemory? loadedMemory.title: 'loading...'" page-default-back-link="/memories">
    <h2 v-if="!loadedMemory">Could not find a memory for the given id</h2>
    <h2 v-else>load it </h2>
    </base-layout>
</template>

<script>
import BaseLayout from '../components/base/BaseLayout.vue'
export default {
  components: { BaseLayout },
  data() {
      return {
          memoryId: this.$route.params.id 
      }
  },
  computed: {
      loadedMemory() {
          return this.$store.getters.memory(this.memoryId)
      }
  },
//   watch: {
//       '$route' (currentRoute) {
//           this.memoryId = currentRoute.params.id
//       }
//   } 
    
}
</script>