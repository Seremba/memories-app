<template>
    <base-layout page-title="Add a memory" page-default-back-link="/memories">
      <create-memory-form @save-memory="saveMemory"></create-memory-form>
    </base-layout>
</template>

<script>
import CreateMemoryForm from '../components/memories/CreateMemoryForm.vue'
import BaseLayout from '../components/base/BaseLayout.vue'
export default {
  components: {
      CreateMemoryForm,
      BaseLayout
  },
  methods: {
      saveMemory(memoryData){
          this.$store.dispatch('addMemory', memoryData); 
          this.$router.replace('/memories') 
      }
  }
  }
</script>