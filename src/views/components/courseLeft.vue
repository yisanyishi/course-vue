<template>
  <div class="courseLeft">
    <div class="courseLeft-title" @click="Tolink('https://time.geekbang.org/resource')">
      <div class="title">课程</div>
      <div class="iconfont  icon-jiantou_liebiaoxiangyou_o tocourselink"></div>
    </div>
    <div class="subtitle">200+ 精品自学课，为你打造随身图书馆</div>
    <div class="courseLeft-list">
      <div 
        class="courseLeft-item"
        v-for="(item,index) in items"
        :key="index"
        @mouseover="fnover(index)"
        @mouseleave="fnleave(index)"
        @click="Tolink(item.link)"
        :class="oindex === index ? 'boxshadow':''">
        <div class="course-pic">
          <img :src="item.src" class="cover">
        </div>
        <div class="course-detail">
          <div class="course-title" :class="oindex === index ? 'hovercolor':''">
            {{ item.title }}
          </div>
          <div class="course-teacher">
            <div class="teacher-name">
              {{ item.name }}
            </div>
            <div class="teacher-info">
              {{ item.info }}
            </div>
          </div>
          <div class="course-num">
            {{ item.infoNum }}
          </div>
          <div class="course-price">
            <img src="@/assets/images/newsPerson.png" alt="" class="price-img">
            <div class="newPrice">
              {{ item.newPrice }}
            </div>
            <div class="oldPrice">
              {{ item.oldPrice }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getcourseLeftData } from '@axios/index.js'

export default {
  name: 'infoPack',
  data(){
    return {
      items: [],
      oindex: -1,
    }
  },

  created(){
    getcourseLeftData().then(res => {
      this.items= res.data
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
  .courseLeft-title {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .tocourselink {
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

  .courseLeft-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    // width: 918px;
  }

  .courseLeft-item {
    display: flex;
    padding: 16px 0 0 18px;
    margin-top: 24px;
    margin-right: 24px;
    width: 435px;
    height: 180px;
    background: #fff;
    box-shadow: 0 4px 30px 0 rgb(238 242 245 / 80%);
    border-radius: 8px;
    box-sizing: border-box;
    cursor: pointer;
    transition: box-shadow .2s linear;
    .course-pic {
      width: 115px;
      height: 152px;
      background: #eee;
      border-radius: 6px;
      overflow: hidden;
      .cover {
        width: 115px;
        height: 152px;
        transition: all .2s;
        border-radius: 6px;
      }
    }
    .course-detail {
      margin-left: 22px;
      padding-right: 12px;
      flex: 1;
      overflow: hidden;
      .course-title{
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
      .course-teacher {
        display: flex;
        margin-top: 10px;
        font-size: 16px;
        font-weight: 400;
        color: #888;
        line-height: 23px;
        .teacher-name {
          height: 26px;
          padding: 0 8px;
          line-height: 26px;
          background: #f2f3f6;
          border-radius: 3px;
          box-sizing: border-box;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          max-width: 100px;
          text-align: center;
        }
        .teacher-info {
          height: 26px;
          padding: 0 8px;
          line-height: 26px;
          background: #f2f3f6;
          border-radius: 3px;
          box-sizing: border-box;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          max-width: 150px;
          margin-left: 13px;
        }
      }
      .course-num {
        margin-top: 9px;
        font-size: 16px;
        font-weight: 400;
        color: #b2b2b2;
        line-height: 22px;
      }
      .course-price {
        margin-top: 31px;
        display: flex;
        align-items: center;
        .price-img {
          margin-right: 6px;
          width: auto;
          height: 17px;
        }
        .newPrice {
          margin-right: 8px;
          font-size: 20px;
          font-weight: 500;
          color: #fa8919;
          line-height: 26px;
        }
        .oldPrice {
          position: relative;
          top: 1px;
          font-size: 15px;
          font-weight: 400;
          color: #b2b2b2;
          line-height: 25px;
          text-decoration: line-through;
        }
      }
    }
  }
  .boxshadow {
    box-shadow: 4px 4px 20px 0 rgb(205 216 228 / 60%);
  }
</style>