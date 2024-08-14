const express = require('express');
const app = express();
const port = 3000
const db = require('./db');

function insertRandomName() {

    const names = [
        "Olivia",
        "Liam",
        "Emma",
        "Noah",
        "Ava",
        "Elijah",
        "Sophia",
        "James",
        "Isabella",
        "Benjamin",
        "Mia",
        "Lucas",
        "Amelia",
        "Mason",
        "Harper",
        "Ethan",
        "Evelyn",
        "Logan",
        "Charlotte",
        "Jackson"
    ];
    
    const randomIndex = Math.floor(Math.random() * 20);
    
    try {
        const person = { name: names[randomIndex]};
    
        const query = 'INSERT INTO people (name) VALUES (?)';
    
        db.query(query, [person.name], (err, results) => {
        if (err) {
            console.error('Error executing query:', err.stack);
            return;
        }
        console.log('Data inserted successfully:', results.insertId);
        });
    } catch (err) {
        console.error('Error executing query:', err.stack);
        res.status(500).send('Database query failed');
    }
}

app.get('/', async (req, res) => {

    insertRandomName();

    const query = 'SELECT * FROM people';

    db.query(query, (err, results) => {
        if (err) {
        console.error('Error executing query:', err.stack);
        return res.status(500).send('Database query failed');
        }
        let html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Desafio NodeJs + Nginx</title>
        </head>
        <body>
          <h1>Full Cycle Rocks!!</h1>
          <h1>Lista de nomes</h1>
          <ul>
      `;
    
      results.forEach(person => {
        html += `<li>${person.name}</li>`;
      });
    
      html += `
          </ul>
        </body>
        </html>
      `;
        res.send(html);
    });
})

app.listen(port, () => {
    console.log('listening on port 3001')
})