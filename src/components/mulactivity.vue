<template>
  <div class="mulactivity">
    <div class="title">
      更多活动
    </div>
    <div class="mulactivity-list">
      <div 
        class="mulactivity-item"
        v-for="(item,index) in items"
        :key="index"
        @click="fnToLink(item.link)">
        <img :src="item.src" alt="" class="cover">
      </div>
    </div>
  </div>
</template>

<script>
  import { getMulactivityData } from '../axios/index.js'
  export default {
    name: 'mulactivity',

    data(){
      return{
        items: [],
      }
    },

    created(){
      getMulactivityData().then(res => {
        this.items = res.data
      })
    },

    methods: {
      fnToLink(url){
        window.open(url)
      }
    }
  }
</script>

<style lang="scss" scoped>
.mulactivity-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.mulactivity-item {
  margin-top: 24px;
  margin-right: 24px;
  cursor: pointer;
}
.mulactivity-item:nth-child(4n){
  margin-right: 0px;
}
.cover {
  width: 282px;
  height: 159px;
  border-radius: 8px;
  overflow: hidden;
}
</style>