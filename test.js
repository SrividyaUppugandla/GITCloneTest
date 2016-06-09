var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('./app.js');
var should = chai.should();
chai.use(chaiHttp);

var todoID;

/**
 * Test Suites
 */
describe('PaaSCatalog Test Cases', function () {
    // Start the server before the test case with delay of 1second to instantiate the routers
    before(function (done) {
        this.request = chai.request(server);
        setTimeout(function () {
            done();
        }, 1000);
    });
    describe('Getting of particular data based on type', function () {
        it('should be able to GET entire data without any problem', function (done) {
            this.request.get('/PaaSCatalog/catalog?type=category')
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.have.property('text');
                    res.body.should.have.property('categories');
                    done();
                });
        });
    });

    describe('Method Search', function () {
        it('should able to search data based on user search string', function (done) {
            var searchString = 'facebbok';
            this.request.get('/PaaSCatalog/searchCatalog?searchString=facebook&type=category')
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.have.property('text');
                    res.body.should.be.an.Array;
                    done();
                });
        });
    });

    describe('Method Get Data', function () {
        it('should be able to get required data without problems', function (done) {
            this.request.get('/PaaSCatalog/platformservices?id=1234567890&platform=cognizantone,bluemix')
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.body.should.have.property('keys');
                    done();
                });
        });
    });
});

