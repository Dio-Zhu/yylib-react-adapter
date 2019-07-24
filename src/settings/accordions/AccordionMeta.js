import {MetaType} from '../../index-deps';
module.exports = function(options) {
    var PropMeta = [
    {
        name: 'isOpen',
        label: '默认展开',
        type: MetaType.Bool,
        props: {

        },
        defaultValue: false
    },{
        name: 'visible',
        label: '显示',
        type: MetaType.Bool,
        props: {

        },
        defaultValue: true
    }];
    return PropMeta
}