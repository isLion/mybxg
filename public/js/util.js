define([
    'jquery'
], function ($) {
    return {
        qs: function (key) {
            //获取URL中指定的参数值
            // console.log(location)
            var param = location.search.substr(1)
            var result = null
            // console.log(param)
            if (param) {
                var ps = param.split('&')//tc_id= 2 & flast=33
                $.each(ps, function (index, item) {
                    // console.log(item)
                    var kv = item.split('=')
                    // console.log(kv)
                    if (kv[0] == key) {
                        result = kv[1]
                        return false//终止each循环
                    }
                })
            }
            return result
        }
    }
});