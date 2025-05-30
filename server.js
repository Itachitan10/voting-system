const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const ejs = require("ejs");
const app = express();
const session = require('express-session')
app.use(express.json());
app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({ 
  secret : "secret-key", 
  resave : false, 
  saveUninitialized : true, 
  cookie : {maxAge : 90000}
  
}))

app.engine("html", ejs.renderFile);
app.set("view engine", "html");
app.set("views", path.join(__dirname, "/routes/html"));
app.use("/html", express.static(path.join(__dirname, "/routes/html")));
app.use("/css", express.static(path.join(__dirname, "/routes/css")));
app.use("/js", express.static(path.join(__dirname, "/routes/js")));
app.use('/image'  , express.static(path.join(__dirname , '/routes/image')))


const login= require("./backend/js_backend/login");
const vote = require("./backend/js_backend/add_candidate");
const register = require('./backend/js_backend/register')
const admin = require('./backend/js_backend/admin')
const voting_user = require('./backend/js_backend/voting_user')
const totalvotes = require('./backend/js_backend/totalvotes')
const totalcandadetes = require('./backend/js_backend/totalcandadates')
const winner = require('./backend/js_backend/winner')
const frontpage = require("./backend/js_backend/frontpage")

app.use('/', winner)
app.use('/', totalvotes)
app.use('/', admin)
app.use("/", register);
app.use('/' , login)
app.use('/', vote)
app.use('/' , voting_user)
app.use('/' , totalcandadetes)
app.use('/',  frontpage)



const port = process.env.PORT || 3000;
app.listen(port, (err) => {
  console.log(`running on port  http://localhost:${port}/`);
});