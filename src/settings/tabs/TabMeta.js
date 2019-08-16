import {MetaType} from '../../index-deps';
module.exports = function(options) {
	var PropMeta = [{
        name: 'visible',
        label: '显示',
        type: MetaType.Bool,
        props: {},
        defaultValue: true
    }];
	return PropMeta;
}