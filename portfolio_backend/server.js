const logger = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
// const db = require('./db');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001

app.use(cors());
app.use(express.json());
app.use(logger('dev'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})