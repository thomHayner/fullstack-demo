const express = require('express');
const parse = require('body-parser');

const app = express();

const port = 3000;

// Don't forget to parse
app.use(parse.json());

// Create
app.post('/bugs', cb);

// Read
app.get('/bugs', cb);

// Update
app.put('/bugs', cb);

// Delete
app.delete('/bugs', cb);

app.listen(port, () => console.log('the server is now running on port ', port));