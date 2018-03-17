var http = require("http");

var isInTest = typeof global.it === 'function';

function HomeMaticRegaRequestTestDriver(log, ccuip) {
  this.log = log;
  this.ccuIP = ccuip;
  this.timeout = 120;
  this.data = 0;
  if (!isInTest) {
    this.log.warn('Rega Dummy Class for Tests only it looks like i am running in production mode.')
  }
}

HomeMaticRegaRequestTestDriver.prototype = {

  script: function(script, callback) {
    callback(this.data)
  },

  getValue: function(channel, datapoint, callback) {
    this.log.warn('getback %s',this.data)
    callback(this.data);
  },

  setValue: function(channel, datapoint, value) {
  },

  setVariable: function(channel, value) {
  },


  getVariable: function(channel, callback) {
    this.log.warn('getback %s',this.data)
    callback(this.data);
  },

  isInt: function(n){
    return Number(n) === n && n % 1 === 0;
  },

  isFloat: function(n){
    return n === Number(n) && n % 1 !== 0;
  }

};

module.exports = {
  HomeMaticRegaRequestTestDriver: HomeMaticRegaRequestTestDriver
}