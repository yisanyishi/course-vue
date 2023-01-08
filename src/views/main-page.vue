<template>
  <div class="main-page">
    <!-- header -->
    <div>
      <!-- 头部广告 -->
      <div 
        class="headad" 
        v-bind:style="{backgroundImage: backgroundColor}"
        v-if="closebtn"
        @click="fnHeadAd">
        <div class="headad-picture" :style="{backgroundImage: backgroundImage}">
          <span 
            class="iconfont icon-chacha close-btn" 
            @click='fnCloseBtn'
          >
          </span>
        </div>
      </div>
      <!-- 头部 -->
      <div class="header">
        <div class="header-wrapper">
          <a href="https://time.geekbang.org/" class="header-logo"></a>
          <div class="header-info">
            <div class="header-info-wrapper">
              <div 
                class="header-menu"
                v-for="(item,index) in items"
                :key="item.id"
                :class="isAcitive ===index ? 'isAcitive' : ''"
                @mouseover="downLoadover(index)"
                @mouseleave='downLoadleave(index)'
                @click="clickLink(item.link,$event)"
                >
                <span
                :class="item.sort === 2 ? 'vipLogo': item.sort === 3 ? 'enterprise': ''">
                  {{ item.title }}
                </span> 
                <div 
                  class="iconfont icon-xiangxia xiangxia" 
                  v-if="item.dropdown"
                  :class="rotate === index ? 'rotate': ''"
                >
                </div>
                <div :class="subItem" v-show="dropdown === index ? true : false">
                  <div
                    v-for="(item2,index2) in item.dropdown"
                    :key="index2"
                    class="item2"
                    @click="clickLink(item2.sublink,$event)">
                    <div class="item2-wrapper" style="display: inline-block">
                      {{ item2.subTitle }}
                      <img 
                        src="https://static001.geekbang.org/static/time/img/activity/new.png" 
                        alt="new" 
                        class="new"
                        v-if="item2.subnew">
                    </div>
                  </div>
                </div>

                <img 
                  src="	https://static001.geekbang.org/static/time/img/geek_elements/hot2.png" 
                  alt="hot" 
                  class="hot"
                  v-if="item.isNew">
              </div> 
            </div>
            <!-- 搜索框组件 -->
            <Search></Search>
          </div>
          <div class="userinfo" @click="logIn">
            <div>登录</div>
            <span class="iconfont icon-vertical_line vertical-line"></span>
            <div>注册</div>
          </div>
        </div>
      </div>
    </div>

    <!-- main-content -->
    <div class="container">
      <div class="main">
        <div class="menu-list">
          <div 
            class="menu-item"
            v-for="menuList in menuLists"
            :key="menuList.id"
            @click="clickToLink(menuList.link)">
            {{ menuList.value }}
          </div>
        </div>
        <!-- 图片轮播图 -->
        <carousel1></carousel1>
        <div class="user">
          <div class="benefit">
            <div class="benefit-title">
              注册即享88元红包
            </div>
            <img src="https://static001.geekbang.org/static/time/img/benefit@2x.33e54ad0.png" class="benefit-img">
            <div 
              class="benefit-login" 
              @click="clickToLink('https://account.geekbang.org/signin?redirect=https%3A%2F%2Ftime.geekbang.org%2F')">
              登录/注册
            </div>
          </div>
          <div class="line"></div>
          <div class="download">
            <div class="content">
              新人首次登录 App，海量课程免费学 7 天
            </div>
            <div 
              class="download-app"
              @click="clickToLink('https://time.geekbang.org/download')">
              下载App学习
              <span class="iconfont icon-jiantou_yemian_xiangyou du-right"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="learnPath">
        <div class="all-learn">
          <div class="all-title">
            学习路径
          </div>
          <div class="all-num">
            全部17个
            <span class="iconfont icon-jiantou_liebiaoxiangyou_o arrowdown"></span>
          </div>
        </div>
        <!-- 所有课程轮播图 -->
        <carousel2></carousel2>
      </div>
      <!-- 直播 -->
      <div class="core-block">
        <div class="module">
          <live></live>
          <infoPack></infoPack>
        </div>
      </div>
      <!-- 课程 -->
      <div class="core-block">
        <div class="module">
          <courseLeft></courseLeft>
          <courseRight></courseRight>
        </div>
      </div>
      <!-- 训练营 -->
      <div class="core-block">
        <div class="module">
          <bootcampLeft></bootcampLeft>
          <bootcampRight></bootcampRight>
        </div>
      </div>
      <!-- 每日推荐 -->
      <div class="core-block">
        <div class="module">
          <everyLearn></everyLearn>
          <everyadvice></everyadvice>
        </div>
      </div>
      <!-- 大厂案例 -->
      <div class="core-block">
        <div class="module">
          <case></case>
        </div>
      </div>
      <!-- 公开课-->
      <div class="core-block">
        <div class="module">
          <openClass></openClass>
        </div>
      </div>
      <!--为你推荐 -->
      <div class="core-block">
        <div class="module">
          <suggest></suggest>
        </div>
      </div>
      <!--更多活动 -->
      <div class="core-block">
        <div class="module">
          <mulactivity></mulactivity>
        </div>
      </div>
      <!--右侧菜单  -->
      <rightMenu></rightMenu>
    </div>

    <!-- 尾部 -->
    <footerEl></footerEl>
  </div>
