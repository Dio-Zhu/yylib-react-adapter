module.exports = function (options) {
    var {formMeta, formData, tplNode, tplTree} = options;
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if(!(meta.name in formData))continue;
        var value = formData[meta.name];
        switch (meta.name) {
            case "title.text": {
                // meta.defaultValue = value;
                if (tplNode.options.title === undefined) tplNode.options.title = {};
                tplNode.options.title.text = value;
                break;
            }
            case "xAxis.type": {
                // meta.defaultValue = value;
                if (tplNode.options.xAxis === undefined) tplNode.options.xAxis = {};
                tplNode.options.xAxis.type = value;
                break;
            }
            case "xAxis.data": {
                // meta.defaultValue = value;
                if (tplNode.options.xAxis === undefined) tplNode.options.xAxis = {};
                tplNode.options.xAxis.data = value;
                break;
            }
            case "yAxis.type": {
                // meta.defaultValue = value;
                if (tplNode.options.yAxis === undefined) tplNode.options.yAxis = {};
                tplNode.options.yAxis.type = value;
                break;
            }
            case "yAxis.data": {
                // meta.defaultValue = value;
                if (tplNode.options.yAxis === undefined) tplNode.options.yAxis = {};
                tplNode.options.yAxis.data = value;
                break;
            }
            case "series": {
                // meta.defaultValue = value;
                if (tplNode.options.series === undefined) tplNode.options.series = [];
                tplNode.options.series = value;
                break;
            }
            case "series.type": {
                // meta.defaultValue = value;
                if (tplNode.options.series === undefined) {
                    tplNode.options.series = [];
                }
                if (tplNode.options.series.length === 0) {
                    tplNode.options.series.push({type: value})
                } else {
                    tplNode.options.series[0].type = value;
                }
                break;
            }
            case "options" : {
                // meta.defaultValue = value;
                tplNode.options = value;
                break;
            }
            case "remoteUrl" : {
                // meta.defaultValue = value;
                tplNode.remoteUrl = value;
                break;
            }
        }
    }

};
