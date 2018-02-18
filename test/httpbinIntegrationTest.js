/**
 *  Class provides the checks for API endpoint : GET: http://httpbin.org/ip
 *  @author Trisha Chetani
 */
'use strict'

var httpbinAPI = require('../api/httpbinAPI.js');
var common = require('../api/common.js')


var chai = require('chai');
var assert = chai.assert; // Using Assert style



/**
 * provides checks for httpbin
 */
describe("GET: http://httpbin.org/ip/", function() {
    /**
     * provides check for successfully calling api with query param @ip
     * @return api address
     * @ verify response is in json
     */
    it("should return successful response with query param IP address AND GET request", function(done) {
        httpbinAPI.ip(common.baseurl)
            .expect('Content-Type', /json/)
            .then(function(response) {
                common.successStatus(response);
                done();
            });
    });

     /**
     * provides check for successfully calling api with query param @ip
     * @return failure as post request
     */
    it("should return failure response with query param IP address AND POST request", function(done) {
        httpbinAPI.postIp(common.baseurl)
            .then(function(response) {
                common.failStatus(response);
                done();
            });
    });

    /**
     * provides check for successfully calling api with query param @ip
     * @return failure as put request
     */
    it("should return failure response with query param IP address AND PUT request", function(done) {
        httpbinAPI.putIp(common.baseurl)
            .then(function(response) {
                common.failStatus(response);
                done();
            });
    });

    /**
     * provides check for successfully calling api with query param @ip
     * @return failure as delete request
     */
    it("should return failure response with query param IP address AND DELETE request", function(done) {
        httpbinAPI.deleteIp(common.baseurl)
            .then(function(response) {
                common.failStatus(response);
                done();
            });
    });

    /**
     * provides check for successfully calling api with query param @user agent
     * @return useragent
     */
    it("should return successful response with query param useragent and GET request", function(done) {
        httpbinAPI.useragent(common.baseurl)
            .then(function(response) {
                common.successStatus(response);
                done();
            });
    });

     /**
     * provides check for successfully calling api with query param @user agent
     * @return failure as put
     */
    it("should return failure response with query param useragent and PUT request", function(done) {
        httpbinAPI.putUseragent(common.baseurl)
            .then(function(response) {
                common.failStatus(response);
                done();
            });
    });

    /**
     * provides check for successfully calling api with query param @user agent
     * @return failure as post
     */
    it("should return failure response with query param useragent AND POST REQUEST", function(done) {
        httpbinAPI.postUseragent(common.baseurl)
            .then(function(response) {
                common.failStatus(response);
                done();
            });
    });

    /**
     * provides check for successfully calling api with query param @user agent
     * @return failure as post
     */
    it("should return failure response with query param useragent AND DELETE request", function(done) {
        httpbinAPI.deleteUseragent(common.baseurl)
            .then(function(response) {
                common.failStatus(response);
                done();
            });
    });


    /**
     * provides check for successfully calling api with query param @get
     * @return all information
     */
    it("should return success response with query param information AND GET request", function(done) {
        httpbinAPI.get(common.baseurl)
            .then(function(response) {
                common.successStatus(response);
                done();
            });
    });

    /**
     * provides check for successfully calling api with query param @get
     * @return failure as as post request
     */
    it("should return failure response with query param information AND POST request", function(done) {
        httpbinAPI.postGet(common.baseurl)
            .then(function(response) {
                common.failStatus(response);
                done();
            });
    });

    /**
     * provides check for successfully calling api with query param @get
     * @return failure as as put request
     */
    it("should return failure response with query param information AND PUT request", function(done) {
        httpbinAPI.putGet(common.baseurl)
            .then(function(response) {
                common.failStatus(response);
                done();
            });
    });

    /**
     * provides check for successfully calling api with query param @get
     * @return failure as as delete request
     */
    it("should return failure response with query param information AND DELETE request", function(done) {
        httpbinAPI.deleteGet(common.baseurl)
            .then(function(response) {
                common.failStatus(response);
                done();
            });
    });
});