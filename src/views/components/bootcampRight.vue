<template>
  <div class="bootcampRight">
    <div class="title">体验课/小课</div>
    <div class="subtitle">体验最小版本的训练营课程</div>
    <div class="recommend-box">
      <div 
        class="experience-item"
        v-for="(item,index) in items"
        :key="index"
        @mouseover="fnover(index)"
        @mouseleave="fnleave(index)"
        @click="fnTolink(item.link)"
        :class="oindex === index ? 'boxshadow':''"  >
        <div class="content-box">
          <div class="bootcampRight-title" :class="oindex === index ? 'hovercolor':''">
            {{ item.title }}
          </div>
          <div class="bootcampRight-subtitle">
            {{ item.subTitle }}
          </div>
          <div class="bootcampRight-price">
            <div class="new-price">
              {{ item.newPrice }}
            </div>
            <div class="old-price">
              {{ item.oldPrice }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getBootcampRightData } from '@axios/index.js'

export default {
  name: 'bootcampRight',
  data(){
    return {
      items: [],
      oindex: -1,
    }
  },

  created(){
    getBootcampRightData().then(res => {
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
  .recommend-box {
    margin-top: 24px;
  }
  .experience-item {
    width: 282px;
    margin-bottom: 15px;
    padding: 9px;
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
  .content-box {
    position: relative;
    padding: 10px 55px 8px 12px;
    border-radius: 5px;
    .bootcampRight-title {
      font-size: 16px;
      font-weight: 500;
      color: #353535;
      line-height: 21px;
      transition: color .2s ease;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .hovercolor {
      color: #fa8919;
    }
    .bootcampRight-subtitle {
      margin-top: 5px;
      font-size: 12px;
      font-weight: 400;
      color: #888;
      line-height: 17px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .bootcampRight-price {
      display: flex;
      align-items: baseline;
      margin-top: 12px;
      .new-price {
        font-size: 16px;
        font-weight: 500;
        color: #fa8919;
        line-height: 26px;
      }
      .old-price {
        margin-left: 4px;
        font-size: 12px;
        font-weight: 400;
        color: #b2b2b2;
        line-height: 25px;
        text-decoration: line-through;
      }
    }
  }
  .experience-item:first-child .content-box {
    background: url(https://static001.geekbang.org/static/time/img/bg-red.449852c4.png) no-repeat 0 0/264px 100px;
  }
  .experience-item:nth-child(2) .content-box {
    background: url(https://static001.geekbang.org/static/time/img/bg-blue.4c50f933.png) no-repeat 0 0/264px 100px;
  }
  .experience-item:nth-child(3) .content-box {
    background: url(https://static001.geekbang.org/static/time/img/bg-green.063d2152.png) no-repeat 0 0/264px 100px;
  }
 
</style>