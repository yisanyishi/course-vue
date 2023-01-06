<template>
    <div class="main-learn">
      <div 
        class="next" 
        @mousedown="downnext"
        @mouseup="upnext">
        <span class="iconfont  icon-jiantou_liebiaoxiangyou_o"></span>
      </div>
      <div 
        class="prev"
        @mousedown="downprev"
        @mouseup="upprev" >
        <span class="iconfont  icon-jiantou_liebiaoxiangzuo_o"></span>
      </div>
      <div class="slider-wrapper">
        <div 
          class="slider-container" 
          :style="`transform:translateX(${-1009*oindex}px)`"
          :class="transition">
          <ul
            v-for="(item, index) in items"
            :key="index"
            class="slider-list">
            <li
             v-for="(i,d) in item.listItem"
             :key="d"
             @click="Tolink(i.href)"
             class="slider-item">
              <div class="path-img">
                <img :src="i.src">
              </div>
              <div class="slider-title">
                <div class="slider-content">
                  {{ i.course }}
                </div>
                <div class="content-num">
                  {{ i.courseNum }}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import { getCarousel2Data } from '../axios/index.js'
  export default {
    name: 'carousel2',
    
    data(){
      return {
        num: 0,
        items: [],
        oindex: 1,
        transition: 'transition1',
      }
    },

    created(){
      getCarousel2Data().then((res) => {
        this.items =  res.data;
        this.items.unshift(res.data[res.data.length-1]);
        this.items.push(res.data[1])
        console.log(this.items)
      })
    },

    methods: {
      downnext(){
        if(this.oindex === this.items.length-1){
          this.oindex = 1;
          this.transition = ''
        }
      },

      upnext(){
        this.transition = 'transition1';
        this.oindex++;
      },

      downprev(){
        if(this.oindex === 0){
          this.oindex = this.items.length-2;
          this.transition = ''
        }
      },
     
      upprev(){
        this.transition = 'transition1';
        this.oindex--;
      },

      Tolink(url){
        window.open(url)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main-learn {
    position: relative;
    width: 1089px;
    box-shadow: 0 4px 30px 0 rgb(238 242 245 / 90%);
    border-radius: 8px;
  }
  .next {
    position: absolute;
    z-index: 10;
    top: 17px;
    right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 36px;
    color: #888;
    border-radius: 7px;
    background-color: #f6f7fb;
    cursor: pointer;
    &:hover {
      color: #fa8919;
      background: #fbf5ee;
    }
  }
  .prev {
    position: absolute;
    z-index: 10;
    top: 17px;
    left: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 36px;
    color: #888;
    border-radius: 7px;
    background-color: #f6f7fb;
    cursor: pointer;
    &:hover {
      color: #fa8919;
      background: #fbf5ee;
    }
  }
  .slider-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    height: 70px;
    margin-left: 50px;
    margin-right: 30px;
    box-sizing: border-box;
    overflow: hidden;
  }
  .slider-container {
    display: flex;
    align-items: center;
    // transform: translate3d(-1009px,0,0);
  }
  .slider-list {
    width: 1009px;
    height: 70px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }
  .slider-item {
    width: 200px;
    flex-shrink: 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .path-img {
    flex-shrink: 0;
    position: relative;
    z-index: 10;
    width: 40px;
    height: 40px;
    margin-right: 12px;
  }
  .path-img img {
    width: 36px;
    height: 36px;
    border-radius: 5px;
  }
  .slider-title {
    overflow: hidden;
  }
  .slider-content {
    line-height: 22px;
    font-size: 16px;
    font-weight: 500;
    color: #404040;
    transition: color .2s ease;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .content-num {
    display: flex;
    align-items: center;
    line-height: 17px;
    font-size: 12px;
    font-weight: 400;
    color: #888;
  }
  .transition1 {
    transition: transform 0.5s ease 0s;
  }
</style>