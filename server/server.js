//引用 node 自带的 path 库,不需要 npm 安装.
const path = require('path');
// 将指向目录 public 的连接存为 publicPath;
const publicPath = path.join(__dirname, '../public');

const express = require('express');
let port = process.env.PORT || 3000;



let app = express();

app.use(express.static(publicPath));

app.listen(port, ()=>{
  console.log(`Server is on ${port} port`);
})



