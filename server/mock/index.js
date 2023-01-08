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

const liveData = [{
  id: 'ASD',
  src: 'https://static001.geekbang.org/resource/image/4e/db/4e396748e50672c461c2942e64b6a4db.jpg?x-oss-process=image/resize,w_253,h_143/format,webp',
  name: '1 小时玩转 Kubernetes 调度器',
  time: '时间：01月10日（周二）20:00',
  link: 'https://live.geekbang.org/room/1680',
},{
  id: 'ADF',
  src: 'https://static001.geekbang.org/resource/image/b0/10/b07eb1f53902fc6a707fb1bea94a0d10.png?x-oss-process=image/resize,w_253,h_143/format,webp',
  name: '基于 Seata 实现 TCC 分布式事务模式',
  time: '时间：01月17日（周二）20:00',
  link: 'https://live.geekbang.org/room/1676',
}]

const infoPageData = {
  title: '高级Java工程师体系课2.0',
  src: 'https://static001.geekbang.org/resource/image/32/07/327f770267492804d689420aaab12a07.png',
  link: 'https://u.geekbang.org/subject/java4th'
}

const courseLeftData = [{
  src:'https://static001.geekbang.org/resource/image/08/0a/08ef3f1120d795d8f5641eb26603ee0a.jpg?x-oss-process=image/resize,w_103,h_136/format,webp',
  title: '技术领导力实战笔记 2022',
  name:'TGO 鲲鹏会',
  info: '数十位优秀管理者的真知灼见',
  infoNum:'32讲｜2998 人已学习',
  firstPrice: 'true',
  newPrice: '¥59',
  oldPrice: '¥129',
  link: 'https://time.geekbang.org/column/intro/100120501'
},{
  src:'https://static001.geekbang.org/resource/image/1b/ba/1b55645096bc6d40623601e33f87bcba.jpg?x-oss-process=image/resize,w_103,h_136/format,webp',
  title: '深入剖析 Kubernetes',
  name:'张磊',
  info: 'Kubernetes 社区资深成员与项目维护者',
  infoNum:'57讲｜97884 人已学习',
  firstprice: 'true',
  newPrice: '¥68',
  oldPrice: '¥199',
  link: 'https://time.geekbang.org/column/intro/100015201'
},{
  src:'https://static001.geekbang.org/resource/image/f8/b5/f89ca800b50c986c427fa73bdb580cb5.jpg?x-oss-process=image/resize,w_103,h_136/format,webp',
  title: 'Dubbo 源码剖析与实战',
  name:'何辉',
  info: '平安壹钱包架构师',
  infoNum:'33讲｜1463 人已学习',
  firstprice: 'true',
  newPrice: '¥59',
  oldPrice: '¥129',
  link: 'https://time.geekbang.org/column/intro/100312101'
},{
  src:'https://static001.geekbang.org/resource/image/07/d3/07aebb9ee1c0ed7dd424810af8b711d3.jpg?x-oss-process=image/resize,w_103,h_136/format,webp',
  title: '手把手教你落地 DDD',
  name:'钟敬',
  info: 'Thoughtworks 首席咨询师、数字化转型与运营团队 DDD 负责人',
  infoNum:'32讲｜3498 人已学习',
  firstprice: 'true',
  newPrice: '¥59',
  oldPrice: '¥128',
  link: 'https://time.geekbang.org/column/intro/100311801'
}]

const courseRightData = {
  title: '7日学习榜',
  lists: [{
    order: 1,
    title: 'MySQL实战45讲',
    link: 'https://time.geekbang.org/column/100020801'
  },{
    order: 2,
    title: '数据结构与算法之美',
    link: 'https://time.geekbang.org/column/100017301'
  },{
    order: 3,
    title: '设计模式之美',
    link: 'https://time.geekbang.org/column/100039001'
  },{
    order: 4,
    title: '深入剖析Kubernetes',
    link: 'https://time.geekbang.org/column/100015201'
  },{
    order: 5,
    title: '左耳听风',
    link: 'https://time.geekbang.org/column/100002201'
  },{
    order: 6,
    title: 'Redis核心技术与实战',
    link: 'https://time.geekbang.org/column/100056701'
  },{
    order: 7,
    title: '手把手教你落地DDD',
    link: 'https://time.geekbang.org/column/100311801'
  }]
}

