const express = require('express');
const app = express();
//处理前端传递来的数据
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))

var { 
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
} = require('./mock/index.js');
const CODE = {
  SUCCESS: 0,
}

app.get('/api/headerAd',(req, res) => {
  res.setHeader('Access-Control-Allow-Origin',"*");
  res.setHeader('Access-Control-Allow-Headers','*');

  var str = JSON.stringify({
    code: CODE.SUCCESS,
    msg: '获取成功',
    data: headAdData
  });
  res.send(str)
});

app.get('/api/headerInfo',(req, res) => {
  res.setHeader('Access-Control-Allow-Origin',"*");
  res.setHeader('Access-Control-Allow-Headers','*');

  var str = JSON.stringify({
    code: CODE.SUCCESS,
    msg: '获取成功',
    data: headerInfoData
  });
  res.send(str)
});

app.all('/api/search',(req, res) => {
  res.setHeader('Access-Control-Allow-Origin',"*");
  var newsearchData = searchData.find(d => d.value === req.body.inputValue);
  // console.log(newsearchData)
  var str = JSON.stringify({
    code: CODE.SUCCESS,
    msg: '获取成功',
    data: newsearchData 
  });
  res.send(str)
});

app.all('/api/searchlog',(req, res) => {
  res.setHeader('Access-Control-Allow-Origin',"*");
  var searchlogDataLink = searchlogData.find(d => d.value === req.body.inputValue);
  if(searchlogDataLink === undefined){
    searchlogDataLink = {
      value: '404',
      link: 'https://baike.baidu.com/item/404%20not%20found/5101769'
    }
  }
  var str = JSON.stringify({
    code: CODE.SUCCESS,
    msg: '获取成功',
    data: searchlogDataLink 
  });
  res.send(str)
});

app.get('/api/menuListData',(req, res) => {
  res.setHeader('Access-Control-Allow-Origin',"*");
  var str = JSON.stringify({
    code: CODE.SUCCESS,
    msg: '获取成功',
    data: menuListData 
  });
  res.send(str)
});

app.get('/api/carouselData',(req, res) => {
  res.setHeader('Access-Control-Allow-Origin',"*");
  var str = JSON.stringify({
    code: CODE.SUCCESS,
    msg: '获取成功',
    data: carouselData 
  });
  res.send(str)
});

app.get('/api/carousel2Data',(req, res) => {
  res.setHeader('Access-Control-Allow-Origin',"*");
  var str = JSON.stringify({
    code: CODE.SUCCESS,
    msg: '获取成功',
    data: carousel2Data 
  });
  res.send(str)
});

app.get('/api/liveData',(req, res) => {
  res.setHeader('Access-Control-Allow-Origin',"*");
  var str = JSON.stringify({
    code: CODE.SUCCESS,
    msg: '获取成功',
    data: liveData 
  });
  res.send(str)
});

app.get('/api/infoPageData',(req, res) => {
  res.setHeader('Access-Control-Allow-Origin',"*");
  var str = JSON.stringify({
    code: CODE.SUCCESS,
    msg: '获取成功',
    data: infoPageData 
  });
  res.send(str)
});

app.get('/api/courseLeftData',(req, res) => {
  res.setHeader('Access-Control-Allow-Origin',"*");
  var str = JSON.stringify({
    code: CODE.SUCCESS,
    msg: '获取成功',
    data: courseLeftData 
  });
  res.send(str)
});

app.get('/api/courseRightData',(req, res) => {
  res.setHeader('Access-Control-Allow-Origin',"*");
  var str = JSON.stringify({
    code: CODE.SUCCESS,
    msg: '获取成功',
    data: courseRightData 
  });
  res.send(str)
});

app.get('/api/bootcampLeftData',(req, res) => {
    res.setHeader('Access-Control-Allow-Origin',"*");
    var str = JSON.stringify({
      code: CODE.SUCCESS,
      msg: '获取成功',
      data: bootcampLeftData 
    });
    res.send(str)
  });

app.get('/api/bootcampRightData',(req, res) => {
  res.setHeader('Access-Control-Allow-Origin',"*");
  var str = JSON.stringify({
    code: CODE.SUCCESS,
    msg: '获取成功',
    data:  bootcampRightData 
  });
  res.send(str)
});

app.get('/api/everyCourseData',(req, res) => {
  res.setHeader('Access-Control-Allow-Origin',"*");
  var str = JSON.stringify({
    code: CODE.SUCCESS,
    msg: '获取成功',
    data: everyCourseData 
  });
  res.send(str)
});

app.get('/api/caseData',(req, res) => {
  res.setHeader('Access-Control-Allow-Origin',"*");
  var str = JSON.stringify({
    code: CODE.SUCCESS,
    msg: '获取成功',
    data: caseData
  });
  res.send(str)
});

app.get('/api/openClassData',(req, res) => {
  res.setHeader('Access-Control-Allow-Origin',"*");
  var str = JSON.stringify({
    code: CODE.SUCCESS,
    msg: '获取成功',
    data: openClassData
  });
  res.send(str)
});

app.get('/api/suggestData',(req, res) => {
  res.setHeader('Access-Control-Allow-Origin',"*");
  var str = JSON.stringify({
    code: CODE.SUCCESS,
    msg: '获取成功',
    data: suggestData
  });
  res.send(str)
});

app.get('/api/mulactivityData',(req, res) => {
  res.setHeader('Access-Control-Allow-Origin',"*");
  var str = JSON.stringify({
    code: CODE.SUCCESS,
    msg: '获取成功',
    data: mulactivityData
  });
  res.send(str)
});

app.get('/api/footerData',(req, res) => {
  res.setHeader('Access-Control-Allow-Origin',"*");
  var str = JSON.stringify({
    code: CODE.SUCCESS,
    msg: '获取成功',
    data: footerData
  });
  res.send(str)
});

app.get('/api/rightMenuData',(req, res) => {
  res.setHeader('Access-Control-Allow-Origin',"*");
  var str = JSON.stringify({
    code: CODE.SUCCESS,
    msg: '获取成功',
    data: rightMenuData
  });
  res.send(str)
});

app.listen(8030, ()=> {
  console.log('8030端口')
})