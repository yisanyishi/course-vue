<template>
  <div class="case">
    <div class="case-header">
      <div class="headerLeft">
        <div class="case-title" @click="fnTolink('https://time.geekbang.org/qconplus/home')">
          <div class="title">大厂案例</div>
          <div class="iconfont  icon-jiantou_liebiaoxiangyou_o tocase"></div>
        </div>
        <div class="subtitle">200+ 精品自学课，为你打造随身图书馆</div>
      </div>
      <div class="headerRight">
        <div 
          class="newest-item"
          :class="newestcolor"
          @click="fnnewest()">
          最新专题
        </div>
        <div class="caseline"></div>
        <div 
          class="hotestTitle"
          :class="hotestcolor"
          @click="fnhotest()">
          最热专题
        </div>
      </div>
    </div>
    <div>
      <div 
        v-for="(list,index) in lists"
        :key="index"
        class="case-list">
        <div
          v-for="(item,index) in listIndex === 0 ? list.newestTitle : list.hotestTitle"
          :key="index"
          @mouseover="fnover(index)"
          @mouseleave="fnleave(index)"
          @click="fnTolink(item.link)"
          :class="oindex === index ? 'boxshadow':''"  
          class="case-item">
          <img :src="item.img" alt="" class="case-pic">
          <div class="case-detail">
            <div class="detail-title"  :class="oindex === index ? 'hovercolor':''">
              {{ item.title }}
            </div>
            <div class="detail-time">
              {{ item.time }}
            </div>
            <div class="detail-num">
              {{ item.num }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCaseData } from '@axios/index.js'

export default {
  name: 'case',
  data(){
    return {
      lists: [],
      oindex: -1,
      listIndex: 0,
      newestcolor: 'gray',
      hotestcolor: 'shallowgray',
    }
  },

  created(){
    getCaseData().then(res => {
      this.lists = res.data
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

    fnnewest(){
      this.listIndex = 0
      this. newestcolor = 'gray';
      this.hotestcolor = 'shallowgray';
    },

    fnhotest(){
      this.listIndex = 1
      this. newestcolor = 'shallowgray';
      this.hotestcolor = 'gray';
    },
  }
}
</script>

<style lang="scss" scoped>
.case-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  .case-title {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .tocase {
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
}
.headerRight {
  display: flex;
  align-items: center;
  .caseline {
    height: 10px;
    border: 1px solid #b2b2b2;
    margin: 0 10px;
  }
  .newest-item {
    position: relative;
    padding: 0 10px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    transition: all .2s ease;
    &:hover {
      color: #404040;
    }
  }
  .gray {
    color: #404040;
  }
  .shallowgray {
    color: #b2b2b2;
  }
  .hotestTitle {
    padding: 0 10px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    transition: all .2s ease;
    &:hover {
      color: #404040;
    }
  }
}
.case-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.case-item {
  margin-top: 24px;
  margin-right: 24px;
  display: flex;
  width: 384px;
  height: 125px;
  box-sizing: border-box;
  padding-left: 21px;
  padding-top: 14px;
  background: #fff;
  box-shadow: 0 4px 30px 0 rgb(238 242 245 / 80%);
  border-radius: 8px;
  cursor: pointer;
  transition: box-shadow .2s linear;
}
.case-item:nth-child(3n) {
  margin-right: 0;
}
.case-pic {
  width: 97px;
  height: 97px;
  background: #d8d8d8;
  border-radius: 4px;
  overflow: hidden;
}
.boxshadow {
  box-shadow: 4px 4px 20px 0 rgb(205 216 228 / 60%);
}
.case-detail {
  margin-left: 21px;
  padding-right: 10px;
  overflow: hidden;
  .detail-title {
    font-size: 17px;
    font-weight: 500;
    color: #404040;
    line-height: 28px;
    transition: color .2s ease;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .hovercolor {
    color: #fa8919;
  }
  .detail-time {
    margin-top: 4px;
    font-size: 14px;
    font-weight: 400;
    color: #888;
    line-height: 20px;
  }
  .detail-num {
    margin-top: 24px;
    font-size: 14px;
    font-weight: 400;
    color: #888;
    line-height: 20px;
  }
}
</style>