const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const { Pool } = require('pg');

const pool = new Pool({
  user: 'your_username',
  host: 'your_host',
  database: 'your_database',
  password: 'your_password',
  port: 5432, // Default PostgreSQL port number
});

app.get('/movies', (req, res) => {
    pool.query('SELECT * FROM movies', (error, result) => {
      if (error) {
        console.error('Error retrieving movies:', error);
        res.status(500).json({ error: 'An error occurred while retrieving movies' });
      } else {
        res.json(result.rows);
      }
    });
  });

  app.post('/movies', (req, res) => {
    const { title } = req.body;
  
    pool.query(
      'INSERT INTO movies (title) VALUES ($1) RETURNING *',
      [title],
      (error, result) => {
        if (error) {
          console.error('Error adding movie:', error);
          res.status(500).json({ error: 'An error occurred while adding the movie' });
        } else {
          res.json(result.rows[0]);
        }
      }
    );
  });
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });