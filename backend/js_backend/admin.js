const express = require('express');
const routes = express.Router(); 
const conn = require('../database/db')



routes.get('/admin', (req, res)=>{ 
    res.render('admin')
})

// api para sa mga votes na nag buto
routes.get('/voting_data' ,  async (req, res)=>{ 
    if(!conn){ 
        res.status(500).send({message: 'Database connection failed'})
    }else{ 
      const result =   await conn('SELECT * FROM voters')
      res.send(result)
    }
} )



// Delete vote by id

routes.delete('/voting_data_dalete/:id', async (req, res) => {
  const id = req.params.id;

  try {
    await conn(`DELETE FROM voters WHERE id = ?`, [id]);
    res.json({ message: 'Delete executed.' });

  } catch (error) {
    console.error(`Error deleting vote ID ${id}:`, error);
    res.status(500).json({ message: 'Error deleting .' });
  }
});


// logut routes
routes.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.send('Error!');
    res.clearCookie('connect.sid');
    res.send('Session destroyed. Logged out!');
  });
});




module.exports = routes; 