const bootcampLeftData = [{
  sort:1,
  link: 'https://u.geekbang.org/subject/go2nd/1001024',
  src: 'https://static001.geekbang.org/resource/image/be/fa/be1d01323fe22d609a32389785090cfa.png?x-oss-process=image/resize,w_103,h_136/format,webp',
  title: 'Go 实战训练营',
  info: '成为通源码、懂原理、能实战的硬核 Go 工程师',
  detailInfo: '邓明｜某知名国际互联网公司高级工程师｜Beego PMC',
  time: '01月01日开课',
  apply: '立即报名',
  backgroundImage: 'url("undefined")'
},{
  sort:2,
  link: 'https://u.geekbang.org/subject/java4th/1001148',
  src: 'https://static001.geekbang.org/resource/image/a4/e7/a4a437f23799943db8e43041653b2ee7.png?x-oss-process=image/resize,w_103,h_136/format,webp',
  title: '高级 Java 工程师体系课',
  info: '160+ 小时全程实战教学，覆盖 Java 进阶知识体系',
  detailInfo: '刘亚雄｜极客时间训练营 Java 学科讲师',
  time: '12月22日开课',
  apply: '立即报名',
  backgroundImage: 'url("https://static001.geekbang.org/static/time/img/bg-list-1.49043357.png")'
},{
  sort:3,
  link: 'https://u.geekbang.org/subject/cloudnative/1000797',
  src: 'https://static001.geekbang.org/resource/image/fc/37/fc88fe4bf4ee1603ca8eab485f24bc37.jpg?x-oss-process=image/resize,w_103,h_136/format,webp',
  title: '云原生训练营',
  info: '向技术要红利，4 个月，挑战 50 万年薪',
  detailInfo: '孟凡杰｜腾讯云容器技术专家 / 前 eBay 资深架构师 / Kubernetes 开源项目代码贡献者 / CNUTCon 明星讲师 / 《Kubernetes 生产化实践之路》作者',
  time: '01月01日开课',
  apply: '立即报名',
  backgroundImage: 'url("https://static001.geekbang.org/static/time/img/bg-list-2.2bf8d15f.png")'
},{
  sort:4,
  link: 'https://u.geekbang.org/subject/fe4th/1001232',
  src: 'https://static001.geekbang.org/resource/image/f1/65/f1e6b0efe97cf5f6ce43035c1ac6ba65.png?x-oss-process=image/resize,w_103,h_136/format,webp',
  title: '前端进阶特训营',
  info: '深度锤炼编程、架构、工程三大核心能力',
  detailInfo: 'winter｜前手机淘宝前端组 Leader｜前淘宝架构组 Leader｜前阿里 P8 高级技术专家',
  time: '02月13日开课',
  apply: '立即报名',
  backgroundImage: 'url("https://static001.geekbang.org/static/time/img/bg-list-3.e728347f.png")'
}]

const bootcampRightData = [{
  title: '基于 RocketMQ 实现可靠事件模式',
  subTitle: '2 小时精讲+实战代码演练',
  newPrice: '¥0',
  oldPrice: '¥99',
  link: 'https://u.geekbang.org/subject/intro/100311401'
},{
  title: '使用 GraphQL 开发 Web API 实战',
  subTitle: '理论+实战，带你使用 Spring GraphQL 重构 Web API',
  newPrice: '¥0',
  oldPrice: '¥99',
  link: 'https://u.geekbang.org/subject/intro/100310401'
},{
  title: ' SpringBoot 原理与应用实践',
  subTitle: '3 天带你用  SpringBoot 实现刷脸支付',
  newPrice: '¥0',
  oldPrice: '¥99',
  link: 'https://u.geekbang.org/subject/intro/100117102'
}]

