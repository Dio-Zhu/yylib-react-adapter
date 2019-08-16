//数据类型对应的表单输入类型关系
const FieldTypeInputType = {};
FieldTypeInputType.string = 'input';//FormItemType.input;
FieldTypeInputType.date = 'date';//FormItemType.date;
FieldTypeInputType.boolean = 'switch';//FormItemType.switch;
FieldTypeInputType.number = 'number';//FormItemType.number;
FieldTypeInputType.currency = 'currency';//FormItemType.currency;

//数据类型对应java数据类型的关系
const FieldTypeJavaType = {};
FieldTypeJavaType.string = ['java.lang.String'];
FieldTypeJavaType.date = ['java.util.Date','java.sql.Timestamp','java.sql.Time','java.sql.Date'];
FieldTypeJavaType.boolean = ['boolean','java.lang.Boolean'];
FieldTypeJavaType.number = ['int','long','java.lang.Integer','java.lang.Long','java.math.BigInteger'];
FieldTypeJavaType.currency = ['float','double','java.math.BigDecimal','java.lang.Float','java.lang.Double'];
//将java数据类型转换为字段数据类型
const JavaTypeToFieldType = function(javaType){
    let fieldType = "string";
    //依据元数据字段类型自动匹配对应的数据类型
    for(let key in FieldTypeJavaType){
        let types = FieldTypeJavaType[key]||[];
        if(types.indexOf(javaType)>-1){
            fieldType = key;
            break;
        }
    };
    return fieldType;
};
module.exports = {
    FieldTypeInputType,
    FieldTypeJavaType,
    JavaTypeToFieldType
};