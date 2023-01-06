// function ajax (querytype,url){
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.responseType = 'json';
//     xhr.open(querytype, url);
//     xhr.send();
//     xhr.onreadystatechange = function (){
//       if(xhr.readyState === 4){
//         if(xhr.status >= 200 && xhr.status <300){
//           resolve(xhr.response)
//         } else{
//           reject(xhr.status)
//         }
//       }
//     }
//   })
// }

// var toAdvertisement = ajax('get','http://127.0.0.1:8001/headerAd')
let commonLink = 'https://time.geekbang.org/'
const baseUrl = 'https://time.geekbang.org/';
const fileBaseUrl = 'https://static001.geekbang.org/';


const headAdData = {
  id: 'JANS',
  backgroundColor: 'https://static001.geekbang.org/resource/image/4a/1d/4abe4273ded914dcc0e1a3a0716c3a1d.png',
  backgroundImage: 'https://static001.geekbang.org/resource/image/a0/e4/a0017448ab6e4fa6949bb59e306165e4.png',
  link: 'https://time.geekbang.org/activity/promo?page_name=page_560'
}

const headerInfoData = [
  {
    id: 'ASD',
    title: '首页',
    isNew: false,
    link: commonLink,
    sort: 1,
  },{
    id: 'ASF',
    title: '讲堂',
    isNew: true,
    link: `${commonLink}resource`,
    sort: 1,
    dropdown: [
      {
        subTitle: '课程',
        sublink: `${commonLink}resource`
      },{
        subTitle: '每日一课',
        sublink: `${commonLink}dailylesson`
      },{
        subTitle: '大厂案例',
        sublink: `${commonLink}qconplus/home`
      }
    ]
  },{
    id: 'ASG',
    title: '训练营',
    isNew: true,
    link: 'https://u.geekbang.org/?utm_source=time_web&utm_medium=menu&utm_term=timewebmenu',
    sort: 1,
    dropdown: [
      {
        subTitle: 'Java项目实战营',
        sublink: `https://u.geekbang.org/subject/java5th?utm_source=time_web&utm_medium=menu&utm_term=timewebmenu&utm_identify=geektime&utm_content=menu&utm_campaign=timewebmenu&gk_cus_user_wechat=university`,
        subnew: true
      }, {
        subTitle: '高级Java工程师体系课',
        sublink: `https://u.geekbang.org/subject/java4th?utm_source=time_web&utm_medium=menu&utm_term=timewebmenu&utm_identify=geektime&utm_content=menu&utm_campaign=timewebmenu&gk_cus_user_wechat=university`,
        subnew: false
      }, {
        subTitle: '大数据项目实战营',
        sublink: `https://u.geekbang.org/subject/bigdata2nd?utm_source=time_web&utm_medium=menu&utm_term=timewebmenu&utm_identify=geektime&utm_content=menu&utm_campaign=timewebmenu&gk_cus_user_wechat=university`,
        subnew: true
      }, {
        subTitle: '前端进阶特训营',
        sublink: `https://u.geekbang.org/subject/fe4th?utm_source=time_web&utm_medium=menu&utm_term=timewebmenu&utm_identify=geektime&utm_content=menu&utm_campaign=timewebmenu&gk_cus_user_wechat=university`,
        subnew: false
      }, {
        subTitle: 'Go 实战训练营',
        sublink: `https://u.geekbang.org/subject/go2nd?utm_source=time_web&utm_medium=menu&utm_term=timewebmenu&utm_identify=geektime&utm_content=menu&utm_campaign=timewebmenu&gk_cus_user_wechat=university`,
        subnew: true
      }, {
        subTitle: '云原生训练营',
        sublink: `$https://u.geekbang.org/subject/cloudnative?utm_source=time_web&utm_medium=menu&utm_term=timewebmenu&utm_identify=geektime&utm_content=menu&utm_campaign=timewebmenu&gk_cus_user_wechat=university`,
        subnew: false
      }, {
        subTitle: '架构实战营',
        sublink: `https://u.geekbang.org/subject/arch2nd?utm_source=time_web&utm_medium=menu&utm_term=timewebmenu&utm_identify=geektime&utm_content=menu&utm_campaign=timewebmenu&gk_cus_user_wechat=university`,
        subnew: false
      },{
        subTitle: '算法训练营',
        sublink: `https://u.geekbang.org/subject/algorithm3rd?utm_source=time_web&utm_medium=menu&utm_term=timewebmenu&utm_identify=geektime&utm_content=menu&utm_campaign=timewebmenu&gk_cus_user_wechat=university`,
        subnew: false
      }
    ]
  },{
    id: 'ASH',
    title: '超级会员',
    isNew: false,
    link: `${commonLink}hybrid/next/pvip/home`,
    sort: 2,
    vipLogo: true
  },{
    id: 'AZS',
    title: '部落',
    isNew: false,
    sort: 1,
    link: `${commonLink}home`
  },{
    id: 'AWS',
    title: '兑换中心',
    isNew: false,
    sort: 1,
    link: `${commonLink}service/exchange`
  },{
    id: 'SAD',
    title: '企业版',
    isNew: false,
    link: `${commonLink}?utm_source=geektimeWeb&utm_medium=menu&utm_campaign=entranceplatform&gk_source=2021090101_geektimeweb_menu`,
    sort: 3,
    enterprise: true
  },{
    id: 'SDF',
    title: '浏览器插件',
    isNew: false,
    sort: 1,
    link: `${commonLink}download/extensions`
  }
]

