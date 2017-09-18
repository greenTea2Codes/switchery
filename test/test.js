// Driver setup
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const window = (new JSDOM('')).window;

global.navigator = {
  userAgent: 'node.js'
};
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

// Script to be tested
var Switchery = require('../switchery.js');

describe('Switchery()', function(){
  it('Switchery(element) should create a switchery object with default options', function(){
    // default values when no options are passed to Switchery option parameter
    var defaults = {
      color             : '#64bd63'
      , secondaryColor    : '#dfdfdf'
      , jackColor         : '#fff'
      , jackSecondaryColor: null
      , className         : 'switchery'
      , disabled          : false
      , disabledOpacity   : 0.5
      , speed             : '0.4s'
      , size              : 'default'
    };
    var checkbox = window.document.createElement('input');
    checkbox.className = 'js-switch';
    var switchy = new Switchery(checkbox);
    assert.deepEqual( switchy.options, defaults);
  });
  it('Switchery(element, customOptions) should create a switchery object with custom options', function(){
    // default values when no options are passed to Switchery option parameter
    var customValues = {
      color             : 'red'
      , secondaryColor    : 'white'
      , jackColor         : 'black'
      , jackSecondaryColor: 'white'
      , className         : 'switchery'
      , disabled          : true
      , disabledOpacity   : 0.8
      , speed             : '0.8s'
      , size              : 'small'
    };
    var checkbox = window.document.createElement('input');
    checkbox.className = 'js-switch';
    var switchy = new Switchery(checkbox, customValues);
    assert.deepEqual( switchy.options, customValues);

  });
  // it('should not create an object if the element is a switchery object already', function(){
  //   var checkbox = window.document.createElement('input');
  //   checkbox.className = 'js-switch';
  //   var switchy = new Switchery(checkbox);
  //   //var bool = switchy instanceof Switchery;
  //   //console.log(checkbox instanceof Switchery);
  //   var newSwitchy = new Switchery(switchy);
  //   //console.log(newSwitchy);
  //   expect(newSwitchy).to.be.an.instanceOf(Switchery);
  // });
  it('Switchery.prototype.hide(): should set display as none', function(){
    var checkbox = window.document.createElement('input');
    checkbox.className = 'js-switch';
    var switchy = new Switchery(checkbox);
    switchy.hide();
    assert(switchy.element.style.display, 'none');
  });
  it('Switchery.prototype.create(): should create a span element' +
    'using switchery css class and containing small element and events', function(){
    var checkbox = window.document.createElement('input');
    checkbox.className = 'js-switch';
    window.document.body.appendChild(checkbox);
    var switchy = new Switchery(checkbox);
    //var switcher = switchy.create();
    var documentElements = window.document.documentElement.innerHTML;
    console.log(documentElements);
    //console.log(switcher);
  });
});