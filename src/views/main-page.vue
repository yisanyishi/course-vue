<template>
  <div class="main-page">
    <headAd></headAd>
  </div>
</template>

<script>
  export default {
    name: 'main-page',
    components: {
      'headAd': () => import('../components/header-ad.vue')
    }
  }
</script>

<style>
  
</style>