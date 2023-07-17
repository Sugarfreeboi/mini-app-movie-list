const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors')

const knex = require('knex')(require('./knexfile.js')['development'])

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Application is up and running.')
})

app.listen(port, () => {
    console.log(`The server is listening at http://localhost:${port}`);
})

app.get('/movies', (req, res) => {
    knex('movie_list')
        .select('title')
        .then(movie => {res.json(movie)})
})