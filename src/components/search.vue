<template>
  <div class="header-search">
    <div class="input-wrapper">
      <input 
        type="text" 
        maxlength='100' 
        placeholder="高并发改造" 
        class="input"
        v-model="value"
        @focus="focusSearch"
        @blur="blurSearch"
        ref="searchInput">
        <div class="dropdown" v-show="dropdown">
          <div class="hot-title" v-if="value === ''">热门搜索</div>
          <div :class="value ==='' ? 'search-wrapper1': 'search-wrapper2' ">
            <div
              v-for="item in items" 
              :key='item.id'
              @mousedown="fnlink(item.link,item.value)"
              :class="value ==='' ? 'hotitem1': 'hotitem2'">
              <img :src="imageSrc(item.sort)" v-if="item.sort" class="minlog">
              <span>{{ item.value }}</span>
            </div>
          </div>         
        </div>
    </div>
    <div class="search-btn" @click="searchLink">
      <span class="iconfont icon-search search-arrow"></span>
    </div>
  </div>
</template>

<script>
  import { getSearch, getSearchLog } from '../axios/index.js'

  export default {
    name: 'Search',

    data(){
      return {
        items: [],
        dropdown: false,
        value: '',
      }
    },

    watch: {
      value: function(){
        getSearch({inputValue: this.value}).then(res => {
          if(res.data){
            this.items = res.data.lists;
            //判断现在是否聚焦
            if(this.$refs.searchInput === document.activeElement.tarName){
              this.dropdown = true;
            }
          }else{
            this.dropdown = false
          }
        });
      }
    },

    methods: {
      focusSearch(){
        getSearch({inputValue: this.value}).then(res => {
          if(res.data){
            this.items = res.data.lists
            this.dropdown = true
          }else {
            this.dropdown = false
          }
        });
      },

      blurSearch(){
          this.dropdown = false
      },

      imageSrc(sort){
        if(sort === 1){
          return 'https://static001.geekbang.org/static/time/img/geek_elements/new-icon.png'
        } else if(sort === 2){
          return 'https://static001.geekbang.org/static/time/img/geek_elements/hot-icon.png'
        }
      },

      fnlink(link,clickvalue) {
        this.value = clickvalue;
        this.dropdown = false;
        window.open(link);
      },

      searchLink(){
        getSearchLog({inputValue: this.value}).then((res) => window.open(res.data.link)).catch((err) => console.log(err))
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header-search {
    margin-left: 20px;
    width: 240px;
    height: 36px;
    background: #f6f7fb;
    border-radius: 20px;
    padding-right: 12px;
    position: relative;
    display: flex;
    align-items: center;
    box-sizing: border-box;
  }
  .input-wrapper {
    flex: 1;
    margin: 0 15px;
    .input {
      width: 100%;
      font-size: 12px;
      font-weight: 400;
      color: #353535;
      outline: none;
      border: none;
      background: transparent;
    }
  }

  .search-btn {
    position: relative;
    width: 32px;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #888;
    text-align: center;
    cursor: pointer;
  }

  .search-arrow {
    font-size: 20px;
  }

  .dropdown {
    position: absolute;
    z-index: 9999;
    top: 44px;
    left: 0;
    width: 240px;
    background: #fff;
    box-shadow: 0 0 9px 0 rgb(198 198 223 / 24%);
    border-radius: 6px;
    padding: 13px 0 10px 15px;
    box-sizing: border-box;
  }

  .hot-title {
    position: relative;
    padding-left: 16px;
    font-size: 12px;
    font-weight: 400;
    color: #888;
    text-align: left;
    margin-bottom: 14px;
  }

  .hot-title::before {
    content: '';
    position: absolute;
    top: 0px;
    left:0px;
    width: 17px;
    height: 20px;
    background: url('https://static001.geekbang.org/static/time/img/geek_elements/fire.png') no-repeat 50%;
    background-size: contain;
  }

  .search-wrapper1 {
    display: flex;
    flex-wrap: wrap;
    margin-top: 14px;
  }

  .search-wrapper2 {
    display: flex;
    flex-wrap: wrap;
  }

  .hotitem1 {
    display: flex;
    font-size: 13px;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    margin-bottom: 15px;
    min-width: 50px;
    height: 30px;
    padding: 0 12px;
    background: #f8f9fc;
    border-radius: 15px;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
      background-color: #f3f5fc;
    }
  }

  .hotitem2 {
    display: flex;
    align-items: center;
    width: 80%;
    height: 38px;
    padding: 0 16px;
    font-size: 13px;
    font-weight: 400;
    color: #4c4c4c;
    text-align: left;
    cursor: pointer;
    &:hover {
      background-color: #f3f5fc;
    }
  }

  .minlog {
    width: 30px;
    height: 23px;
    margin-right: 1px;
    margin-left: -3px;
  }
</style>