'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on bitcore-p2p-sv Module {0}'
};

module.exports = require('bitcore-lib-sv').errors.extend(spec);
