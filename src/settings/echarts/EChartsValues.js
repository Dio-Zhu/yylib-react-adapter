module.exports = function (options) {
    var newFormData = {};
    var {formMeta, tplNode, tplTree} = options;
    tplNode.options = tplNode.options||{};
    for (var i = 0; i < (formMeta||[]).length; i++) {
        var meta = formMeta[i];
        switch (meta.name) {
            case "title.text": {
                // meta.defaultValue = (tplNode.options.title && tplNode.options.title.text != undefined) ? tplNode.options.title.text : meta.defaultValue;
                if(tplNode.options.title && tplNode.options.title.text !== undefined){
                    newFormData[meta.name] = tplNode.options.title.text;
                }
                break;
            }
            case "xAxis.type": {
                // meta.defaultValue = (tplNode.options.xAxis && tplNode.options.xAxis.type != undefined) ? tplNode.options.xAxis.type : meta.defaultValue;
                if(tplNode.options.xAxis && tplNode.options.xAxis.type !== undefined){
                    newFormData[meta.name] = tplNode.options.xAxis.type;
                }
                break;
            }
            case "xAxis.data": {
                // meta.defaultValue = (tplNode.options.xAxis && tplNode.options.xAxis.data != undefined) ? tplNode.options.xAxis.data : meta.defaultValue;
                if(tplNode.options.xAxis && tplNode.options.xAxis.data !== undefined){
                    newFormData[meta.name] = tplNode.options.xAxis.data;
                }
                break;
            }
            case "yAxis.type": {
                // meta.defaultValue = (tplNode.options.yAxis && tplNode.options.yAxis.type != undefined) ? tplNode.options.yAxis.type : meta.defaultValue;
                if((tplNode.options.yAxis && tplNode.options.yAxis.type !== undefined)){
                    newFormData[meta.name] = tplNode.options.yAxis.type;
                }
                break;
            }
            case "yAxis.data": {
                // meta.defaultValue = (tplNode.options.yAxis && tplNode.options.yAxis.data != undefined) ? tplNode.options.yAxis.data : meta.defaultValue;
                if(tplNode.options.yAxis && tplNode.options.yAxis.data !== undefined){
                    newFormData[meta.name] = tplNode.options.yAxis.data;
                }
                break;
            }
            case "series": {
                // meta.defaultValue = (tplNode.options.series && tplNode.options.series != undefined) ? tplNode.options.series : meta.defaultValue;
                if(tplNode.options.series && tplNode.options.series !== undefined){
                    newFormData[meta.name] = tplNode.options.series;
                }
                break;
            }
            case "series.type": {
                // meta.defaultValue = (tplNode.options.series && tplNode.options.series[0] && tplNode.options.series[0].type != undefined) ? tplNode.options.series[0].type : meta.defaultValue;
                if(tplNode.options.series && tplNode.options.series[0] && tplNode.options.series[0].type !== undefined){
                    newFormData[meta.name] = tplNode.options.series[0].type;
                }
                break;
            }
            case "options": {
                // meta.defaultValue = tplNode.options != undefined ? tplNode.options : meta.defaultValue;
                if(tplNode.options !== undefined){
                    newFormData[meta.name] = tplNode.options;
                }
                break;
            }
            case "remoteUrl": {
                // meta.defaultValue = tplNode.remoteUrl != undefined ? tplNode.remoteUrl : meta.defaultValue;
                if(tplNode.remoteUrl !== undefined){
                    newFormData[meta.name] = tplNode.remoteUrl;
                }
                break;
            }
        }
    }
    if(!Object.keys(tplNode.options).length){
        delete tplNode.options;
    }
    return newFormData;
};