</template>

<script>
  import { getHeaderAd, getHeaderInfo, getMenuListData} from '../axios/index.js'

 
  export default {
    name: 'main-page',

    data(){
      return {
       backgroundColor: '',
       backgroundImage: '',
       closebtn: true,
       items: [],
       isAcitive: 0,
       rotate: 0,
       dropdown: false,
       subItem: '',
       menuLists: '',
      }
    },

    created () {
      getMenuListData().then((res) => {
        this.menuLists = res.data
      }),
      getHeaderAd().then(res => {
        this.backgroundColor = `url(${res.data.backgroundColor})`;
        this.backgroundImage = `url(${res.data.backgroundImage})`;
      });
      if(sessionStorage.getItem('headAd')){
        this.closebtn = false
      };
      getHeaderInfo().then(res => {
        this.items = res.data;
      });
    },
    methods: {
      fnHeadAd: () => {
        getHeaderAd().then(res => {
          window.open(res.data.link)
        })
      },

      fnCloseBtn: function () {
        sessionStorage.setItem('headAd',true)
        this.closebtn = false
      },

      downLoadleave (index) {
        this.isAcitive = 0;
        this.rotate = 're-rotate';
        this.dropdown = false;
      },

      downLoadover (index) {
        this.isAcitive = index
        this.rotate = index
        this.dropdown = index
        this.subItem = index === 1 ? 'sub-item1': 'sub-item2' 
      },

      clickLink(url,event){
        event.stopPropagation()
        window.open(url)
      },

      clickToLink(url){
        window.open(url)
      },

      logIn(){
        window.open('https://account.geekbang.org/signin?redirect=https%3A%2F%2Ftime.geekbang.org%2F')
      }

    },

    components: {
      'Search': () => import('../components/search.vue'),
      // 'carousel': () => import('../components/carousel.vue'),
      'carousel1': () => import('../components/carousel1.vue'),
      'carousel2': () => import('../components/carousel2.vue'),
      'live': () => import('../components/live.vue'),
      'infoPack': () => import('../components/infoPack.vue'),
      'courseLeft': () => import('../components/courseLeft.vue'),
      'courseRight': () => import('../components/courseRight.vue'),
      'bootcampLeft': () => import('../components/bootcampLeft.vue'),
      'bootcampRight': () => import('../components/bootcampRight.vue'),
      'everyLearn': () => import('../components/everyLearn.vue'),
      'everyadvice': () => import('../components/everyadvice.vue'),
      'case': () => import('../components/case.vue'),
      'openClass': () => import('../components/openClass.vue'),
      'suggest': () => import('../components/suggest.vue'),
      'mulactivity': () => import('../components/mulactivity.vue'),
      'footerEl': () => import('../components/footerEl.vue'),
      'rightMenu': () => import('../components/rightMenu.vue'),
    }
  }
</script>

