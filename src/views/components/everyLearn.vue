<template>
  <div class="everyLearn">
    <div class="everyLearn-title" @click="Tolink(items.linkTitle)">
      <div class="title">
        {{ items.title }}
      </div>
      <div class="iconfont  icon-jiantou_liebiaoxiangyou_o toeveryLearnlink"></div>
    </div>
    <div class="subtitle">
      {{ items.description }}
    </div>
    <div class="everyLearn-list">
      <div 
        class="everyLearn-item"
        v-for="(list,index) in lists"
        :key="index"
        @mouseover="fnover(index)"
        @mouseleave="fnleave(index)"
        @click="Tolink(list.link)"
        :class="oindex === index ? 'boxshadow':''">
        <div class="video">
          <img :src="list.src" class="cover">
          <div class="mask">
            <img src="@/assets/images/subSrc.png" alt="" class="play">
            <div class="subcount">
              {{ list.num }}
            </div>
          </div>
        </div>
        <div class="everyLearn-detail">
          <div class="everyLearn-problem" :class="oindex === index ? 'hovercolor':''">
            {{ list.problem }}
          </div>
          <div class="everyLearn-author">
            {{ list.author }}
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
      oindex: -1,
      lists: []
    }
  },

  created(){
    getEveryCourseData().then(res => {
      this.items= res.data,
      this.lists = res.data.everyLearn
    })
  },

  methods:{
    fnover(index){
      this.oindex = index;
    },

    fnleave(index){
      this.oindex = -1
    },
    Tolink(url){
      window.open(url)
    }
  }
}
</script>

<style lang="scss" scoped>
.everyLearn-title {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .toeveryLearnlink {
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
  .everyLearn-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .everyLearn-item {
    margin-top: 24px;
    margin-right: 24px;
    width: 282px;
    height: 260px;
    background: #fff;
    box-shadow: 0 4px 30px 0 rgb(238 242 245 / 80%);
    border-radius: 8px;
    cursor: pointer;
    transition: box-shadow .2s linear;
    .video {
      border-radius: 8px 8px 0 0;
      position: relative;
      width: 282px;
      height: 159px;
      overflow: hidden;
      .cover {
        width: 282px;
        height: 159px;
        transition: all .2s ease;
        border-radius: 8px 8px 0 0;
      }
      .mask {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        bottom: 0;
        padding: 0 10px 0 10px;
        width: 282px;
        height: 32px;
        background: linear-gradient(180deg,transparent,rgba(0,0,0,.3));
        box-sizing: border-box;
        .play {
          width: 10px;
          height: 12px;
          cursor: pointer;
        }
        .subcount {
          font-size: 12px;
          font-weight: 500;
          color: #fff;
          line-height: 17px;
        }
      }
    }
    .everyLearn-detail {
      margin: 11px 12px 0 10px;
      .everyLearn-problem {
        font-size: 17px;
        font-weight: 500;
        color: #404040;
        line-height: 25px;
        cursor: pointer;
        transition: color .2s ease;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .hovercolor {
        color: #fa8919;
      }
      .everyLearn-author {
        margin-top: 6px;
        font-size: 15px;
        font-weight: 400;
        color: #888;
        line-height: 21px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
  .boxshadow {
    box-shadow: 4px 4px 20px 0 rgb(205 216 228 / 60%);
  }
</style>