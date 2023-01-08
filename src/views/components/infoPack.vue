<template>
  <div class="info-pack">
    <div class="title">学习资料包</div>
    <div class="subtitle">{{ item.title }}</div>
    <div class="pack-img">
      <img :src="item.src" alt="" class="">
    </div>
  </div>
</template>

<script>
import { getInfoPageData } from '@axios/index.js'

export default {
  name: 'infoPack',
  data(){
    return {
      item: [],
    }
  },

  created(){
    getInfoPageData().then(res => {
      this.item = res.data
    })
  }
}
</script>

<style lang="scss" scoped>
  .packTitle {
    height: 25px;
    font-size: 20px;
    font-weight: 500;
    color: #353535;
    line-height: 30px;
    .pack-subtitle {
      height: 22px;
      margin-top: 7px;
      font-size: 16px;
      font-weight: 400;
      color: #888;
      line-height: 22px;
    }
  }
  .pack-img {
    margin-top: 27px;
    width: 588px;
    height: 260px;
    cursor: pointer;
    border-radius: 8px;
  }
  .pack-img img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
</style>
