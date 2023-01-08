<template>
  <div class="footer">
    <div class="footer-content">
      <div class="footer-main">
        <div class="gklogo">
          <img :src="items.logoLink" alt="">
          <div class="privacy">
            <a :href="items.agreements" target="_blank" class="agreements">
              用户协议
            </a>
            <a :href="items.privacyPolicy" target="_blank" class="privacyPolicy">
              隐私协议
            </a>
          </div>
        </div>
        <div class="contact">
          <div class="contact-title">
            联系我们
          </div>
          <div class="contact-content">
            <div class="txt">
              联系电话: {{ items.telephone }}
            </div>
            <div class="txt">
              联系邮箱: {{ items.Email }}
            </div>
            <div class="txt">
              公司地址: {{ items.address }}
            </div>
          </div>
        </div>
        <div class="business">
          <div class="business-title">
            商务合作
          </div>
          <div class="business-content">
            <a :href="items.marketCooperation" target="_blank" class="business-txt">
              市场合作
            </a>
            <a :href="items.selfPromotion" target="_blank" class="business-txt">
              自助推广
            </a>
            <a :href="items.featureAuthor" target="_blank" class="business-txt">
              推荐作者
            </a>
            <a :href="items.enterpriseCooperation" target="_blank" class="business-txt">
              企业合作
            </a>
          </div>
        </div>
        <div class="attention">
          <div class="attention-title">
            关注我们
          </div>
          <div class="code">
            <div class="qr-code">
              <img :src="items.QRcode" alt="">
            </div>
            <div class="scan-code">
              扫码关注
              <br>
              极客时间服务号
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        <div class="">
          Copyright © 2023, 极客邦控股（北京）有限公司 &nbsp;&nbsp;
        </div>    
        <a href="http://www.beian.miit.gov.cn" target="_blank" class="copyrighttxt">
          京 ICP 备 16027448号-3.&nbsp;&nbsp;
        </a>
        <div>
          <img src="https://static001.geekbang.org/static/time/img/geek_elements/beian.png" class="police">
          <a 
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502037384" 
            target="_blank" 
            class="copyrighttxt">
            京公网安备 11010502037384号
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getFooterData } from '@axios/index.js'

export default {
  name: 'footerEl',

  data() {
    return  {
      items:''
    }
  },

  created(){
    getFooterData().then(res => {
      this.items = res.data
    })
  },
}
</script>

<style lang="scss" scoped>
.footer {
  background: #fcfcfc;
}
.footer-content {
  width: 1200px;
  height: 255px;
  margin: 0 auto;
  padding-top: 41px;
}
.footer-main {
  display: flex;
}
.gklogo {
  margin-top: -5px;
  img {
    width: 173px;
    height: 42px;
  }
  .privacy {
    margin-top: 30px;
    padding-left: 40px;
    text-align: left;
    .agreements {
      display: block;
      margin-bottom: 18px;
      font-size: 12px;
      font-weight: 500;
      color: #6c7684;
      line-height: 17px;
      transition: all .3s;
      &:hover {
        color: #fa8919;
      }
    }
    .privacyPolicy {
      display: block;
      margin-bottom: 18px;
      font-size: 12px;
      font-weight: 500;
      color: #6c7684;
      line-height: 17px;
      transition: all .3s;
      &:hover {
        color: #fa8919;
      }
    }
  }
}
.contact{
  margin-left: 200px;
  text-align: left;
  .contact-title {
    font-size: 18px;
    font-weight: 500;
    color: #6c7684;
    line-height: 16px;
  }
  .contact-content {
    margin-top: 22px;
    .txt {
      margin-bottom: 18px;
      font-size: 12px;
      font-weight: 500;
      color: #6c7684;
      line-height: 17px;
    }
  }
}
.business {
  margin-left: 100px;
  text-align: left;
  .business-title {
    font-size: 18px;
    font-weight: 500;
    color: #6c7684;
    line-height: 16px;
  }
  .business-content{
    margin-top: 22px;
    .business-txt {
      display: block;
      margin-bottom: 18px;
      transition: all .3s;
      font-size: 12px;
      font-weight: 500;
      color: #6c7684;
      line-height: 17px;
      &:hover {
        color: #fa8919;
      }
    }
  }
}
.attention {
  margin-left: 108px;
  text-align: left;
  .attention-title {
    font-size: 18px;
    font-weight: 500;
    color: #6c7684;
    line-height: 16px;
  }
  .code {
    display: flex;
    .qr-code{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 65px;
      height: 65px;
      margin-top: 13px;
      border-radius: 6px;
      border: 1px solid #f2f2f2;
      box-sizing: border-box;
      img {
        width: 51px;
        height: 51px;
      }
    }
    .scan-code {
      margin-top: 30px;
      margin-left: 7px;
      font-size: 12px;
      font-weight: 400;
      color: #6c7684;
      line-height: 17px;
    }
  }
}
.copyright {
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-top: 58px;
  font-size: 12px;
  font-weight: 400;
  color: #b2b2b2;
  line-height: 18px;
  .copyrighttxt {
    text-decoration: none;
    font-size: 12px;
    font-weight: 400;
    color: #b2b2b2;
    line-height: 18px;
    cursor: pointer;
  }
  .police {
    position: relative;
    top: 2px;
    width: 12px;
    height: 12px;
    vertical-align: text-top;
  }
}
</style>