const everyCourseData = {
  id: 'VVH',
  title: '每日一课',
  linkTitle: 'https://time.geekbang.org/dailylesson',
  description: '深度解析实际工作中的疑难问题',
  recommendTitle:'小编推荐',
  recommendSubtitle: '每日一课,学习更轻松',
  recommendLists: [{
    link: 'https://time.geekbang.org/dailylesson/detail/100110720',
    title: 'Apipost：高效完成接口开发',
    subTitle: '利用开发工具Apipost，提高开发效率，早点儿下班回家',
    descript:' #产品/运营',
    img:'https://static001.geekbang.org/resource/image/56/4b/5663ff0ed090a8c54ac193be25c3e54b.jpeg?x-oss-process=image/resize,w_73,h_97/format,webp',
    playNum: '个人成长 · 7824 次播放',  
  },{
    link: 'https://time.geekbang.org/dailylesson/detail/100122409',
    title: '云海奇景——如何巧用Layer层进行Lambda库包管理？',
    subTitle: '一个良好的、优雅的、被推荐的开发部署模式是怎么样的呢？',
    descript:'#云计算',
    img:'https://static001.geekbang.org/resource/image/f9/12/f992f0e18c31d2b78d18448edd905112.jpg?x-oss-process=image/resize,w_73,h_97/format,webp',
    playNum: '248 次播放',  
  },{
    link: 'https://time.geekbang.org/dailylesson/detail/100122410',
    title: '10分钟带你彻底搞懂MyBatis-Spring启动过程工作原理',
    subTitle: 'MyBatis-Spring组件的启动过程如何完成MyBatis与Spring这两个框架之间的无缝集成？',
    descript:' #Java',
    img:'https://static001.geekbang.org/resource/image/62/9b/62a024e4yy11b90bb1bf44b69a864c9b.jpg?x-oss-process=image/resize,w_73,h_97/format,webp',
    playNum: '2418 次播放',  
  },],
  everyLearn: [{
    link:'https://time.geekbang.org/dailylesson/detail/100028401',
    src:'https://static001.geekbang.org/resource/image/6e/73/6e55a77c3a8c67657b09105b7a94f273.jpg?x-oss-process=image/resize,w_253,h_143/format,webp',
    subSrc: '../../assets/images/subSrc.png',
    num: '7.9w次播放',
    problem: '为什么SQL语句使用了索引，但却还是慢查询？',
    author: '林晓斌  | 腾讯云'
  },{
    link:'https://time.geekbang.org/dailylesson/detail/100044011',
    src:'https://static001.geekbang.org/resource/image/a9/dd/a985b0f7106d1b24e9da872e69dd5fdd.png?x-oss-process=image/resize,w_253,h_143/format,webp',
    subSrc: '../../assets/images/subSrc.png',
    num: '4.3w次播放',
    problem: '如何搭建一款高性能、高可用的MySQL架构？',
    author: '颜群  | 阿里云云栖认证专家'
  },{
    link:'https://time.geekbang.org/dailylesson/detail/100044011',
    src:'https://static001.geekbang.org/resource/image/5b/66/5b58cb5b81412d5042dbca9ff7b09966.png?x-oss-process=image/resize,w_253,h_143/format,webp',
    subSrc: '../../assets/images/subSrc.png',
    num: '2.8w次播放',
    problem: '如何使Python程序快如闪电，提速30%?',
    author: 'Martin | Heinz（平川译）'
  },{
    link:'https://time.geekbang.org/dailylesson/detail/100044011',
    src:'https://static001.geekbang.org/resource/image/38/3b/388ee11584c5b949fef2e777d891203b.png?x-oss-process=image/resize,w_253,h_143/format,webp',
    subSrc: '../../assets/images/subSrc.png',
    num: '3.9w次播放',
    problem: '如何快速且深入地学习一门新技术？',
    author: '颜群  | 阿里云云栖认证专家'
  },{
    link:'https://time.geekbang.org/dailylesson/detail/100044011',
    src:'https://static001.geekbang.org/resource/image/60/39/6092153111008d71cb6b73a32fb7f539.jpg?x-oss-process=image/resize,w_253,h_143/format,webp',
    subSrc: '../../assets/images/subSrc.png',
    num: '2.6w次播放',
    problem: '如何优雅地计算斐波那契数列？',
    author: 'winter  | 前手机淘宝前端负责人'
  },{
    link:'https://time.geekbang.org/dailylesson/detail/100044011',
    src:'https://static001.geekbang.org/resource/image/da/4c/da6d20a4cda70a2c2776f47d1989724c.png?x-oss-process=image/resize,w_253,h_143/format,webp',
    subSrc: '../../assets/images/subSrc.png',
    num: '2.8w次播放',
    problem: '为什么说Java仍将是未来的主导语言?',
    author: 'Rishav | Kaundal'
  },]
}

