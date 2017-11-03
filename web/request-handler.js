var http = require('http');
var path = require('path');
var archive = require('../helpers/archive-helpers');
var archiveHeaders = require('./http-helpers');

var fs = require('fs');

var url = 'www.google.com';


exports.handleRequest = function (req, res) {
  console.log('data: ', req.method);
  if (req.method === 'GET') {
    // archiveHeaders.serveAssets(res, './web/public/index.html', function() {
    //   if (err) {
    //     //handle the error
    //   } else {
    //     res.writeHead(200); 
    //     //res.write(data);
    //     console.log(data);
    //     res.end(data);
    //   }
    // });
    fs.readFile('./web/public/index.html', 'utf8', function (err, data) {
      if (err) {
        res.writeHead(404); 
        res.end();
      } else {
        res.writeHead(200); 
        console.log(data);
        res.end(data);
      }
    });
  }



///1)should return the content of a website from the archive
///2) Should 404 when asked for a nonexistent file
//server GET / should return the content of index.html:
//server archived websites GET should return the content of a website from the archive:

  // if (req.method === 'GET') {
  //   //Is the requested URL in our sites.txt file?
  //   var booleanURL = archive.isUrlInList(req.url, function(boolean) {
  //     return boolean;
  //   });
    
  //   //requested URL is not in our sites.txt file 
  //   if (!booleanURL) {
  //     res.writeHead(404);
  //     //redirrect them to loading.html page 
  //     res.redirect('./web/public/loading.html');
  //     // add URL to our list 
  //     res.addUrlToList('ADD URL HERE', (err) => { console.log(err); });
  //     // possibly invoke function that will start download url process
  //     res.end();

  //   //requested URL is in the sites.txt file
  //   } else {
  //     var headers = archiveHeaders.headers;
  //     res.writeHead(200, headers);
  //     //is file in URL achive ? true/false 
  //     //if true
  //       //render content of page 
  //     // else 
  //       //redirrect them to the loading.html page
  //   }


  if (req.method === 'POST') {
    console.log('I am inside post');

    var body = '';
    req.on('data', function (chunk) {
      body += chunk;
    });
    
    req.on('end', function () {
      console.log('here comes the url ', JSON.parse(body));
    });


    
  } else if (req.method === 'OPTIONS') {
    console.log('its OPTIONS');
  }
  console.log('end');
};


  //res.end(archive.paths.list);












