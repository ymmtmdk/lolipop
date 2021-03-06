'use strict';

var Vue = require('vue');

var Droppable = require('./VM/Droppable');
var Header = require('./VM/Header');
var Sidebar = require('./VM/Sidebar');
var Player = require('./VM/Player');
var Song = require('./models/Song');
var PlaylistLoader = require('./VM/PlaylistLoader');

var remote = require('remote');
var app = remote.require('app');


var main = new Vue({
  el: '#app',
  data: {
    currentView: 'player'
  },
  created: function () {
    this.$on('close', this.close);
    this.$on('hide', this.hide);
  },
  methods: {
    close: function () {
      this.$.loader.close()
        .then(function () {
          console.log('QUIT!');
          app.quit();
        });
    },
    hide: function () {
      remote.getCurrentWindow().minimize();
    }
  }
});
