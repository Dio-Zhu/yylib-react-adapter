'use strict';

var _indexDeps = require('../../../index-deps');

module.exports = function (options) {
    var tplNode = options.tplNode,
        tplTree = options.tplTree;

    var PropMeta = [];
    // //基础公共属性
    // if(tplNode.uitype == UiTypeDef.attachupload){
    //     //PropMeta = PropMeta.concat(options.baseMeta);
    // }
    // //扩展特有属性
    // if(tplNode.uitype == UiTypeDef.attachupload//单独使用
    //     ||tplNode.uitype == UiTypeDef.formitemw//表单项
    //     ||tplNode.uitype == UiTypeDef.edititemw//编辑项
    // ){
    PropMeta = PropMeta.concat([//图片上传扩展配置
    {
        name: 'btnType',
        label: '按钮风格',
        type: _indexDeps.MetaType.Select,
        props: {
            options: [{ text: '灰色', value: 'default' }, { text: '蓝色', value: 'primary' }, { text: '绿色', value: 'success' }, { text: '红色', value: 'error' }, { text: '黄色', value: 'warning' }]
        },
        defaultValue: 'default'
    }, {
        name: 'action',
        label: '上传地址',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: null
    }, {
        name: 'billType',
        label: '单据类型',
        type: _indexDeps.MetaType.Refer,
        props: {
            refinfokey: 'bill_001',
            serverUrl: _indexDeps.SUPPORT_SERVER
        },
        defaultValue: null
    }, {
        name: 'sourceType',
        label: '业务类型',
        help: '单据下的细分业务类型标识',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'showUploadList',
        label: '显示列表',
        help: '是否显示已上传的文件列表',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'enableUser',
        label: '当前用户',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'buttonText',
        label: '按钮文本',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: null
    }, {
        name: 'multiple',
        label: '批量上传',
        type: _indexDeps.MetaType.Bool,
        props: {},
        defaultValue: true
    }, {
        name: 'deleteTip',
        label: '删除提示',
        help: '默认提示内容“删除的附件不可恢复！确定要删除？”',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'accept',
        label: '文件类型',
        help: '限制只允许上传指定类型的文件,例如：.jpg,.png,.doc,.docx,.xls,.xlsx等',
        type: _indexDeps.MetaType.Text,
        props: {},
        defaultValue: ''
    }]);
    // }
    return PropMeta;
};