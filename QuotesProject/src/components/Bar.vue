<template>
  <progress class="progress is-primary" :value="quotesNum" max="10"></progress>
</template>

<script>
  export default {
      props: ['quotesNum'],
  }
</script>
<style scoped>
</style>