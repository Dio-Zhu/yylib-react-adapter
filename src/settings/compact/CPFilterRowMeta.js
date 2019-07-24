import {MetaType,SUPPORT_SERVER} from '../../index-deps';
module.exports = function (options) {
    const PropMeta = [
        {
            name: 'title',
            label: '条件标题',
            type: MetaType.Text,
            props: {},
            defaultValue: ''
        },
        {
            name: 'rowKey',
            label: '条件行键值',
            type: MetaType.Text,
            props: {},
            defaultValue: ''
        },
        {
            name: 'multiple',
            label: '多选模式',
            type: MetaType.Bool,
            props: {},
            defaultValue: true
        },
        {
            name: 'referObj',
            label: '档案编码',
            props: {
                refinfokey: 'bd-009',
                serverUrl: SUPPORT_SERVER,
            },
            type: MetaType.Refer,
            defaultValue: ''
        },
        {
            name: 'serverUrl',
            label: '服务地址',
            type: MetaType.Text,
            props: {},
            defaultValue: ''
        },
        {
            name: 'enableOrg',
            label: '当前组织',
            type: MetaType.Bool,
            props: {},
            defaultValue: false
        }
    ];
    return PropMeta;
};
