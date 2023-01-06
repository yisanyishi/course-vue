<template>
  <div class="swiper-list">
    <div class="swiper-wrapper" :style="translate">
      <img :src="items[items.length-1].src" class="image" @click="fnTolink(items[items.length-1].ahref)" >
      <img
        v-for="(item, index) in items"
        :key = 'index'
        @click="fnTolink(item.ahref)"
        :src="item.src" 
        class="image">
        <img :src="items[0].src" class="image" @click="fnTolink(items[0].ahref)" >
    </div>
    <div class="min-dot">
      <div 
        v-for=" item in items"
        :class="active === index ? 'active':''"
        :key="item">
      </div>
    </div>
    <span 
      class="iconfont icon-jiantou_liebiaoxiangyou_o right-btn btn"
      v-show="arrow"
      @click="next"></span>
    <span 
      class="iconfont icon-jiantou_liebiaoxiangzuo_o left-btn btn"
      v-show="arrow"></span>
  </div>
</template>

<script>
  import { getCarouselData } from '../axios/index.js'
  export default {
    name: 'carousel',

    data(){
      return {
        items: [],
        arrow: false,
        translate: {
          transitionDuration: '0ms', 
          transform: 'translateX(-828px)',
        }
      }
    },

    created(){
      getCarouselData().then((res) => {
        this.items = res.data
      });
    },
    
    methods: {
      fnTolink(url){
        window.open(url)
      },

      next(){

      }
    },

    mounted(){
     
    }
  }
</script>

<style lang="scss" scoped>
  .btn {
    position: absolute;
    top: 50%;
    transform: translateY(-25px);
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
    background-color: rgba(64,64,64,.2);
    color: #fff;
    font-size: 44px;
    text-align: center;
    cursor: pointer;
  }
  .right-btn {
    right:0;
  }
  .left-btn {
    left: 0;
  }

  .swiper-list {
    width: 818px;
    margin-left: 18px;
    margin-right: 18px;
    border-radius: 14px;
    background: #f6f7fb;
    position: relative;
    border-radius: 14px;
    // overflow: hidden;
  }

  .swiper-wrapper {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    z-index: 0;
    cursor: pointer;
  }

  .image {
    width: 100%;
    height: 100%;
  }

  .min-dot {
    position: absolute;
    bottom: 15px;
    right: 15px;
    height: 5px;
    display: flex;
    align-items: center;
    width: 100px;
    cursor: pointer;
  }

  .min-dot >div{
  margin-right: 5px;
  width: 14px;
  height: 3px;
  border-radius: 3px;
  background-color: hsla(0,0%,100%,.5); 
}

  .min-dot .active {
    background-color: #fff;
  }

</style>