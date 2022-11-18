const express = require('express');

const app = express();

app.set('view engine','ejs');

app.use('/assets',express.static('assets',{
    etag: false,
    maxAge: '5h' //cache 5 horas 
})) //inserta en middleware

app.get('/',function(req,res){
  res.render('index');
  //res.sendFile('index.html',{
  //  root: __dirname
  //});
  //res.send(__dirname);
});

app.listen(3000);
