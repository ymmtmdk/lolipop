'use strict';

var Vue = require('vue');

var Droppable = require('./Droppable');
var Header = require('./Header');
var Player = require('./Player');

// Set window title
var logo = twemoji.parse('\uD83D\uDC96\uD83D\uDC95\uD83D\uDC97');
logo = logo + '<div>L  O  L  I  P  O  P</div>' + logo;
document.getElementById('logo').innerHTML = logo;


var app = new Vue({
  el: '#app',
  data: {
    currentView: 'player'
  },
  methods: {

  }
});
