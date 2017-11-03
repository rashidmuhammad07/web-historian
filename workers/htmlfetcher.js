var archive = require('../helpers/archive-helpers');
//fetch list of urls 


archive.readListOfUrls(function(data) {
  var dataArray = data.split('\n');
  
  dataArray.forEach(function(url) {
    //is url archived yet? yes/no
    archive.isUrlArchived(url, function(boolean) {
      //if false then archive 
      if (boolean === false) {
        archive.downloadUrls(url);
      }
    });   
  });
});

