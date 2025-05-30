const express = require('express')
const routes = express.Router(); 



routes.get('/totalvotes', (req , res)=>{ 
    res.render('totalVotes')
})



module.exports =routes;