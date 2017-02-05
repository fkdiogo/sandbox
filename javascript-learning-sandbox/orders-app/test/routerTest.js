const mocha = require('mocha');
const assert = require('assert');
const request = require('supertest');

beforeEach(function() {
    console.log('running a new function')
});

describe('route-testing', () => {
    describe('#health-check', () => {
        it('should return http-status = 200 when the request is made', () => {
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
});