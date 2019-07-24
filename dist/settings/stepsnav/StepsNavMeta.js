'use strict';

var _indexDeps = require('../../index-deps');

module.exports = function (options) {
	var PropMeta = [{
		name: 'target',
		label: '监听目标',
		type: _indexDeps.MetaType.Text,
		props: {},
		defaultValue: ''
	}];

	return PropMeta;
};