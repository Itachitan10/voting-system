const express = require('express'); 
const routes = express.Router();



routes.get('/winner' , (req , res)=>{ 
    res.render('winner')
})

module.exports = routes;
