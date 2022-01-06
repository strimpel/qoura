const express = require('express');
const app = express();
const IndexRouter = require('./router/index');
const port = process.env.port || 5000;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }))
app.use('/data' , IndexRouter);

app.use(express.static(__dirname = 'public'))
app.listen(port);

console.log(port)

