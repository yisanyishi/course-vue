<template>
  <div class="openClass">
    <div class="title">
      公开课
    </div>
    <div class="subtitle">
      大咖布道，免费分享实战案例
    </div>
    <div class="openClass-list">
      <div 
        class="openClass-item"
        v-for="(item,index) in items"
        @mouseover="fnover(index)"
        @mouseleave="fnleave(index)"
        @click="fnTolink(item.link)"
        :class="oindex === index ? 'boxshadow':''"
        :key="index">
        <img :src="item.src"  class="openClass-img">
        <div class="intro">
          <div class="intro-title" :class="oindex === index ? 'hovercolor':''">
            {{ item.title }}
          </div>
          <div class="intro-subtitle">
            {{ item. description }}
          </div>
        </div> 
        <div class="bottom">
          <div class="bottom-num">
            {{ item.learnNum }}
          </div>
          <div class="bottom-btn">
            {{ item.iscount}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getOpenClassData } from '@axios/index.js'
  export default{
    name: 'openClass',

    data(){
      return {
        items: [],
        oindex: -1,
      }
    },

    methods: {
      fnover(index){
        this.oindex = index;
      },

      fnleave(index){
        this.oindex = -1
      },

      fnTolink(url){
        window.open(url)
      }
    },

    created(){
      getOpenClassData().then((res) => {
        this.items = res.data
      })
    },
  }
</script>

<style lang="scss" scoped>
.openClass-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.openClass-item {
  margin-top: 24px;
  margin-right: 24px;
  width: 282px;
  background: #fff;
  box-shadow: 0 4px 30px 0 rgb(238 242 245 / 80%);
  border-radius: 8px;
  cursor: pointer;
  transition: box-shadow .2s linear;
}
.boxshadow {
  box-shadow: 4px 4px 20px 0 rgb(205 216 228 / 60%);
}
.openClass-item:nth-child(4n) {
  margin-right: 0;
}
.openClass-img {
  position: relative;
  width: 282px;
  height: 159px;
  background: #eee;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  overflow: hidden;
}
.intro {
  margin: 12px 12px 0 10px;
  .intro-title {
    font-size: 17px;
    font-weight: 500;
    color: #404040;
    line-height: 25px;
    transition: color .2s ease;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .hovercolor {
    color: #fa8919;
  }
  .intro-subtitle {
    margin-top: 4px;
    font-size: 15px;
    font-weight: 400;
    color: #888;
    line-height: 22px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}

.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 12px 8px 10px;
  .bottom-num {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    color: #b2b2b2;
  }
  .bottom-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 92px;
    height: 28px;
    background: #fbf5ee;
    border-radius: 14px;
    font-weight: 500;
    color: #fa8919;
    cursor: pointer;
    font-size: 14px;
    line-height: 20px;
  }
}

</style>