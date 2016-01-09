var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
var bowlingScore = require('../bowlingScore');

describe('bowlingScore', function() {

  var bowlingScoreTest;

  it('should be a function', function() {
    expect(bowlingScore).to.be.a('function');
  });
});