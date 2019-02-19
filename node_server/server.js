const express=require("express");
/* const {exec} = require("child_process"); */
var proxy = require('http-proxy-middleware');
const path=require("path")
const fs=require("fs")
const app=express()
/* const get_path=path.resolve(__dirname) */
 
 app.get('/index',function(req,res){
    res.header('Content-Type','text/html')
    res.header("Access-Control-Allow-Origin", "*")
   const html=fs.readFileSync(__dirname+"/../webapp/index.html","utf-8")
  res.send(html)
 
 }) 

app.use("/",express.static(path.resolve(__dirname+'/../webapp')))
app.use('/', proxy({target: /* 'http://172.21.4.61:10087' */    'http://192.168.1.175:10088' /* 'http://192.168.6.126:10087' */, changeOrigin: true}))
app.listen(6002,function(){
  
    console.log("node 服务开启了,端口号6002") 
 
   })