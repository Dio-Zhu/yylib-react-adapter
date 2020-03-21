import {MetaType,SUPPORT_SERVER} from '../../index-deps';
var {UiTypeDef} = require('../../MyUiDefines');
module.exports = function(options){
    var {tplNode,tplTree} = options;
    var PropMeta =[];
    // if(!process.env.YYLIB_ENV) {//开发态
    //     PropMeta.push(
    //         {
    //             name: 'logicFormula',
    //             label: '逻辑公式',
    //             type: MetaType.LogicFormula,//对Blockly有依赖暂去除
    //             props: {
    //
    //             },
    //             defaultValue: null
    //         }
    //     )
    // }
    PropMeta = PropMeta.concat([{
        name: 'system',
        label: '系统对象',
        type: MetaType.Refer,
        props: {

            refinfokey: 'meta-system',
            serverUrl: SUPPORT_SERVER
        },
        defaultValue:null
    },{
        name: 'entity',
        label: '实体对象',
        type: MetaType.Refer,
        props: {
            refinfokey: 'meta-entty-list',
            serverUrl: SUPPORT_SERVER,
            condition:function(){
                //依据系统名称筛选实体
                if(tplNode.dataprops&&tplNode.dataprops.system){
                    return {"system.systemName":tplNode.dataprops.system.systemName};
                }
            }()//注意立即执行
        },
        defaultValue:null
    }]);
    if(tplNode.uitype === UiTypeDef.CPListPage){
        PropMeta.push(
            {
                name:'billType',
                label:'单据类型',
                type:MetaType.Refer,
                props: {

                    refinfokey: 'bill_001',
                    serverUrl: SUPPORT_SERVER
                },
                defaultValue:null
            }
        )
    }
    return PropMeta;
}