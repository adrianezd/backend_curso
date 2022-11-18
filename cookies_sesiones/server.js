const express = require('express');
const cookieSession = require('cookie-session');
const app = express();

app.use(cookieSession({
  name: 'session',
  keys: ['gdjasgdkas1esdajgl123','djaskjadhsdhl128793sadhkd']
}));
app.set('view engine','ejs');

app.get('/', function(req,res){
  req.session.visits = req.session.visits || 0
  req.session.visits = req.session.visits + 1
  res.send(`${req.session.visits}, visita(s)`);
})

app.listen(3000);
