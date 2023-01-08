<template>
  <div class="swiper-list">
    <div class="swiper-wrapper">
      <img
        v-for="(item, index) in items"
        :key = 'index'
        @click="fnTolink(item.ahref)"
        @mouseover = 'stop' 
        @mouseout = 'play'
        :src="item.src"
        :class="oindex === index ? 'on-opacity': ''"
        class="image">
    </div>
    <div class="min-dot">
      <div 
        v-for=" (item,index) in items"
        :key="index"
        @click="change(index)"
        :class="oindex === index ? 'active' : ''">
      </div>
    </div>
    <span 
      class="iconfont icon-jiantou_liebiaoxiangyou_o right-btn btn"
      @click="next"
     ></span>
    <span 
      class="iconfont icon-jiantou_liebiaoxiangzuo_o left-btn btn"
      @click="last">
    </span>
  </div>
</template>

<script>
  import { getCarouselData } from '../axios/index.js'
  export default {
    name: 'carousel1',

    data(){
      return {
        items: [],
        oindex: 0,
        timer: null
      }
    },

    created(){
      getCarouselData().then((res) => {
        this.items = res.data
      });
      this.play();
    },
    
    methods: {
      fnTolink(url){
        window.open(url)
      },

      next(){
        this.oindex++;
        if(this.oindex === this.items.length){
          this.oindex = 0;
        }
      },

      last(){
        this.oindex--;
        if(this.oindex === -1){
          this.oindex = this.items.length-1
        }
      },

      change(index){
        this.oindex =index
      },

      play(){
        this.timer = setInterval(this.next,5000)
      },

      stop(){
        clearInterval(this.timer)
      },
    },

    mounted(){
     
    }
  }
</script>

<style lang="scss" scoped>
  .btn {
    display: none;
    position: absolute;
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
    top: 49%;
  }
  .left-btn {
    left: 0;
    top: 48%;
  }

  .swiper-list {
    width: 818px;
    margin-left: 18px;
    margin-right: 18px;
    border-radius: 14px;
    background: #f6f7fb;
    position: relative;
    border-radius: 14px;
    overflow: hidden;
  }

  .swiper-list:hover .btn {
    display: block;
  }

  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 0;
    cursor: pointer;
  }

  .image {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition:all 0.5s linear; /*设置过渡时间*/
  }
  
  .on-opacity {
    opacity: 1;
  }
  .min-dot {
    position: absolute;
    bottom: 15px;
    right: 15px;
    height: 5px;
    display: flex;
    align-items: center;
    width: 100px;
  }

  .min-dot > div{
    margin-right: 5px;
    width: 14px;
    height: 3px;
    border-radius: 3px;
    background-color: hsla(0,0%,100%,.5); 
}

  .min-dot .active {
    background-color: #fff;
    transition:all .5s linear; /*设置过渡时间*/
  }

</style>