<style lang="scss" scoped>
  .headad {
    position: relative;
    width: 100%;
    height: 69px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    .headad-picture {
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate3d(-50%, 0, 0);
      height: 69px;
      width: 1200px;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .close-btn {
      position: absolute;
      top: 25px;
      right:-30px ;
      text-align: center;
      color: #fff6ea;
      cursor: pointer;
    }
  }

  .header {
    height: 65px;
    background: #fff;
    border-bottom: 1px solid #eaeaea;
    .header-wrapper {
      width: 1200px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
    }
    .header-logo {
      width: 120px;
      height: 65px;
      background-image: url(https://static001.geekbang.org/static/time/img/geek_elements/logo-wap.png);
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: contain;
    }
    .header-info {
      position: relative;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      .header-info-wrapper {
        width: 700px;
        display: flex;
        text-align: center;
        opacity: 1;
        transition: opacity .3s ease-out;
        white-space: nowrap;
      }
      .header-menu {
        display: flex;
        align-items: center;
        line-height: 20px;
        font-size: 16px;
        position: relative;
        padding: 8px 14px;
        font-weight: 500;
        transition: color .2s ease;
        white-space: nowrap;
      }
    }
    .isAcitive {
      color: #fa8919;
    }
  }

  .xiangxia {
    margin-left:1px;
    font-size: 12px;
    color:#353535;
    line-height: 20px;
    font-weight: 700;
  }
  .hot {
    position: absolute;
    width: 22px;
    height: 10px;
    top: 0px;
    right: 2px;
  }
  .vipLogo {
    display: flex;
    padding-left: 22px;
    background: no-repeat left 1px top 2px/18px auto;
    background-image: url(https://static001.geekbang.org/resource/image/63/ea/63914eeefa218c3b5c064f9ca9fdfdea.png);
  }

  .enterprise {
    padding-left: 22px;
    background: no-repeat left 1px top 2px/16px auto;
    background-image: url(https://static001.geekbang.org/resource/image/7c/50/7c298168b3cc5eb79f8e8abc12e71450.png);
  }

  .rotate {
    color: #fa8919; 
    transform: rotate(180deg);
    transition: transform .6s;
  }

  .re-rotate {
    color: #353535;
    transform: rotate(0deg);
    transition: transform .6s;
    animation: move 0.1s 1 linear;
  }

  .sub-item1 {
    background: #fff;
    color: #353535;
    position: absolute;
    width: 115px;
    top: 35px;
    right:-12px;
    border-radius: 14px;
    box-shadow: 0 4px 30px 0 rgb(238 242 245 / 90%);
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .sub-item2 {
    background: #fff;
    color: #353535;
    position: absolute;
    width: 180px;
    top: 35px;
    right: -50px;
    border-radius: 14px;
    box-shadow: 0 4px 30px 0 rgb(238 242 245 / 90%);
    z-index: 1;
  }

  .new {
    position: absolute;
    width: 22px;
    height: 10px;
    top: -8px;
    right: -20px;
  }

  .item2-wrapper {
    position: relative;
  }

  .item2 {
    padding: 10px 0; 
  }
 
 .item2:hover {
   background-color: #f7efe6;
 }

 .userinfo {
    display: flex;
    justify-content: center;
    font-size: 16px;
    color: #888;
    height: 65px;
    line-height: 65px;
    font-weight: 400;
    cursor: pointer;
 }

 .vertical-line {
    margin: 0 4px;
 }

 //container
 .container {
    position: relative;
    width: 1200px;
    margin: 0 auto 120px;
    scroll-behavior: smooth;
 }
 .main {
    display: flex;
    margin-top: 16px;
    height: 400px;
 }
 .menu-list {
    width: 143px;
    padding: 7px 8px;
    background: #fff;
    box-shadow: 0 4px 30px 0 rgb(238 242 245 / 90%);
    border-radius: 14px;
    box-sizing: border-box;
 }

 .menu-item {
    padding: 3px 0;
    margin-top: 7px;
    text-align: center;
    border-radius: 17px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    color: #404040;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    &:hover {
      background: #fbf5ee;
    }
 }

 .user {
  width: 202px;
  height: 400px;
  padding: 0 0 22px;
  background: no-repeat url(data:image/png;base64,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) left 0 top 172px/32px auto,#fff;
  box-shadow: 0 4px 30px 0 rgb(238 242 245 / 80%);
  border-radius: 14px;
  box-sizing: border-box;
 }

 .benefit {
  display: flex;
  flex-direction: column;
  align-items: center; /*侧轴子元素*/
  justify-content: center;
  padding: 41px 0 30px;
  .benefit-title {
    font-size: 16px;
    font-weight: 500;
    color:#fa8919;
    height: 22px;
    line-height: 22px;
  }
  .benefit-img {
    width: 183px;
    height: 141px;
    padding-bottom: 6px;
  }
  .benefit-login {
    width: calc(100% - 30px);
    height: 34px;
    line-height: 34px;
    text-align: center;
    margin: 0 15px;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    background: #fa8919;
    border-radius: 18px;
    cursor: pointer;
    &:hover {
      background-color: #ff7800;
    }
  }
}

.line {
  width: 160px;
  height: 1px;
  margin: 0 auto;
  background: #e8e8e8;
}

.download {
  padding-bottom: 42px;
  .content {
    font-size: 13px;
    text-align: center;
    width: 176px;
    height: 36px;
    margin: 23px auto 7px;
    font-weight: 400;
    color: #404040;
    line-height: 18px;
  }
  .download-app {
    display:flex;
    justify-content: center;
    align-items: center;
    height: 19px;
    font-weight: 500;
    color: #fa8919;
    line-height: 19px;
    cursor: pointer;
    font-size: 13px;
    text-align: center;
  }
  .du-right {
  width: 8px;
  font-size: 16px;
  font-weight: 400;
  margin-left:-3px;
  }
}

.learnPath {
  display: flex;
  align-items: center;
  margin-top: 34px;
  .all-learn {
    flex-shrink: 0;
    width: 111px;
    height: 76px;
    padding: 14px 20px 14px 16px;
    background: #fff;
    box-shadow: 0 4px 30px 0 rgb(238 242 245 / 90%);
    border-radius: 8px;
    box-sizing: border-box;
    cursor: pointer;
  }
  .all-title {
    height: 22px;
    line-height: 22px;
    font-size: 16px;
    font-weight: 500;
    color: #404040;
  }
  .all-learn:hover .all-title {
    color: #fa8919;
  }
  .all-num {
    margin-top: 6px;
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
    color: #888;
    height: 17px;
    line-height: 17px;
  }
  .arrowdown {
    font-size: 20px;
    margin-left: -3px;
  }
}

.core-block {
  display: flex;
  justify-content: space-between;
}

.module {
  margin-top: 71px;
  display: flex;
  justify-content: space-between;
}


</style>