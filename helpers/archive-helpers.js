var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var http = require('http');
var https = require('https');
//var pagedownloader = require('pagedownloader');
//var scrape = require('website-scraper');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!


exports.readListOfUrls = function(callback) {
 // console.log('Im inside RLOURL');

  fs.readFile('./archives/sites.txt', 'utf8', function (err, data) {
    // don't know when this function will be invoked
    if (err) {
      console.log('ERROR: ', err);
    } else {
      callback(data);
    }
  }); 
};


// readListOfUrls(function (data) {
//   // have access to data from async call
// });

//we checking if the given URL is in our list
exports.isUrlInList = function(url, callback) {
  exports.readListOfUrls(function(data) {
    var dataArray = data.split('\n');
    //console.log('INSIDE URLinList:', dataArray, 'given URL: ', url);
    if (dataArray.indexOf(url) !== -1) { 
      callback(true);
    } else {
      callback(false);
    }
    //callback(dataArray.indexOf(url));

  });
};



//if the URL is not in the list, then we are adding it to our list 
exports.addUrlToList = function(url, callback) {
  fs.writeFile('./archives/sites.txt', url, function(err) {
    if (err) {
      callback(err);
    } else {
      callback('Requested url has been added to the list');
    }
  });
};

//do we have a file in our archive folder that corresponds to the URL 
exports.isUrlArchived = function(url, callback) {
  //is the URLlink in our URL list?
  // if yes, then check if the file (has the website body) exists in the archive folder
  fs.readdir('./archives/sites', function (err, items) {
    if (items.indexOf(url) !== -1) {
      callback(true);
    } else {
      callback(false);
    }
  });
};


exports.downloadUrls = function(url) {
  var fullUrl = 'http://' + url + '/';
 // console.log('Inside downloadUrls', url);
  http.get(fullUrl, function (res) {
   // console.log('im hereeerere');
    //res.setEncoding('utf8');
    var body = '';
    res.on('data', (chunk) => {
      body += chunk;
     // console.log('hey its me ', body);
    });
    res.on('end', () => {
      fs.writeFile(exports.paths.archivedSites + '/' + url, body, (err) => {
        if (err) {
          throw err;
        } 
        console.log('You have saved the file!!');
      });
    });
  });
};



































