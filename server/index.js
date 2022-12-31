const { response } = require("express");
const express = require('express');
const app = express();
app.all('/headerAd',(req,res) => {
  res.setHeader('Access-Control-Allow-Origin',"*");
  var data = [{

  }]
  var str = JSON.stringify(data);
  res.send(str)
})
app.listen(8001, ()=> {
  console.log('8001端口')
})