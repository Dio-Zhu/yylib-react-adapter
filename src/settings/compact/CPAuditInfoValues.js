module.exports = function(options){
    var newFormData = {};
    var {formMeta,tplNode} = options;
    for(var i=0;i<(formMeta||[]).length;i++){
        var meta = formMeta[i];
		switch (meta.name) {
	        // case "primaryKey":{
	        //     meta.defaultValue=tplNode.primaryKey!==undefined?tplNode.primaryKey:meta.defaultValue;
	        //     break;
	        // }
			case "billType":{
                // if(tplNode.billName&&tplNode.billType){
                //     meta.defaultValue={};
                //     //meta.defaultValue.id =
                //     meta.defaultValue.code = tplNode.billType;
                //     meta.defaultValue.name = tplNode.billName;
                // }else{
                //     meta.defaultValue = null;
                // }
                if(tplNode.billName&&tplNode.billType){
                    newFormData[meta.name]={};
                    newFormData[meta.name].code = tplNode.billType;
                    newFormData[meta.name].name = tplNode.billName;
                }
                break;
            }
            // case "bpm":{
            //     meta.defaultValue=tplNode.bpm!==undefined?tplNode.bpm:meta.defaultValue;
            //     break;
            // }
   		}
    }
    return newFormData;
};
