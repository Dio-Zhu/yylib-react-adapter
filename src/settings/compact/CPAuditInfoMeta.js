import {MetaType,SUPPORT_SERVER} from '../../index-deps';
module.exports = function(options) {
    var PropMeta = [{
        name: 'primaryKey',
        label: '主键字段',
        type: MetaType.Text,
        props: {

        },
        defaultValue: 'id'
    },{
        name: 'billType',
        label: '单据类型',
        type: MetaType.Refer,
        props:{

            refinfokey: 'bill_001',
            serverUrl: SUPPORT_SERVER
        },
        defaultValue: null
    },{
        name: 'bpm',
        label: '走审批流',
        type: MetaType.Bool,
        props: {

        },
        defaultValue: true
    }];

    return PropMeta;
}