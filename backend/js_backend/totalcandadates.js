
const express = require('express');
const fs = require('fs');
const path = require('path');
const routes = express.Router();

const conn = require('../database/db')


// Display total candidates page
routes.get('/totalcandadate', (req, res) => {
  res.render('totalcandadate');
});

routes.delete("/api1/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await conn("DELETE FROM candidates WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ mess: "Candidate not found" });
    }

    res.json({ mess: "Candidate deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ mess: "Error deleting candidate" });
  }
});

module.exports = routes;