const searchData = [
  {
    id: 'ASD',
    value: '',
    lists: [
      {
        sort: 1,
        value: 'GitOps实战',
        link: 'https://time.geekbang.org/search?q=GitOps%E5%AE%9E%E6%88%98'
      },{
        sort: 2,
        value: 'Go',
        link: 'https://time.geekbang.org/search?q=Go'
      },{
        sort: 2,
        value: 'k8s',
        link: 'https://time.geekbang.org/search?q=k8s'
      },{
        value: 'K8s',
        link: 'https://time.geekbang.org/search?q=K8s'
      },{
        value: 'rust',
        link: 'https://time.geekbang.org/search?q=rust'
      },{
        value: 'MySQL',
        link: 'https://time.geekbang.org/search?q=MySQL'
      },{
        value: 'Python',
        link: 'https://time.geekbang.org/search?q=Python'
      },{
        value: 'Redis',
        link: 'https://time.geekbang.org/search?q=Redis'
      },{
        value: 'Kafka',
        link: 'https://time.geekbang.org/search?q=Khttps://time.geekbang.org/search?q=Kafka'
      },{
        value: 'Spring',
        link: 'https://time.geekbang.org/search?q=Spring'
      }
    ]
  },{
    id:'ERF',
    value: 'GitOps实战',
    lists: [
      {
        value: 'GitOps实战',
        link: 'https://time.geekbang.org/search?q=GitOps%E5%AE%9E%E6%88%98'
      },{
        value: 'GIt',
        link: 'https://time.geekbang.org/search?q=git'
      }
    ]
  },{
    id:'HUJ',
    value: 'Go',
    lists: [
      {
        value: 'GO',
        link: 'http://localhost:8010/Geek-vue/main-page'
      },{
        value: 'go',
        link: 'https://time.geekbang.org/search?q=go'
      },{
        value: 'golang',
        link: 'https://time.geekbang.org/search?q=golang'
      },{
        value: '工具流行',
        link: 'https://time.geekbang.org/search?q=%E5%B7%A5%E5%85%B7%E6%B5%81%E8%A1%8C'
      },{
        value: '工具2018',
        link: 'https://time.geekbang.org/search?q=%E5%B7%A5%E5%85%B72018'
      }
    ]
  }
]

const searchlogData = [{
  value: 'GitOps实战',
  link: 'https://time.geekbang.org/search?q=GitOps%E5%AE%9E%E6%88%98'
},{
  value: 'Go',
  link: 'https://time.geekbang.org/search?q=Go'
},{
  value: 'k8s',
  link: 'https://time.geekbang.org/search?q=k8s'
},{
  value: 'K8s',
  link: 'https://time.geekbang.org/search?q=K8s'
},{
  value: 'rust',
  link: 'https://time.geekbang.org/search?q=rust'
},{
  value: 'MySQL',
  link: 'https://time.geekbang.org/search?q=MySQL'
},{
  value: 'Python',
  link: 'https://time.geekbang.org/search?q=Python'
},{
  value: 'Redis',
  link: 'https://time.geekbang.org/search?q=Redis'
},{
  value: 'Kafka',
  link: 'https://time.geekbang.org/search?q=Khttps://time.geekbang.org/search?q=Kafka'
},{
  value: 'Spring',
  link: 'https://time.geekbang.org/search?q=Spring'
},{
  value: 'GIt',
  link: 'https://time.geekbang.org/search?q=git'
},{
  value: 'go',
  link: 'https://time.geekbang.org/search?q=go'
},{
  value: 'golang',
  link: 'https://time.geekbang.org/search?q=golang'
},{
  value: '工具流行',
  link: 'https://time.geekbang.org/search?q=%E5%B7%A5%E5%85%B7%E6%B5%81%E8%A1%8C'
},{
  value: '工具2018',
  link: 'https://time.geekbang.org/search?q=%E5%B7%A5%E5%85%B72018'
},{
  value: '',
  link: 'https://time.geekbang.org/search?q=%E9%AB%98%E5%B9%B6%E5%8F%91%E6%94%B9%E9%80%A0'
}]

