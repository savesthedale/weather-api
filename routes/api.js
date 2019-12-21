

var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
var cookieParser = require('cookie-parser');
var session = require('express-session');
// router.use('/api', require('./api.v0/.js'));


  // router.get('/', function(req, res, next) {
  //   var info = req.query;
  //   var coor = JSON.parse(info);
  //   console.log("%%%%%%%%%");
  //   console.log(coor);
  //   res.render('index', { title: 'meme' });
  // });


// var coord = loc();


// fetch('https://api.darksky.net/forecast/'+process.env.API+'/'+lat+','+lon)
// .then(response => response.json())
// .then(data => {
//     var currently = JSON.stringify(data.currently);
//   })
// .catch(err => err)


router.get('/currently', function(req, res, next) {

  //console.log('lat: ', req.cookies.lat)
  fetch('https://api.openweathermap.org/data/2.5/weather?lat='+req.cookies.lat+'&lon='+req.cookies.lon+'&units=imperial&appid='+process.env.API)

  .then(response => response.json())
  .then(data => {
      var main = data.main;
      res.send(main.temp.toString());
    })
  .catch(err => err)

});



module.exports = router;
