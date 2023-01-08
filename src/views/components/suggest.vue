<template>
  <div class="suggest">
    <div class="suggest-header">
      <div class="title">为你推荐</div>
      <div class="modify-like-btn">
        <img src="@/assets/images/advice.png" alt="" class="modify-icon">
        <div class="modify-text">
          设置学习偏好
        </div>
      </div>
    </div>
    <div class="suggest-list">
      <div
        v-for="(item,index) in items"
        :key="index"
        @mouseover="fnover(index)"
        @mouseleave="fnleave(index)"
        @click="fnTolink(item.link)"
        :class="oindex === index ? 'boxshadow':''"  
        class="suggest-item">
        <img :src="item.authorPortrait" alt="" class="person-pic">
        <div class="person-detail">
          <div class="person-title"  :class="oindex === index ? 'hovercolor':''">
            {{ item.name }}
          </div>
          <div class="person-info">
            <div class="person-name">
              {{ item.author }}
            </div>
            <div class="identity">
              {{ item.authorDesc }}
            </div>
          </div>
          <div class="person-num">
            {{ item.count }}
          </div>
          <div class="price">
            <img src="@/assets/images/adviceprice.png" alt="" class="price-img">
            <div class="newprice">
              {{ item.discountPrice }}
            </div>
            <div class="oldprice">
              {{ item.price }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSuggestData } from '@axios/index.js'

export default {
  name: 'suggest',

  data(){
    return {
      items: [],
      oindex: -1,
    }
  },

  created(){
    getSuggestData().then(res => {
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
.modify-like-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 12px 4px 9px;
  background: linear-gradient(180deg,#fbf5ee,#fffbf7);
  box-shadow: 0 4px 30px 0 rgb(238 242 245 / 80%);
  border-radius: 19px;
  border: 2px solid #fffefb;
  cursor: pointer;
  transform: translateY(6px);
  &:hover {
    background: linear-gradient(180deg,#feefde,#fffbf7);
  }
  .modify-icon {
    width: 16px;
    height: 16px;
  }
  .modify-text {
    margin-left: 6px;
    line-height: 21px;
    font-size: 15px;
    font-weight: 500;
    color: #fa8919;
  }
}
.suggest-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.suggest-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.suggest-item {
  display: flex;
  padding: 14px 17px 0;
  margin-top: 24px;
  margin-right: 24px;
  width: 384px;
  height: 156px;
  background: #fff;
  box-shadow: 0 4px 30px 0 rgb(238 242 245 / 80%);
  border-radius: 8px;
  box-sizing: border-box;
  cursor: pointer;
  transition: box-shadow .2s linear;
}
.boxshadow {
  box-shadow: 4px 4px 20px 0 rgb(205 216 228 / 60%);
}
.suggest-item:nth-child(3n) {
  margin-right: 0
}

.person-pic {
  width: 97px;
  height: 128px;
  border-radius: 6px;
  overflow: hidden;
  transition: all .2s;
}
.person-detail {
  position: relative;
  flex: 1;
  margin-left: 11px;
  overflow: hidden;
  .person-title{
    font-size: 20px;
    font-weight: 500;
    color: #4c4c4c;
    line-height: 28px;
    cursor: pointer;
    transition: color .2s ease;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .hovercolor {
    color: #fa8919;
  }
  .person-info {
    display: flex;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 400;
    color: #888;
    line-height: 24px;
    .person-name {
      height: 24px;
      padding: 0 8px;
      line-height: 24px;
      background: #f2f3f6;
      border-radius: 3px;
      box-sizing: border-box;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      max-width: 100px;
      text-align: center;
    }
    .identity {
      max-width: 150px;
      margin-left: 8px;
      height: 24px;
      padding: 0 8px;
      line-height: 24px;
      background: #f2f3f6;
      border-radius: 3px;
      box-sizing: border-box;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
  .person-num {
    margin-top: 9px;
    font-size: 14px;
    font-weight: 400;
    color: #b2b2b2;
    line-height: 20px;
  }
  .price {
    margin-top: 20px;
    display: flex;
    align-items: center;
    .price-img {
      margin-right: 6px;
      width: auto;
      height: 17px;
    }
    .newprice {
      margin-right: 6px;
      font-size: 20px;
      font-weight: 500;
      color: #fa8919;
      line-height: 16px;
    }
    .oldprice {
      position: relative;
      top: 1px;
      font-size: 15px;
      font-weight: 500;
      color: #b2b2b2;
      line-height: 15px;
      text-decoration: line-through;
    }
  }
}
    
</style>