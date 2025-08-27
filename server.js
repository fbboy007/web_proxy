const express = require("express");
const request = require("request");
const app = express();

app.get("/", (req, res) => {
  let url = req.query.url;
  if (!url) return res.send("Thêm ?url=https://example.com");
  request(url).pipe(res);
});

app.listen(10000, () => console.log("Proxy chạy cổng 10000"));
