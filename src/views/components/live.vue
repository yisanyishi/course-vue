<template>
  <div class="live">
    <div>
      <div class="liveTitle">直播</div>
      <div class="live-subtitle">
        牛人直播，每周分享专业人领域最新见解
      </div>
    </div>
    <div class="live-video">
      <div 
        class="live-item"
        v-for="(item,index) in items"
        @mouseover="fnhover(index)" 
        @mouseleave="fnleave(index)"
        @click='Tolink(item.link)'
        :key="index">
        <div class="video">
          <img :src="item.src"  class="video-img">
          <div class="preview">预告</div>
          <div class="player-wrapper" :class="opacitys === index ? 'opacitys' : ''">
            <div class="player">
              <img src="@/assets/images/subSrc.png" alt="" class="icon-bo">
              <!-- <span  class="iconfont icon-bofangsanjiaoxing icon-bo"></span> -->
            </div>
          </div>
        </div>
        <div class="intro">
          <div class="live-name" :class="orange === index ? 'orange' : ''">{{ item.name }}</div>
          <div class="live-time">{{ item.time }}</div>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
import { getLiveData } from '@axios/index.js'
  export default{
    name: 'live',

    data(){
      return {
        items: [],
        begin: false,
        opacitys: -1,
        orange: -1,
      }
    },

    methods: {
      fnhover(index){
        this.opacitys = index;
        this.orange = index;
      },

      fnleave(index){
        this.opacitys = -1;
        this.orange = -1;
      },

      Tolink(url){
        window.open(url)
      }
    },

    created(){
      getLiveData().then((res) => {
        this.items = res.data
      })
    },
  }
</script>

<style lang="scss" scoped>
  .liveTitle {
    font-size: 20px;
    font-weight: 500;
    color: #404040;
  }
  .live-subtitle {
    font-size: 16px;
    color: #888;
    font-weight: 400;
  }

  .live-video {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .live-item {
    position: relative;
    width: 282px;
    height: 260px;
    margin-top: 24px;
    margin-right: 24px;
    background: #fff;
    box-shadow: 0 4px 30px 0 rgb(238 242 245 / 80%);
    border-radius: 8px;
    cursor: pointer;
    transition: box-shadow .2s linear;
    .video {
      position: relative;
      width: 282px;
      height: 159px;
      background: #eee;
      border-radius: 8px 8px 0 0;
      overflow: hidden;
    }
    .video-img {
      width: 282px;
      height: 159px;
      border-radius: 8px 8px 0 0;
    }
    .preview {
      position: absolute;
      color: #7e521a;
      background: linear-gradient(180deg,#feeccf,#e9c07f);
      z-index: 10;
      top: 8px;
      right: 8px;
      padding: 0 5px;
      height: 19px;
      display: flex;
      align-items: center;
      font-size: 12px;
      font-weight: 500;
      border-radius: 4px;
    }
  }

  .intro {
    margin: 12px 12px 0 10px;
    .live-name {
      font-size: 17px;
      font-weight: 500;
      color: #404040;
      line-height: 24px;
      cursor: pointer;
      transition: color .2s ease;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .orange {
      color: #fa8919;
    }
    .live-time {
      margin-top: 7px;
      font-size: 15px;
      font-weight: 400;
      color: #888;
      line-height: 21px;
    }
  }

  .player-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    background: rgba(0,0,0,.2);
    border-radius: 8px 8px 0 0;
    transition: all .3s ease;
    .player {
      width: 43px;
      height: 43px;
      color: #fff;
      border-radius: 50%;
      background: hsla(0,0%,100%,.2);
      display: flex;
      align-items: center;
      justify-content: center;
      .icon-bo {
        width: 15px;
      }
    }
  }

  .opacitys {
    opacity: 1;
  }

</style>