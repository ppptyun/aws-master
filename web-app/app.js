const express = require('express');
const app = express();

app.get("*", (req, res) => {
  // res.send("hello world!");
  res.redirect('http://www.naver.com');
});

module.exports=app;
