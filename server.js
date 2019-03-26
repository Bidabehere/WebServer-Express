var express = require('express')
var app = express()
var hbs = require('hbs');
require('./hbs/helpers');

app.use( express.static( __dirname + '/public'));

// Express hbs engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

  


let vari = {
  nombre: 'Juan Pablo',
  //anio: new Date().getFullYear(),
};
 
app.get('/', function (req, res) {
  
  res.render('home', vari);
 
})
app.get('/about', function (req, res) {
  
  res.render('about', vari);
  
 })
 
 const port = process.env.PORT || 3000;

app.listen(port, () => {
console.log(`Escuchando en el puerto ${port}`)  ;
})

