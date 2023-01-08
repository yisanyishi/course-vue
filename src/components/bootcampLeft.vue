<template>
  <div class="bootcampLeft">
    <div class="bootcampLeft-header">
      <div class="headerLeft">
        <div class="bootcampLeft-title" @click="fnTolink('https://u.geekbang.org/')">
          <div class="title">训练营 · 提薪榜</div>
          <div class="iconfont  icon-jiantou_liebiaoxiangyou_o tobootcampLeft"></div>
        </div>
        <div class="subtitle">200+ 精品自学课，为你打造随身图书馆</div>
      </div>
      <div class="headerRight">
        <div class="customer-service">
          <img src="../assets/images/trainInfro.png" alt="" class="service">
          <div class="service-title">
            领取面试资料
          </div>
        </div>
        <div class="code">
          <span class="scan">微信扫码</span>
          <img src="../assets/images/contact-qrcode.png" alt="" class="code-img">
        </div>
      </div>
    </div>
    <div class="bootcampLeft-list">
      <div
        v-for="(item,index) in items"
        :key="index"
        @mouseover="fnover(index)"
        @mouseleave="fnleave(index)"
        @click="fnTolink(item.link)"
        :class="oindex === index ? 'boxshadow':''"  
        class="bootcampLeft-item">
        <div class="person-wrapper">
          <img :src="item.src" alt="" class="person-pic">
          <div class="badge" :style="{backgroundImage: item.backgroundImage}">
            {{ item.sort }}
          </div>
        </div>
        <div class="person-detail">
          <div class="person-title"  :class="oindex === index ? 'hovercolor':''">
            {{ item.title }}
          </div>
          <div class="person-info">
            {{ item.info }}
          </div>
          <div class="detailInfo">
            {{ item.detailInfo }}
          </div>
          <div class="opening-time-wrap">
            <div class="opening-time">
              {{ item.time }}
            </div>
            <div class="apply">
              {{ item.apply }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getBootcampLeftData } from '../axios/index.js'

export default {
  name: 'bootcampLeft',
  data(){
    return {
      items: [],
      oindex: -1,
    }
  },

  created(){
    getBootcampLeftData().then(res => {
      this.items = res.data
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

  }
}
</script>

<style lang="scss" scoped>
.bootcampLeft-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  .bootcampLeft-title {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .tobootcampLeft {
    width: 20px;
    height: 20px;
    margin-left: 5px;
    font-size: 20px;
    background: #f6f7fb;
    border-radius: 50%;
    display: flex;
    align-items: center;
    &:hover {
      color: #fa8919;
      background: #fbf5ee;
    }
  }
  .headerRight {
    position: relative;
    top: -16px;
  }
  .customer-service {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    margin-right: 24px;
    width: 130px;
    height: 38px;
    background: linear-gradient(180deg,#fbf5ee,#fffbf7);
    border: 2px solid hsla(0,0%,100%,.9);
    border-radius: 35px;
    box-shadow: 0 4px 30px 0 rgb(238 242 245 / 80%);
    cursor: pointer;
  }
  .service {
    margin-right: 5px;
    width: 13px;
    height: 14px;
  }
  .service-title {
    font-size: 14px;
    font-weight: 500;
    color: #fa8919;
    line-height: 20px;
  }
  .code {
    display: none;
    box-sizing: border-box;
    position: absolute;
    top: -186px;
    right: 7px;
    padding: 8px 25px 0 24px;
    width: 161px;
    height: 175px;
    background: #fff;
    box-shadow: 0 4px 30px 0 rgb(238 242 245 / 80%);
    border-radius: 8px;
  }
  .scan {
    margin-left: 23px;
    font-size: 16px;
    font-weight: 500;
    color: #404040;
    line-height: 20px;
    white-space: nowrap;
  }
  .code-img {
    width: 121px;
    height: 121px;
    margin-top: 2px;
    margin-left: -3px;
  }
  .headerRight:hover .code{
    display: block;
  }
}
.bootcampLeft-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .bootcampLeft-item {
    margin-top: 24px;
    margin-right: 24px;
    width: 435px;
    height: 180px;
    background: #fff;
    box-shadow: 0 4px 30px rgb(238 242 245 / 80%);
    border-radius: 8px;
    cursor: pointer;
    transition: box-shadow .2s linear;
    display: flex;
    padding: 16px 12px 0 18px;
    box-sizing: border-box;
    .person-wrapper {
      position: relative;
      width: 115px;
      height: 152px;
      background: #eee;
      border-radius: 6px;
    }
    .person-pic {
      width: 115px;
      height: 152px;
    }
    .badge{
      position: absolute;
      background-size: 30px 32px;
      background-position: 50%;
      width: 30px;
      height: 32px;
      top: -5px;
      left: 5px;
      font-size: 18px;
      font-family: DINAlternateBold,sans-serif;
      color: #fff;
      text-align: center;
      line-height: 32px;
    }
  }

  .boxshadow {
    box-shadow: 4px 4px 20px 0 rgb(205 216 228 / 60%);
  }
  .person-detail {
    flex: 1;
    margin-left: 22px;
    overflow: hidden;
    .person-title {
      font-size: 20px;
      font-weight: 500;
      color: #4c4c4c;
      line-height: 24px;
      cursor: pointer;
      transition: color .2s ease;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .person-info {
      height: 22px;
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      padding-top: 8px;
      color: #888;
    }
    .detailInfo {
      padding-top: 6px;
      color: #b2b2b2;
      height: 22px;
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .opening-time-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 40px;
      .opening-time {
        font-size: 16px;
        font-weight: 400;
        color: #fa8919;
        line-height: 20px;
      }
      .apply {
        height: 28px;
        padding: 0 18px;
        line-height: 28px;
        font-size: 16px;
        font-weight: 500;
        color: #fa8919;
        background: #fbf5ee;
        border-radius: 14px;
      }
    }
    .hovercolor {
      color: #fa8919;
    }
  }
}
</style>