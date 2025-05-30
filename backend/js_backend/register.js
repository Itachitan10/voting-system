const express = require("express");
const routes = express.Router();

routes.get("/register", (req, res) => {
  res.render("register");
});


const conn = require('../database/db')



routes.post ("/teachers",  async(req, res) => {
    const { name1, password} = req.body;

    console.log(name1 , password);
    

    if (!name1 || !password) {
        console.log('no data');
    } else {
        const sql1 = await conn(`INSERT INTO teachers(teacherName ,password1) value("${name1}"," ${password}")`)
        if(!sql1){ 
        console.log('error inserting  data bse');
        }else{
          res.json({mess : "sucess full inserting data bse"})
            console.log('sucess full inserting data bse');
            
        }
        console.log('all data is existing');
        
    }
  });
  
module.exports = routes;













