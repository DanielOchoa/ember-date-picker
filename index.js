/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-date-picker',

  included: function(app) {
    this.app = app;
    app.import('vendor/ember-date-picker.css');
  }
};
