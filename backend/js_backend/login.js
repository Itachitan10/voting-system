const express = require("express");
const routes = express.Router();
const conn = require("../database/db");


routes.get("/login", (req, res) => {
  res.render("login");
});


routes.post("/loginteachers", async (req, res) => {
  const teacherName = req.body.teacherName.trim();
  const password1 = req.body.password1.trim();

  try {
    const result = await conn("SELECT * FROM teachers WHERE TRIM(teacherName) = ? AND TRIM(password1) = ?",  [teacherName, password1]);



    if (result.length > 0) {
      req.session.username = result[0].teacherName;
      req.session.userId = result[0].id;
      res.json({usern : result[0].teacherName})
      return 
    } else {
     
      return res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    console.error("Database error:", error);
    return res.status(500).json({ message: "Server error" });
  }
});



routes.get('/username',(req , res)=>{
  
  if( req.session.username){ 
  res.send({username : req.session.username})
  }else{ 
  console.log('session is emty');
  
  }
})

// routes.get("/logout", (req, res) => {
//   req.session.destroy((err) => {
//     if (err) {
//       console.error("Logout error:", err);
//       return res.status(500).send("Error logging out.");
//     }
//     res.send("Successfully logged out.");
//   });
// });



module.exports = routes;
