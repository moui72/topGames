'use strict';
module.exports = function(server) {
  var ds = server.dataSources.maindb;

  ds.automigrate(function(args) {
    console.log(args);
    // asd
  });
};
