const UiSubUtils = {
    all: function (object) {
        var result = []
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                result.push(object[key]);
            }
        }

        return result
    },
    include: function (object, keys) {
        if(keys === 'all') {
            return this.all(object)
        }
        
        var result = []
        for (var key in object) {
            if (object.hasOwnProperty(key) && keys.indexOf(key) !== -1) {
                result.push(object[key]);
            }
        }
        return result
    },
    exclude: function (object, keys) {
        var result = []
        for (var key in object) {
            if (object.hasOwnProperty(key) && keys.indexOf(key) === -1) {
                result.push(object[key]);
            }
        }
        return result
    },  
}

export default UiSubUtils;