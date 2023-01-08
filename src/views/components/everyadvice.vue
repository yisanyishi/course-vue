<template>
   <div class="everyadvice">
    <div class="title">
      {{ items.recommendTitle }}
    </div>
    <div class="subtitle">
      {{ items.recommendSubtitle }}
    </div>
    <div class="recommend-box">
      <div 
        class="daily-item"
        v-for="(list,index) in lists"
        :key="index"
        @mouseover="fnover(index)"
        @mouseleave="fnleave(index)"
        @click="fnTolink(list.link)"
        :class="oindex === index ? 'boxshadow':''"  >
        <div class="everyadvice-content">
          <img :src="list.img" alt="" class="everyadvice-pic">
          <div class="daily-detail">
            <div class="daily-title" :class="oindex === index ? 'hovercolor':''">
              {{ list.title }}
            </div>
            <div class="daily-subtitle">
              {{ list.subTitle }}
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="bottom-descript">
            {{ list.descript }}
          </div>
          <div class="bottom-playNum">
            {{ list.playNum }}
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import { getEveryCourseData } from '@axios/index.js'

export default {
  name: 'infoPack',
  data(){
    return {
      items: [],
      lists: [],
      oindex: -1,
    }
  },

  created(){
    getEveryCourseData().then(res => {
      this.items = res.data
      this.lists= res.data.recommendLists
    })
  },

  methods:{
    fnover(index){
      this.oindex = index;
    },

    fnleave(index){
      this.oindex = -1
    },

    fnTolink(url){
      window.open(url)
    }
  }
}
</script>

<style lang="scss" scoped>
.recommend-box {
  margin-top: 24px;
}
.daily-item {
  width: 282px;
  height: 170px;
  background: #fff;
  box-shadow: 0 4px 30px 0 rgb(238 242 245 / 80%);
  border-radius: 8px;
  cursor: pointer;
  transition: box-shadow .2s linear;
}
.boxshadow {
  box-shadow: 4px 4px 20px 0 rgb(205 216 228 / 60%);
}

.everyadvice-content {
  display: flex;
  padding: 0 10px;
  margin-top: 16px;
  .everyadvice-pic {
    width: 82px;
    height: 108px;
    margin-top: 16px;
    background: #eee;
    border-radius: 6px;
    overflow: hidden;
  }
  .daily-detail {
    margin-left: 10px;
    width: 170px;
    .daily-subtitle{
      margin-top: 7px;
      font-size: 12px;
      font-weight: 400;
      color: #888;
      line-height: 16px;
      margin-top: 7px;
      font-size: 12px;
      font-weight: 400;
      color: #888;
      line-height: 16px;
    }
    .daily-title {
      margin-top: 19px;
      font-size: 16px;
      font-weight: 500;
      color: #404040;
      line-height: 22px;
      transition: color .2s ease;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .hovercolor {
      color: #fa8919;
    }
  }
}
.bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0 10px;
  .bottom-descript {
    line-height: 24px;
    font-size: 12px;
    font-weight: 400;
    color: #6c7684;
    padding: 0 11px 0 11px;
    height: 24px;
    text-align: center;
    background: #f6f7fb;
    border-radius: 12px;
    box-sizing: border-box;
  }
  .bottom-playNum {
    line-height: 24px;
    font-size: 12px;
    font-weight: 400;
    color: #6c7684;
  }
}
</style>