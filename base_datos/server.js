const express = require('express')
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();

app.use(bodyParser.urlencoded({extented: true}))

//let db = new sqlite3.Database('db_backend');

const sequelize = new Sequelize("db_backend",null,null,{
  dialect: 'sqlite',
  storage: './db_backend'
});

app.post('/pendientes',function(req,res){
  //db.run(`INSERT INTO tasks(description) VALUES(?)`,req.body.description);
  res.send("Insercion finalizada")
})



app.listen(3000)

//process.on('SIGINT',function(){
//  console.log('Adios, cerraste el server');
//  db.close();
//  process.exit();
//})
