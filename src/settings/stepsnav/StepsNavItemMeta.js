import {MetaType} from '../../index-deps';
module.exports = function(options) {
    var PropMeta = [{
        name: 'icon',
        label: '图标',
        type: MetaType.Icon,
        props: {},
        defaultValue: ''
    },{
        name: 'linkTarget',
        label: '跳转目标',
        type: MetaType.Text,
        props: {

        },
        defaultValue: ''
    },{
        name: 'description',
        label: '描述',
        type: MetaType.Text,
        props: {

        },
        defaultValue: ''
    }];

    return PropMeta;
}
