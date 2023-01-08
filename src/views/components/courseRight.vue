<template>
  <div class="courseRight">
    <div class="title">七日学习榜</div>
    <div class="subtitle">来看看七日学习榜单</div>
    <div class="courseRight-main">
      <div class="courseRight-title">
        <div class="right-title">
          {{ item.title }}
        </div>
        <img src="@/assets/images/champion.png" alt="" class="bedge">
      </div>
      <div class="order">
        <div 
          class="order-wrapper"
          v-for="(list,index) in lists"
          :key="index"
          @click="fnTolink(list.link)">
          <div 
          class="order-num"
          :class="orderColor(list.order)">
            {{ list.order }}
          </div>
          <div 
            class="order-name"
            @mouseover="fnover(index)"
            @mouseleave="fnleave(index)"
            :class="oindex === index ? 'namecolor' : ''">
            {{ list.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCourseRightData } from '@axios/index.js'

export default {
  name: 'infoPack',
  data(){
    return {
      item: [],
      lists: [],
      oindex: -1,
    }
  },

  created(){
    getCourseRightData().then(res => {
      this.item = res.data
      this.lists = res.data.lists
    });

  },

  methods: {
    fnTolink(url){
      window.open(url)
    },

    fnover(index){
      this.oindex = index;
    },

    fnleave(){
      this.oindex = -1;
    },

    orderColor(num){
      if(num === 1){
        return 'orange'
      } else if(num === 2){
        return 'yellow'
      } else if(num === 3){
        return 'brown'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .courseRight-main {
    width: 282px;
    height: 384px;
    padding: 9px;
    background: #fff;
    box-shadow: 0 4px 30px 0 rgb(238 242 245 / 80%);
    border-radius: 8px;
    margin-top: 22px;
    box-sizing: border-box;
    .courseRight-title {
      position: relative;
      display: flex;
      align-items: center;
      padding-left: 19px;
      height: 58px;
      border-radius: 6px 6px 0 0;
      background: url(https://static001.geekbang.org/static/time/img/bg-hotsale.2d75cf9a.png) no-repeat 0 0/100% auto;
      background-size: cover;
    }
    .right-title {
      font-size: 19px;
      font-weight: 500;
      color: #bd5c5e;
    }
    .bedge {
      position: absolute;
      top: 7px;
      right: 34px;
      height: 47px;
    }
    .order {
      padding: 4px 12px 0 18px;
      background: #fffdfc;
      border-radius: 0 0 6px 6px;
    }
    .order-wrapper {
      display: flex;
      align-items: center;
      padding: 5px 0;
    }
    .order-num {
      height: 34px;
      font-size: 23px;
      font-family: DINCondensed-Bold,DINCondensed;
      font-weight: 700;
      color: #b2b2b2;
    }
    .order-name {
      margin-left: 18px;
      max-width: 200px;
      font-size: 16px;
      font-weight: 400;
      color: #404040;
      cursor: pointer;
      transition: color .2s ease;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .orange {
      color: #ff7155;
    }
    .yellow {
      color: #ffc51d;
    }
    .brown {
      color: #cfc5a7;
    }
    .namecolor {
      color: #fa8919;
    }
    // .order-wrapper:nth-child(1) .order-num {
    //   color: #ff7155;
    // }
  }
</style>