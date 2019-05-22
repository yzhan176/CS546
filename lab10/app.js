const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const middleware = require("./middleware");
const session = require("express-session");
const configRoutes = require("./routes");

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const static = express.static(__dirname+ "/public");

app.use("/public", static);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(session({
  name: 'AuthCookie',
  secret: 'some secret string!',
  resave: false,
  saveUninitialized: true
}));

app.use(middleware.logMessage);

configRoutes(app);

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3000");
});
