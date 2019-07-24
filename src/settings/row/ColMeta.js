import {MetaType} from '../../index-deps';
module.exports = function(options) {
	var PropMeta = [{
	    name: 'span',
	    label: '栅格占位',
	    type: MetaType.Number,
	    props: {
	        min:0,
	        max:24,
	        enableSelect:false
		},
	    defaultValue: null
	}];
	return PropMeta;
}