"use strict";

const assert = require('assert');
const getPalette = require('../lib/getPalette');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('getPalette', function() {

  it('should be called once', function(done){
    sinon.spy(getPalette, 'palets');
    var paletts = getPalette.palets();
    expect(getPalette.palets.calledOnce).to.be.true;
    expect(getPalette.palets.args[0]).to.have.length(0);
    console.log(getPalette.palets.args[0]);
    getPalette.palets.restore();
    done();
  });

  it('should always return 3 values', function(done){
    sinon.stub(getPalette, 'palets').returns([1,2,3]);
    var pallets = getPalette.palets();
    expect(pallets).to.have.length(3);
    getPalette.palets.restore();
    done();
  });

  it('should have no arguments', function(done){
    var mock = sinon.mock(getPalette);
    mock.expects('palets').twice().withExactArgs();
    getPalette.palets();
    getPalette.palets();
    mock.verify();
    done();
  })

  it('should throw an error if not an array', function() {
    var fetch = function() {
      return 'new array';
    };

    assert.throws(function() {
      getPalette.palets(fetch);
    }, /not an array/);
  });

  it('should return 3 for length of array by default', function() {
    var palets = getPalette.palets();
    assert(Array.isArray(palets), "Should be an array");
    assert.equal(palets.length, 3, "Didn't return 3 items");
  });
})
