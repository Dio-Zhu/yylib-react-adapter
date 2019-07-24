'use strict';

var _indexDeps = require('../../index-deps');

module.exports = function (options) {
	var PropMeta = [{
		name: 'href',
		label: '链接',
		type: _indexDeps.MetaType.Text,
		props: {},
		defaultValue: ''
	}, {
		name: 'visible',
		label: '显示',
		type: _indexDeps.MetaType.Bool,
		props: {},
		defaultValue: true
	}];

	return PropMeta;
};