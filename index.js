const express = require("express");
const cookieStore = require('cookie-parser')
const app = express();
const port = 8000;
const elayouts = require("express-ejs-layouts");
const db = require('./config/mongoose');
app.use(elayouts);

app.use(express.urlencoded());
app.use(cookieStore())


app.set("layout extractStyles", true);
app.set("layout extractScript", true);
app.use(express.static("./assets"));
app.set("view engine", "ejs");
// use express Routing
app.set("views", "./views");
app.use("/", require("./routes/router"));

app.listen(port, function () {
  console.log("Server Started");
});