const menuListData = [
  {
    id: 'ASD',
    value: '前端/移动',
    link: 'https://time.geekbang.org/resource?m=0&d=5&c=5'
  },{
    id: 'ASF',
    value: '计算机基础',
    link: 'https://time.geekbang.org/resource?m=0&d=9&c=9'
  },{
    id: 'ASG',
    value: '后端/架构',
    link: 'https://time.geekbang.org/resource?m=0&d=3&c=3'
  },{
    id: 'ASH',
    value: 'AI/大数据',
    link: 'https://time.geekbang.org/resource?m=0&d=8&c=8'
  },{
    id: 'ASJ',
    value: '运维/测试',
    link: 'https://time.geekbang.org/resource?m=0&d=6&c=6'
  },{
    id: 'ASZ',
    value: '产品/运营',
    link: 'https://time.geekbang.org/resource?m=0&d=7&c=7'
  },{
    id: 'ASX',
    value: '管理/成长',
    link: 'https://time.geekbang.org/resource?m=0&d=4&c=4'
  },{
    id: 'ASC',
    value: '人文/兴趣',
    link: 'https://time.geekbang.org/resource?m=0&d=68&c=68'
  },{
    id: 'ASV',
    value: '面试专场',
    link: 'https://time.geekbang.org/resource?m=0&d=69&c=69'
  },{
    id: 'AER',
    value: '个人成长',
    link: 'https://time.geekbang.org/resource?m=0&d=71&c=71'
  }
]

const carouselData = [
  {
    src: `https://static001.geekbang.org/resource/image/yy/6a/yy0eb5c8b4088c55b6cdfbafa679106a.jpg?x-oss-process=image/resize,m_fill,h_400,w_818`,
    ahref: 'https://app.jingsocial.com/microFrontend/leadGeneration/jsf-leads/list/webinar/QK7NLUyg47zkeoEPhz3s57/X24bpTDB3qDrsbMAoqDhke'
  },
  {
    src: `https://static001.geekbang.org/resource/image/81/4f/81da1dbbe7d97faecd90876aa8c9744f.jpg?x-oss-process=image/resize,m_fill,h_400,w_818`,
    ahref: `https://time.geekbang.org/activity/promo?page_name=page_561`
  },
  {
    src: `https://static001.geekbang.org/resource/image/59/99/590d99a8106bebdf35d85b542c84a599.png?x-oss-process=image/resize,m_fill,h_400,w_818`,
    ahref: `https://u.geekbang.org/subject/intro/1000947?channel=6246a50913ada&utm_term=banner`
  },
  {
    src: `https://static001.geekbang.org/resource/image/65/60/659fe2da0e1b38048bda93062b3c1a60.jpg?x-oss-process=image/resize,m_fill,h_400,w_818`,
    ahref: `https://time.geekbang.org/column/intro/100124001`
  },
  {
    src: `https://static001.geekbang.org/resource/image/57/7f/5739338fcf7yyf1acd73ae4b911c657f.png?x-oss-process=image/resize,m_fill,h_400,w_818`,
    ahref: 'https://time.geekbang.org/activity/promo?page_name=page_561'
  }
]

