'use strict';

module.exports = {
  name: 'ember-date-picker',

  normalizeEntityName: function() { },

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      {name: 'ember-spin-box', target: '~0.0.5'}
    ]);
  }
};
