"use strict";

const assert = require('assert');
const getPalette = require('../lib/getPalette');

describe('getPalette', function() {

  it('should throw an error if not an array', function(){
    var fetch = function(){
      return 'new array';
    };

    assert.throws(function(){
      getPalette.palets(fetch);
    }, /not an array/);
  });

  it('should return 3 for length of array by default', function() {
    var palets = getPalette.palets();
    assert(Array.isArray(palets), "Should be an array");
    assert.equal(palets.length, 3, "Didn't return 3 items");
  });
})
