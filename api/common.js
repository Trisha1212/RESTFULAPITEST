var chai = require('chai');
var assert = chai.assert;
var status = function() {

    //var host = process.env.npm_package_config_host || '127.0.0.1';
   // var port = process.env.npm_package_config_port || 28000;
  
    this.baseurl = 'http://httpbin.org';

    this.failStatus = function(response) {
      //console.log(response.error) // for debugging
        assert.equal('405', response.status);
      
    }

    this.successStatus = function(response) {
        assert.equal('200', response.status);
      //  console.log(response.body) // for debugging
      
       
    }
}

module.exports = new status();