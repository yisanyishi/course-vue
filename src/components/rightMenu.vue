<template>
  <div class="rightMenu">
    <div class="rightMenu-wrapper">
      <div 
        class="rightMenu-item"

        v-for="(item,index) in items"
        :key="index"
        @mouseover="fnover(index)"
        @mouseleave="fnleave(index)"
        @click="Tolink(item.link)"
        >
        <div class="rightMenu-list newlog" :class="oindex === index ? 'hovercolor':''">
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getRightMenuData } from '../axios/index.js'

export default {
  name: 'infoPack',
  data(){
    return {
      items: [],
      oindex: -1,
    }
  },

  created(){
    getRightMenuData().then(res => {
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
.rightMenu {
  position: fixed;
  z-index: 99;
  top: 50%;
  right: 0;
  transform: translate3d(0,-50%,0);
  .rightMenu-wrapper {
    width: 98px;
    background: #fff;
    box-shadow: 0 4px 30px 0 rgb(238 242 245 / 80%);
    border-radius: 8px 0 0 8px;
    margin-top: 20px;
    padding: 13px 0;
    &:hover {
      box-shadow: 4px 4px 20px 0 rgb(205 216 228 / 60%);
    }
  }
}
.rightMenu-item {
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 15px;
  height: 40px;
  cursor: pointer;
  &:hover {
    background-color: #fbf5ee;
  }
  &:hover .rightMenu-list{
    color: #fa8919;
  }
}
.rightMenu-list {
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  color: #888;
}

// .newlog {
//   background: no-repeat url(https://static001.geekbang.org/static/time/img/activity/new.png) 59px 6px/21px 10px;
// }

</style>