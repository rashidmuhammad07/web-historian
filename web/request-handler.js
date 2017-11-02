var http = require('http');
var path = require('path');
var archive = require('../helpers/archive-helpers');
var archiveHeaders = require('./http-helpers');

var fs = require('fs');


exports.handleRequest = function (req, res) {
  
  fs.readFile('./web/public/index.html', function (err, data) {
    if (err) {
      res.writeHead(404); 
      res.end();
    } else {
      res.writeHead(200, {
        'Content-Type': 'index/html'
      }); 
      var body = '';
      
      body += data;
      res.write(data);
      res.end();
    }
  });

  archive.isUrlInList('www.google.com', function() {
    console.log('HEREREERE');
  });
  
  // if (req.method === 'GET') {
  //   var headers = archiveHeaders.headers;
  //   res.writeHead(200, headers);
     
  // }


};


  //res.end(archive.paths.list);
