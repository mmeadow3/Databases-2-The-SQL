'use strict';

const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const config = require('./knexfile').development
const knex = require('knex')(config)


const port = process.env.PORT || 3000

app.set("view engine", "pug")
app.use(bodyParser.urlencoded({ extended: false}))

app.get('/', (req, res) => {
  res.render("index");
})

app.post('/', (req, res) => {
  Promise.all([knex('User').insert(req.body)])
  .then((data)=> {
    console.log(data);
    res.sendStatus(200)
  })
})

app.get('/users', (req, res) => {
  knex("User")
  .then((users) => res.render("listOfUser", {users}))
})

app.listen(port, () => {
  console.log('Now listening on port', port)
})