const caseData = [{
  newestTitle:[{
    title: '前端图形学',
    time: '2022.11.07 第一百零七期',
    num: '共3个视频 · 256热度',
    img: 'https://static001.geekbang.org/resource/image/8b/5a/8ba874465a3c0df5a5bca39d0ddd645a.png?x-oss-process=image/resize,w_87,h_87/format,webp',
    background: '../assets/images/case.png',
    link: 'https://time.geekbang.org/qconplus/album/109'
  },{
    title: '智能家居场景下的 IoT 实战',
    time: '2022.10.31 第一百零六期',
    num: '共1个视频 · 102热度',
    img: 'https://static001.geekbang.org/resource/image/c1/74/c1933219fae8c2384ff09b902a39f974.png?x-oss-process=image/resize,w_87,h_87/format,webp',
    background: '../assets/images/case.png',
    link: 'https://time.geekbang.org/qconplus/album/108'
  },{
    title: '性能优化案例',
    time: '2022.10.31 第一百零六期',
    num: '共4个视频 · 564热度',
    img: 'https://static001.geekbang.org/resource/image/65/cf/659ac6a14d19ae143d5120eb8733a0cf.png?x-oss-process=image/resize,w_87,h_87/format,webp',
    background: '../assets/images/case.png',
    link: 'https://time.geekbang.org/qconplus/album/107'
  },{
    title: '基于 Monorepo 的前端工作流',
    time: '2022.10.17 第一百零四期',
    num: '共4个视频 · 481热度',
    img: 'https://static001.geekbang.org/resource/image/0c/ab/0c6fdb5a61c0528a66108b4a373c54ab.png?x-oss-process=image/resize,w_87,h_87/format,webp',
    background: '../assets/images/case.png',
    link: 'https://time.geekbang.org/qconplus/album/106'
  },{
    title: '低代码核心技术实现',
    time: '2022.10.10 第一百零三期',
    num: '共4个视频 · 1182热度',
    img: 'https://static001.geekbang.org/resource/image/64/71/6423717d3d4eef2bd9252268b2571471.png?x-oss-process=image/resize,w_87,h_87/format,webp',
    background: '../assets/images/case.png',
    link: 'https://time.geekbang.org/qconplus/album/105'
  },{
    title: '抖音前端安全的探索和实践',
    time: '2022.09.26 第一百零二期',
    num: '共3个视频· 176热度',
    img: 'https://static001.geekbang.org/resource/image/e3/7a/e3baa525b3ac59d3178026457b205e7a.png?x-oss-process=image/resize,w_87,h_87/format,webp',
    background: '../assets/images/case.png',
    link: 'https://time.geekbang.org/qconplus/album/104'
  }]
},{
  hotestTitle:[{
    title: '数据平台建设',
    time: '2021.2.1 第二十一期',
    num: '共5个视频· 1.8w热度',
    img: 'https://static001.geekbang.org/resource/image/d5/f2/d5ea5896a2b9b631c35ea1a7567ed6f2.jpg?x-oss-process=image/resize,w_87,h_87/format,webp',
    background: '../assets/images/case.png',
    link: 'https://time.geekbang.org/qconplus/album/22'
  },{
    title: '服务治理架构演进',
    time: '2020.9.7 第一期',
    num: '共4个视频· 1.5w热度',
    img: 'https://static001.geekbang.org/resource/image/8a/8f/8aca86d1999a43103fca5107f102de8f.jpg?x-oss-process=image/resize,w_87,h_87/format,webp',
    background: '../assets/images/case.png',
    link: 'https://time.geekbang.org/qconplus/album/2'
  },{
    title: '移动架构以及前端工程化',
    time: '2020.11.2 第九期',
    num: '共6个视频· 1.0w热度',
    img: 'https://static001.geekbang.org/resource/image/df/b3/df0259b798db2d1d9bf9478fa95112b3.jpg?x-oss-process=image/resize,m_fill,h_130,w_130',
    background: '../assets/images/case.png',
    link: 'https://time.geekbang.org/qconplus/album/10'
  },{
    title: '基于DDD的微服务架构设计',
    time: '2021.2.22 第二十三期',
    num: '共4个视频· 1.0w热度',
    img: 'https://static001.geekbang.org/resource/image/f4/e0/f4e60dbc9b88ca1b002f9199b957a7e0.jpg?x-oss-process=image/resize,m_fill,h_130,w_130',
    background: '../assets/images/case.png',
    link: 'https://time.geekbang.org/qconplus/album/24'
  },{
    title: 'ToB 产品案例',
    time: '2021.8.30 第四十九期',
    num: '共5个视频· 9502热度',
    img: 'https://static001.geekbang.org/resource/image/87/8d/875b59c47362584533a86171d758778d.png?x-oss-process=image/resize,m_fill,h_130,w_130',
    background: '../assets/images/case.png',
    link: 'https://time.geekbang.org/qconplus/album/50'
  },{
    title: '融合趋势下的大数据技术',
    time: '2020.11.9 第十期',
    num: '共8个视频· 9306热度',
    img: 'https://static001.geekbang.org/resource/image/cc/5c/cc91afe47132d7ef70b4b0f15f554d5c.jpg?x-oss-process=image/resize,m_fill,h_130,w_130',
    background: '../assets/images/case.png',
    link: 'https://time.geekbang.org/qconplus/album/11'
  }]
}]