const carousel2Data = [
  {
    listItem:[
      { 
        id:'ASD',
        course: 'Java工程师',
        courseNum: '27门课程',
        src:`${fileBaseUrl}resource/image/ee/9d/ee4e027522f8f7144b12bcd3d8f6b29d.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp`,
        href: `${baseUrl}learning/path-detail/1`,
      },
      {
        id:'SAD',
        course: '结构师',
        courseNum: '26门课程',
        src: `${fileBaseUrl}resource/image/30/36/304bfd86dea2698cd6c8147ee8f63c36.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp`,
        href: `${baseUrl}learning/path-detail/5`,
      },
      {
        id:'SAA',
        course: '运维课程师',
        courseNum: '23门课程',
        src: `${fileBaseUrl}resource/image/25/d0/2541de63f52593f6ea77ae38441d46d0.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp`,
        href: `${baseUrl}learning/path-detail/9`,
      },
      {
        id:'SAS',
        course: '机器学习工程师',
        courseNum: '13门课程',
        src: `${fileBaseUrl}resource/image/99/02/996a69d911814a20eb71012fca4e2002.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp`,
        href: `${baseUrl}learning/path-detail/26`,
      },
      {
        id:'AAA',
        course: '计算机基础知识',
        courseNum: '11门课程',
        src: `${fileBaseUrl}resource/image/0a/4e/0a03a1e02f4a4bee36989b5a8183274e.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp`,
        href: `${baseUrl}learning/path-detail/3`,
      },
    ]
  },{
    listItem: [
      {
        id:'AAQ',
        course: 'Go工程师',
        courseNum: '16门课程',
        src: `${fileBaseUrl}resource/image/8c/c5/8c01e6fea05ef735b122fa6ce9aaa5c5.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp`,
        href: `${baseUrl}learning/path-detail/11`,
      },
      {
        id:'AAW',
        course: '前端工程师',
        courseNum: '23门课程',
        src: `${fileBaseUrl}resource/image/d9/1c/d939189d3152c6d408d2408013608d1c.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp`,
        href: `${baseUrl}learning/path-detail/6`,
      },
      {
        id:'AAE',
        course: '测试工程师',
        courseNum: '18门课程',
        src: `${fileBaseUrl}resource/image/47/3d/4719c58c939a153311e22936d9640c3d.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp`,
        href: `${baseUrl}learning/path-detail/2`,
      },
      {
        id:'SDF',
        course: '团队Leader',
        courseNum: '8门课程',
        src: `${fileBaseUrl}resource/image/d9/eb/d947e24d99fbb947d64a3c00b2af18eb.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp`,
        href: `${baseUrl}learning/path-detail/10`,
      },
      {
        id:'AAR',
        course: 'Python工程师',
        courseNum: '19门课程',
        src: `${fileBaseUrl}resource/image/d6/18/d6cc801441d3a8ed981e2b2665d84518.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp`,
        href: `${baseUrl}learning/path-detail/7`,
      },
    ]
  },{
    listItem: [
      {
        id:'AAT',
        course: '产品经理',
        courseNum: '13门课程',
        src: `${fileBaseUrl}resource/image/d4/cc/d47d898c4c555325ca5e0e7d6bd707cc.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp`,
        href: `${baseUrl}learning/path-detail/8`,
      },
      {
        id:'AAY',
        course: 'IOS工程师',
        courseNum: '7门课程',
        src: `${fileBaseUrl}resource/image/46/3c/46747fb5329b26f9826519446eda6f3c.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp`,
        href: `${baseUrl}learning/path-detail/12`,
      },
      {
        id:'AAU',
        course: 'Android工程师',
        courseNum: '8门课程',
        src: `${fileBaseUrl}resource/image/dc/a3/dc96f63ca8baea2f6d8ec8e192a353a3.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp`,
        href: `${baseUrl}learning/path-detail/13`,
      },
      {
        id:'AAI',
        course: '云原生工程师',
        courseNum: '14门课程',
        src: `${fileBaseUrl}resource/image/7e/d6/7e070c3ab1e7baa6aba589108d912ed6.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp`,
        href: `${baseUrl}learning/path-detail/14`,
      },
      {
        id:'AAO',
        course: '分布式工程师',
        courseNum: '8门课程',
        src: `${fileBaseUrl}resource/image/d1/7a/d1a95c305786eb4902362c04c189af7a.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp`,
        href: `${baseUrl}learning/path-detail/15`,
      },
    ]
  },{
    listItem: [
      {
        id:'AAP',
        course: '后端工程师',
        courseNum: '27门课程',
        src: `${fileBaseUrl}resource/image/1c/17/1c83100965449ef7e1a5144d94744317.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp`,
        href: `${baseUrl}learning/path-detail/16`,
      },
      {
        id:'AFQ',
        course: 'C++工程师',
        courseNum: '6门课程',
        src: `${fileBaseUrl}resource/image/0c/51/0cc452e11f61a1b7d152316baccd0f51.jpg?x-oss-process=image/resize,w_45,h_45,m_fill/format,webp`,
        href: `${baseUrl}learning/path-detail/17`,
      }
    ]
  }  
];

module.exports = {
  headAdData,
  headerInfoData,
  searchData,
  searchlogData,
  menuListData,
  carouselData,
  carousel2Data,
}