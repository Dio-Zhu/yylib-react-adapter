import {MetaType} from '../../index-deps';
module.exports = function (options) {
    const PropMeta = [
        {
            name: 'linkTable',
            label: '关联表格',
            type: MetaType.Text,
            props: {},
            defaultValue: ''
        },
    ];
    return PropMeta;
};
