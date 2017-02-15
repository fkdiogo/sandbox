const mocha = require('mocha');
const assert = require('assert');
const request = require('supertest');
const express = require('express');
const app = express();

beforeEach(function() {
    console.log('running a new function')
});

describe('route-testing', () => {
    describe('#health-check', () => {
        it('Array sample', () => {
            assert.equal(-1, [1,2,3].indexOf(4));
        });
        it('should return http-status = 200 when the request is made', (done) => {
            request(app)
                .get('/healthcheck')
                .expect(200, done); 
        });
    });
});