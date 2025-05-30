const express = require('express');
const routes = express.Router();

const conn = require('../database/db');

routes.get('/votingUser', (req, res) => {
  res.render('voting_user');
});

routes.post('/votes', async (req, res) => {
  try {
    const contain = req.body;
    const { president, vice_president, secretary, treasurer, auditor, pio, grade_representative, user_name, grade_section} = contain;
    const date = new Date();
    const formattedDateTime = date.toISOString().slice(0, 19).replace('T', ' ');
    const sql = await conn(`INSERT INTO voters ( president, vice_president, secretary, treasurer, auditor, pio, grade_representative, user_name, grade_section, created_at )VALUES(
      "${president}", "${vice_president}", "${secretary}", "${treasurer}", "${auditor}", "${pio}", "${grade_representative}", "${user_name}", "${grade_section}", "${formattedDateTime}"
    )`);

    if (!sql) {
      return res.status(400).json({ message: 'Invalid request' });
    }

    return res.json({ message: "Votes successfully inserted to the database" });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
});

module.exports = routes;
