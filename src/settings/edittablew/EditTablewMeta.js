import {MetaType,SUPPORT_SERVER} from '../../index-deps';

module.exports = function(options) {
    var {tplNode,tplTree} = options;
    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.edittablew){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // if(tplNode.uitype == UiTypeDef.edittablew) {
        PropMeta.push({
            name: 'showRowNum',
            label: '生成序号',
            type: MetaType.Bool,
            props: {},
            defaultValue: false
        });
        if(tplNode.showRowNum===true){
            PropMeta.push({
                name: 'visibleRowNum',
                label: '显示序号',
                help: '当[生成序号]启用时，序号列在表格上是否可见',
                type: MetaType.Bool,
                props: {},
                defaultValue: true
            });
        }
        PropMeta = PropMeta.concat([{
            name: 'checkable',
            label: '多选模式',
            type: MetaType.Bool,
            props: {},
            defaultValue: true
        },{
            name:'bordered',
            label:'显示边框',
            type:MetaType.Bool,
            props: {

            },
            defaultValue:false
        },{
            name:'draggable',
            label:'列宽拖拽',
            type:MetaType.Bool,
            help:'当启用时支持表格表头（标题右侧边界处）进行拖拽调整列显示宽度',
            props: {

            },
            defaultValue:true
        }, {
            name: 'rowBreak',
            label: '换行显示',
            help: '单元格数据内容长度超过列宽度时是否换行显示，默认：false，即单一行显示超出内容为"..."',
            type: MetaType.Bool,
            props: {},
            defaultValue: false
        },{
            name: 'autoSelect',
            label: '联动勾选',
            help: '当父节点勾选后，子节点默认全部勾选',
            type: MetaType.Bool,
            props: {},
            defaultValue: false
        },{
            name:'enableRowClickEdit',
            label:'单行编辑',
            help:'启用此模式后，点击表格行，同一时间只编辑当前激活的行数据',
            type:MetaType.Bool,
            props: {

            },
            defaultValue:false
        }
        // ,{
        //     name: 'scrollX',
        //     label: '横向滚动',
        //     help:'配置是否启用横向滚动条，并指明横向滚动条的宽度',
        //     type: MetaType.SwitchText,
        //     props: {},
        //     defaultValue: null
        // }
        ,{
            name: 'scrollY',
            label: '高度限制',
            help:'当表格内容超过指定高度时，将出现垂直滚动条',
            type: MetaType.SwitchText,
            props: {},
            defaultValue:false
        },{
            name: 'system',
            label: '系统对象',
            type: MetaType.Refer,
            props: {

                refinfokey: 'meta-system',
                serverUrl: SUPPORT_SERVER
            },
            defaultValue:null
        }, {
            name: 'entity',
            label: '实体对象',
            type: MetaType.Refer,
            props: {
                refinfokey: 'meta-entty-list',
                serverUrl: SUPPORT_SERVER,
                condition:function(){
                    var rootSystem=(tplTree.dataprops||{}).system;
                    if(tplNode.dataprops&&tplNode.dataprops.system){
                        return {"system.systemName":tplNode.dataprops.system.systemName};
                    }else if(rootSystem){//再取页面级
                        return {"system.systemName":rootSystem.systemName};
                    }
                }()//注意立即执行
            },
            defaultValue:null
        },{
            name: 'fields',
            label:'选择字段',
            type:MetaType.Refer,
            help:"先选择[系统对象]，再选择[实体对象]，最后[选择字段]。Java字段属性转换规则如下：\n" +
            "针对java.util.Date、java.sql.Timestamp、java.sql.Time、java.sql.Date类型，如果有[数据类型]则为[日期值]，如果有[显示类型]则为[日期框]。\n" +
            "针对boolean、java.lang.Boolean类型，如果有[数据类型]则为[布尔值]，如果有[显示类型]则为[开关框]。\n" +
            "针对int、long、java.lang.Integer、java.lang.Long、java.math.BigInteger类型，如果有[数据类型]则为[整数值]，如果有[显示类型]则为[整数框]。\n" +
            "针对float、double、java.math.BigDecimal、java.lang.Float、java.lang.Double类型，如果有[数据类型]则为[精数值]，如果有[显示类型]则为[精确数值框]。\n"+
            "非以上特殊类型字段，如果有[数据类型]则默认为[字符串值]，如果有[显示类型]则默认为[文本框]。" ,
            props: {
                refinfokey: 'meta-entity-attr',
                serverUrl: SUPPORT_SERVER,
                multiselect:true,
                condition:function(){
                    //将实体名作为参照过滤条件
                    let cond = {};
                    let rootSystem=(tplTree.dataprops||{}).system;
                    var rootEntity=(tplTree.dataprops||{}).entity;
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
            defaultValue:null
        },{
            name: 'rowKey',
            label:'主键字段',
            type:MetaType.Select,
            props: {
                options: function(){
                    let items = [];
                    items.push({value: 'id',text: '默认(id)'});
                    (tplNode.children||[]).forEach(function(child) {
                        items.push({key: child.uikey, value: child.uikey,text: child.uititle});
                    });
                    return items;
                }()//注意立即执行
            },
            defaultValue:'id'
        },{
            name: 'dataSource',
            label: '本地数据',
            help: '配置本地演示数据',
            type: MetaType.LocalData,
            props: {
                owner: 'edittable',
                columns:tplNode.children!==undefined?tplNode.children:[]
            },
            defaultValue: [],
        },{
            name: 'totalIndex',
            label:'合计位置',
            help:'定义合计文本显示到哪一列，默认显示在勾选列，如果需要显示到其它字段列则配置对应字段键值，注意：确保列启用合计才生效',
            type:MetaType.Text,
            props: {

            },
            defaultValue:''
        },{
            name: 'totalText',
            label:'合计文本',
            help:'默认显示文本为“合计”，注意：确保列启用合计才生效',
            type:MetaType.Text,
            props: {

            },
            defaultValue:''
        }]);
    // }
    return PropMeta;
}
