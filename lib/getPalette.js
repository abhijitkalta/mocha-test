"use strict";

var getPalette = () => {
  return ['#ddd','#c08745', '#b23451'];
} ;

module.exports = {
  palets: function(fetch){
    fetch = fetch || getPalette ;
    var arr = fetch();
    if(!Array.isArray(arr)){
      throw new Error("Palette is not an array");
    };
    return arr;
  }
}
