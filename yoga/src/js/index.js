require('es6-promise').polyfill();
require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  let tabs = require('./parts/tabs'),
    scroll = require('./parts/scroll'),
    timer = require('./parts/timer'),
    newModal = require('./parts/newModal'),
    form = require('./parts/form'),
    slider = require('./parts/slider'),
    calc = require('./parts/calc');
  
  tabs();
  scroll();
  timer();
  newModal();
  form();
  slider();
  calc();
});