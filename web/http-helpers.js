var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');


exports.headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'text/html'
};

exports.serveAssets = function(res, asset, callback) {
  //read the file
  fs.readFile('./web/public/index.html', 'utf8', function (err, data) {
    if (err) {
      res.writeHead(404); 
      res.end();
    } else {
      // res.writeHead(200); 
      // //res.write(data);
      // console.log(data);
      // res.end(data);
    }
  });
};




// As you progress, keep thinking about what helper functions you can put here!