const openClassData = [{
  src:'https://static001.geekbang.org/resource/image/04/fd/04378200366c40f2b869d78876a2d5fd.jpg?x-oss-process=image/resize,w_253,h_143/format,webp',
  title: '工行业务架构实践',
  description: '任长清 | 中国工商银行业务研发中心专家',
  learnNum: '1971人学过',
  iscount: '免费领取',
  link:'https://time.geekbang.org/opencourse/intro/100310901'
},{
  src:'https://static001.geekbang.org/resource/image/26/11/2670f6909fbe5f694fc01535577d6511.jpg?x-oss-process=image/resize,w_253,h_143/format,webp',
  title: 'Linux0.11源码趣读',
  description: '闪客 | 低并发编程公号作者',
  learnNum: '8079人学过',
  iscount: '免费领取',
  link:'https://time.geekbang.org/opencourse/intro/100310101'
},{
  src:'https://static001.geekbang.org/resource/image/b6/97/b675042a42fa66b86c0468d875157797.jpg?x-oss-process=image/resize,w_253,h_143/format,webp',
  title: 'PolarDB-X 开源人才培养课程',
  description: '阿里云数据库官方 | 阿里云数据库技术专家团队',
  learnNum: '159人学过',
  iscount: '赠一得一',
  link:'https://time.geekbang.org/opencourse/videointro/100126501'
},{
  src:'https://static001.geekbang.org/resource/image/6b/a3/6bdec8504c17d684c443c2e1da7e90a3.jpg?x-oss-process=image/resize,w_253,h_143/format,webp',
  title: 'PolarDB for PostgreSQL 开源人才培养课程',
  description: '阿里云数据库官方 | 阿里云数据库技术专家团队',
  learnNum: '160人学过',
  iscount: '赠一得一',
  link:'https://time.geekbang.org/opencourse/videointro/100126601'
},]

const suggestData = [{
  authorPortrait: 'https://static001.geekbang.org/resource/image/d4/74/d46d28c922505c8070eff6daa3192d74.jpg?x-oss-process=image/resize,w_87,h_115/format,webp',
  name: 'MySQL 实战 45 讲',
  author: '林晓斌',
  authorDesc: ' 网名丁奇，前腾讯云数据库负责人',
  count: '49讲｜196360 人已学习',
  hasDiscount: '1', // 1: 有折扣， 0： 无折扣，
  price: '¥139',
  discountPrice: '¥199',
  link: 'https://time.geekbang.org/column/intro/100020801',
}, {
  authorPortrait: 'https://static001.geekbang.org/resource/image/65/c0/65dc525140a25af39b780aaae65821c0.jpg?x-oss-process=image/resize,w_87,h_115/format,webp',
  name: '数据结构与算法之美',
  author: '王争',
  authorDesc: '前 Google 工程师',
  count: '81讲｜261906 人已学习',
  hasDiscount: '1', // 1: 有折扣， 0： 无折扣，
  price: '¥179',
  discountPrice: '¥128',
  link: 'https://time.geekbang.org/column/intro/100017301'
}, {
  authorPortrait: 'https://static001.geekbang.org/resource/image/65/c0/65dc525140a25af39b780aaae65821c0.jpg?x-oss-process=image/resize,w_103,h_136/format,webp',
  name: '设计模式之美',
  author: '王争',
  authorDesc: '前 Google 工程师，《数据结构与算法之美》专栏作者',
  count: '113讲｜112699 人已学习',
  hasDiscount: '1', // 1: 有折扣， 0： 无折扣，
  price: '¥299',
  discountPrice: '¥118',
  link:'https://time.geekbang.org/column/intro/100039001'
}, {
  authorPortrait: 'https://static001.geekbang.org/resource/image/1b/ba/1b55645096bc6d40623601e33f87bcba.jpg?x-oss-process=image/resize,w_87,h_115/format,webp',
  name: '深入剖析 Kubernetes',
  author: '张磊',
  authorDesc: 'Kubernetes 社区资深成员与项目维护者',
  count: '57讲｜97919 人已学习',
  hasDiscount: '1', // 1: 有折扣，新人首单 0： 无折扣，
  price: '¥199',
  discountPrice: '¥168',
  link: 'https://time.geekbang.org/column/intro/100015201'
},{
  authorPortrait: 'https://static001.geekbang.org/resource/image/96/69/96607ee10fc5d0e2ce4ea828c48a6369.jpg?x-oss-process=image/resize,w_87,h_115/format,webp',
  name: 'Redis 核心技术与实战',
  author: '蒋德钧',
  authorDesc: '中科院计算所副研究员',
  count: '119讲｜158897 人已学习',
  hasDiscount: '1', // 1: 有折扣，新人首单 0： 无折扣，
  price: '¥249',
  discountPrice: '¥168',
  link:'https://time.geekbang.org/column/intro/100002201'
},{
  authorPortrait: 'https://static001.geekbang.org/resource/image/19/f5/1968c1f06723479ae9771dbf54a1c7f5.jpg?x-oss-process=image/resize,w_87,h_115/format,webp',
  name: '左耳听风',
  author: '陈皓',
  authorDesc: '网名“左耳朵耗子”，资深技术专家，骨灰级程序员',
  count: '119讲｜158897 人已学习',
  hasDiscount: '1', // 1: 有折扣，新人首单 0： 无折扣，
  price: '¥279',
  discountPrice: '¥100',
  link:'https://time.geekbang.org/column/intro/100002201'
}]

