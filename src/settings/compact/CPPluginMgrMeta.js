import {MetaType} from '../../index-deps';
module.exports = function(options) {
    var PropMeta =[ {
        name: 'attachMgr',
        label: '附件管理',
        type: MetaType.Bool,
        props: {

        },
        defaultValue: true
    }, {
        name: 'viewApprove',
        label: '查看审批流',
        type: MetaType.Bool,
        props: {

        },
        defaultValue: true
    }, {
        name: 'exportExcel',
        label: '导出Excel',
        type: MetaType.Bool,
        props: {

        },
        defaultValue: true
    },{
        name:'sourceType',
        label:'业务类型',
        help:'单据下的细分业务类型标识',
        type: MetaType.Text,
        props: {

        },
        defaultValue: ''
    }
    ];
    return PropMeta;
};
