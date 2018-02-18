
request = require('supertest-as-promised')

//GET: http://httpbin.org/ip/ 
exports.ip = function(baseurl){
  return request(baseurl)
           .get('/ip')
};

//GET : http://httpbin.org/user-agent
exports.useragent = function(baseurl) {
    return request(baseurl)
        .get('/user-agent')
};
// GET : http://httpbin.org/get
exports.get = function(baseurl) {
    return request(baseurl)
        .get('/get')
};

//GET: http://httpbin.org/ip/ 
exports.postIp = function(baseurl){
  return request(baseurl)
           .post('/ip')
};

//GET: http://httpbin.org/ip/ 
exports.putIp = function(baseurl){
  return request(baseurl)
           .put('/ip')
};

//GET: http://httpbin.org/ip/ 
exports.deleteIp = function(baseurl){
  return request(baseurl)
           .delete('/ip')
};

//GET : http://httpbin.org/user-agent
exports.putUseragent = function(baseurl) {
    return request(baseurl)
        .put('/user-agent')
};

//GET : http://httpbin.org/user-agent
exports.postUseragent = function(baseurl) {
    return request(baseurl)
        .post('/user-agent')
};

//GET : http://httpbin.org/user-agent
exports.deleteUseragent = function(baseurl) {
    return request(baseurl)
        .delete('/user-agent')
};

// GET : http://httpbin.org/get
exports.postGet = function(baseurl) {
    return request(baseurl)
        .post('/get')
};

// GET : http://httpbin.org/get
exports.putGet = function(baseurl) {
    return request(baseurl)
        .put('/get')
};

// GET : http://httpbin.org/get
exports.deleteGet = function(baseurl) {
    return request(baseurl)
        .delete('/get')
};