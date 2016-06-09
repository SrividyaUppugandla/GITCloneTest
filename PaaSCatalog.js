/**
 * Created by Srividya on 23/05/16.
 */
var express = require('express');
var router = express.Router();

var async = require('async');

var dataClient = require('./DataClient.js');


/*
 This rest api is used to create the GIST structure.
 This api call needs data in body to create GIST data structure like description and files which we need to create.
 */
/*
router.route('/createCatalog')
    .post(function (request, response) {

        var callBack = function (error, result) {
            if (error) {
                response.send(error);
            }
            else {
                response.send(result);
            }
        };

        var createData = function (callBack) {
            dataClient.createData(request, callBack);
        };
        async.waterfall([createData], callBack);
    });
    */

/*
 This rest api is used to get the entire data.
 */
router.route('/catalog')
    //.options(function (req, res, next) {
    //    var reqData = "";
    //    req.on('data', function (chunck) {
    //        reqData += chunck;
    //    });
    //
    //    req.on('end', function () {
    //        console.log('********* inside options');
    //        res.setHeader("Status-Code", 200);
    //        res.setHeader("Access-Control-Allow-Headers", "*");
    //        res.setHeader('Content-Type', 'application/json');
    //        res.setHeader("Access-Control-Allow-Origin", "*");
    //        res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    //        res.end();
    //    });
    //})

    .get(function (request, response) {
        var callbackHandler = function (error, result) {
            if (error) {
                response.send(error);
            }
            else {
                response.setHeader("Status-Code", 200);
                response.setHeader("Access-Control-Allow-Headers", "*");
                response.setHeader('Content-Type', 'application/json');
                response.setHeader("Access-Control-Allow-Origin", "*");
                response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
                response.send(result);
            }
        };
        dataClient.getData(request, response, callbackHandler);
    });

/*
 This rest api is used to Edit the data.
 This api call needs data in body to edit  data structure like description and files which we need to edit.
 */
/*
router.route('/editCatalog')
    .patch(function (request, response) {

        var callBack = function (error, result) {
            if (error) {
                response.send('Creation Error**' + error);
            }
            else {
                response.send(result);
            }
        };
        var editData = function (callBack) {
            dataClient.editData(request, callBack);
        };
        async.waterfall([editData], callBack);
    });
*/

/*
 This rest api is used to Search the data.
 This api call needs searchstring & type of search like need category,hooks as query parameters.
 */
router.route('/searchCatalog')
    .get(function (request, response) {
        var callBack = function (error, result) {
            if (error) {
                response.send(error);
            }
            else {
                if (result.length == 0) {
                    response.send('No Results Found');
                }
                else {
                    response.setHeader("Status-Code", 200);
                    response.setHeader("Access-Control-Allow-Headers", "*");
                    response.setHeader('Content-Type', 'application/json');
                    response.setHeader("Access-Control-Allow-Origin", "*");
                    response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
                    response.send(result);
                }
            }
        };
        var searchData = function (callBack) {
            dataClient.searchData(request, response, callBack);
        };
        async.waterfall([searchData], callBack);
    });


/*
 This rest api is used to get the categories data.
 This api call needs id of category & platforms as query parameters.
 */
router.route('/platformservices')
    .get(function (request, response) {
        var callBack = function (error, result) {
            if (error) {
                response.send(error);
            }
            else {
                if (result.length == 0) {
                    response.send('No Results Found');
                }
                else {
                    response.setHeader("Status-Code", 200);
                    response.setHeader("Access-Control-Allow-Headers", "*");
                    response.setHeader('Content-Type', 'application/json');
                    response.setHeader("Access-Control-Allow-Origin", "*");
                    response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
                    response.send(result);
                }
            }
        };
        var relatedData = function (callBack) {
            dataClient.getRelatedData(request, callBack);
        };
        async.waterfall([relatedData], callBack);
    });

module.exports = router;