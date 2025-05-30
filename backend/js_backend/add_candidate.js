const express = require("express");
const routes = express.Router();

const studentData = [];
const conn = require("../database/db");

routes.get("/addcadidata", (req, res) => {
  res.render("add_candidate");
});

routes.post("/candidates", async (req, res) => {
  const { grade, name, position, section } = req.body;

  if (!grade || !name || !position || !section) {
    return res.json({ mess: "no existing data" });
  }
  try {
    const sql = `INSERT INTO candidates (position, name, grade, section) VALUES (?, ?, ?, ?)`;
    const values = [position, name, grade, section];

    const result = await conn(sql, values);
    studentData.push(newCandidate);

    res.json({ mess: "successful inserting data",});

  } catch (error) {
    res.json({ mess: "error inserting data", error: error.message });
  }
});




// DELETE candidate by id




routes.get("/api1", async (req, res) => {
  const result  = await conn(`SELECT * FROM candidates`)

  if(!result){ 
      res.json({mess : 'no data'})
  }else
  res.send(result)
});

module.exports = routes;
