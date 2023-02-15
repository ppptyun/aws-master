const express = require('express');
const app = express();

app.get("*", (req, res) => {
  // res.send("hello world!");
  res.redirect('https://cloudmt.co.kr/');
});

module.exports=app;
