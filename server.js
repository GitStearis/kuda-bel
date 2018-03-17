const express = require("express");
const app = express();

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.get("/");

app.listen(process.env.PORT || 3000);