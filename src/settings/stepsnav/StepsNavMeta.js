import {MetaType} from '../../index-deps';
module.exports = function(options) {
	var PropMeta = [{
	    name: 'target',
	    label: '监听目标',
	    type: MetaType.Text,
	    props: {},
	    defaultValue: ''
	}];

	return PropMeta;
}