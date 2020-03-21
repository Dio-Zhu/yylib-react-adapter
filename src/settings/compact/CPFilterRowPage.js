import Utils from '../../Utils';
import {UiTypeDef, UiTitleDef} from '../../MyUiDefines';
module.exports = function(options) {
  return {
        "buttons":[{
            onClick: function (e,options) {
                let {tplNode,tplTree} = options;
                  var value = 1 + tplNode.children ? tplNode.children.length : 0;
                  var title = UiTitleDef.CPFRField + value;
                  Utils.appendNode(tplNode, {
                      uitype: UiTypeDef.CPFRField,
                      uikey: new Date().getTime(),
                      uititle: title,
                      title: title,
                      type: 'input',
                      compare: 'eq'
                  });
                  return true;
              },
              text: '添加元素'
          }]
    }
};
