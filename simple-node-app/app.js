const { PORT } = process.env;

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.status(200).send('Hello Kubernetes World!!');
});

app.listen(PORT, () => {
    console.log(`APP running on port ${PORT}.`)
});