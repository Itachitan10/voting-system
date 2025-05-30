const express = require('express'); 
const routes = express.Router();




routes.get('/frontpage' , (req , res)=>{ 

    res.render('frontpage')
})


module.exports  = routes;
