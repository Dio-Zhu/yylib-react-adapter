import {MetaType,SUPPORT_SERVER} from '../../index-deps';
module.exports = function(options) {
    var PropMeta = [{
        name:'billType',
        label:'单据类型',
        type:MetaType.Refer,
        props:{

            refinfokey: 'bill_001',
            serverUrl: SUPPORT_SERVER
        },
        defaultValue:''
    },{
        name:'enableUser',
        label:'当前用户',
        type:MetaType.Bool,
        props:{

        },
        defaultValue:true  
    },{
        name:'enableOrg',
        label:'当前组织',
        type:MetaType.Bool,
        props:{

        },
        defaultValue:true  
    },{
        name:'enableUnSelect',
        label:'启用反选',
        type:MetaType.Bool,
        props:{

        },
        defaultValue:true
    }];
    return PropMeta;
    
}