import {MetaType,SUPPORT_SERVER} from '../../index-deps';

module.exports = function(options) {
    var {tplNode,tplTree} = options;
    var PropMeta = [ {
        name: 'colnumber',
        label: '布局',
        type: MetaType.Select,
        props: {
            options: [
                {value: 1, text: '一行一列'},
                {value: 2, text: '一行两列'},
                {value: 3, text: '一行三列'},
                {value: 4, text: '一行四列'}],
        },
        defaultValue: 2
    }, {
        name: 'visible',
        label: '是否显示',
        type: MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'labelCol',
        label: '标签宽度',
        type: MetaType.Number,
        props: { max: 24, enableSelect: false},
        defaultValue: 6
    }, {
        name: 'wrapperCol',
        label: '内容宽度',
        type: MetaType.Number,
        props: { max: 24, enableSelect: false},
        defaultValue: 14
    }, {
        name: 'system',
        label: '系统对象',
        type: MetaType.Refer,
        props: {
            refinfokey: 'meta-system',
            serverUrl: SUPPORT_SERVER
        },
        defaultValue: null
    }, {
        name: 'entity',
        label: '实体对象',
        type: MetaType.Refer,
        props: {
            refinfokey: 'meta-entty-list',
            serverUrl: SUPPORT_SERVER,
            condition:function(){
                var rootSystem=(tplTree.dataprops||{}).system;
                if(tplNode.dataprops&&tplNode.dataprops.system){//先取自身级
                    return {"system.systemName":tplNode.dataprops.system.systemName};
                }else if(rootSystem){//再取页面级
                    return {"system.systemName":rootSystem.systemName};
                }
            }()
        },
        defaultValue: null
    }, {
        name: 'fields',
        label: '选择字段',
        type: MetaType.Refer,
        help:"先选择[系统对象]，再选择[实体对象]，最后[选择字段]。Java字段属性转换规则如下：\n" +
        "针对java.util.Date、java.sql.Timestamp、java.sql.Time、java.sql.Date类型，如果有[数据类型]则为[日期值]，如果有[显示类型]则为[日期框]。\n" +
        "针对boolean、java.lang.Boolean类型，如果有[数据类型]则为[布尔值]，如果有[显示类型]则为[开关框]。\n" +
        "针对int、long、java.lang.Integer、java.lang.Long、java.math.BigInteger类型，如果有[数据类型]则为[整数值]，如果有[显示类型]则为[整数框]。\n" +
        "针对float、double、java.math.BigDecimal、java.lang.Float、java.lang.Double类型，如果有[数据类型]则为[精数值]，如果有[显示类型]则为[精确数值框]。\n"+
        "非以上特殊类型字段，如果有[数据类型]则默认为[字符串值]，如果有[显示类型]则默认为[文本框]。" ,
        props: {
            refinfokey: 'meta-entity-attr',
            serverUrl: SUPPORT_SERVER,
            multiselect: true,
            condition:function(){
                let rootSystem=(tplTree.dataprops||{}).system;
                let rootEntity=(tplTree.dataprops||{}).entity;
                //将实体名作为参照过滤条件
                let cond = {};
                if(tplNode.dataprops&&tplNode.dataprops.entity){//先取自身级
                    cond["entity.entityFullName"]=tplNode.dataprops.entity.entityFullName;
                }else if(rootEntity){//再取页面级
                    cond["entity.entityFullName"]=rootEntity.entityFullName;
                }
                if(tplNode.dataprops&&tplNode.dataprops.system){//先取自身级
                    cond["projectName"]=tplNode.dataprops.system.systemName;
                }else if(rootSystem){//再取页面级
                    cond["projectName"]=rootSystem.systemName;
                }
                return cond;
            }()//注意立即执行
        },
        defaultValue: null
    }]
    return PropMeta;
}