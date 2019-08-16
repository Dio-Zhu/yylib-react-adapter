import {MetaType} from '../../index-deps';
module.exports = function(options) {
	var PropMeta = [
	{
	    name: 'href',
	    label: '链接',
	    type: MetaType.Text,
	    props: {},
	    defaultValue: ''
	},{
        name: 'visible',
        label: '显示',
        type: MetaType.Bool,
        props: {},
        defaultValue: true
    }];

	return PropMeta;	
}
