'use strict';

var _indexDeps = require('../../index-deps');

module.exports = function (options) {
	var PropMeta = [{
		name: 'type',
		label: '类型',
		type: _indexDeps.MetaType.Select,
		props: {
			options: [{ value: 'inline', text: '水平分隔' }, { value: 'vertical', text: '垂直分隔' }]
		},
		defaultValue: 'vertical'
	}];
	return PropMeta;
};