const mulactivityData = [{
  src: 'https://static001.geekbang.org/resource/image/60/b3/6037f24fa33b156daa506fe4df2b94b3.jpg?x-oss-process=image/resize,w_253,h_143/format,webp',
  link: 'https://time.geekbang.org/activity/promo?page_name=page_549'
},{
  src: 'https://static001.geekbang.org/resource/image/24/f5/24eaae533382204a9609db9773e321f5.jpg?x-oss-process=image/resize,w_253,h_143/format,webp',
  link: 'https://time.geekbang.org/activity/promo?page_name=page_510'
},{
  src: 'https://static001.geekbang.org/resource/image/4d/1a/4d488b95a27b38ba9e5fyy09c05da11a.jpg?x-oss-process=image/resize,w_253,h_143/format,webp',
  link: 'https://time.geekbang.org/activity/promo?page_name=page_533'
},{
  src: 'https://static001.geekbang.org/resource/image/3b/16/3bcfe02c174byya75fbb5d3be35bce16.jpg?x-oss-process=image/resize,w_253,h_143/format,webp',
  link: 'https://time.geekbang.org/activity/promo?page_name=page_158'
}]

const footerData = {
  logoLink: 'https://static001.geekbang.org/static/time/img/geek_elements/logo-wap.png',
  agreements: 'https://time.geekbang.org/hybrid/legal',
  privacyPolicy: 'https://time.geekbang.org/hybrid/private',
  telephone: '010-64128142',
  Email: 'service@geekbang.com',
  address: '北京市朝阳区容和路1号院1号楼5层',
  marketCooperation: 'https://shop18793264.m.youzan.com/v2/feature/vaLsS3SJKn?is_silence_auth=1',
  selfPromotion: 'https://time.geekbang.org/channel/home',
  featureAuthor: 'https://jinshuju.net/f/MANYIf',
  enterpriseCooperation:'https://b.geekbang.org/',
  QRcode: 'https://static001.geekbang.org/static/time/img/qrcode/gk_service.jpg'
}

const rightMenuData = [
  {
    title: '直播'
  },{
    title: '课程'
  },{
    title: '训练营',
    new: true,
  },{
    title: '每日一课'
  },{
    title: '大厂案例'
  },{
    title: '公开课'
  },{
    title: '为你推荐'
  },{
    title: '更多活动',
    new: true
  },
]

module.exports = {
  headAdData,
  headerInfoData,
  searchData,
  searchlogData,
  menuListData,
  carouselData,
  carousel2Data,
  liveData,
  infoPageData,
  courseLeftData,
  courseRightData,
  bootcampLeftData,
  bootcampRightData,
  everyCourseData,
  caseData,
  openClassData,
  suggestData,
  mulactivityData,
  footerData,
  rightMenuData,
}