define([
    'jquery',
    'template'
], function ($, template) {
    //调用接口 获取所有讲师数据
    $.ajax({
        type: 'get',
        url: '/api/teacher',
        dataType: 'json',
        success: function (data) {
            // console.log(data.result)
            //解析数据渲染页面
            var html = template('teacherTpl', { list: data.result })
            $('#teacherInfo').html(html)

            //启用注销功能
            $('.eod').on('click', function () {
                var that = this
                var td = $(this).closest('td')
                var tcId = td.attr('data-tcId')
                var status = td.attr('data-status')
                console.log(status)
                $.ajax({
                    type: 'post',
                    url: '/api/teacher/handle',
                    data: {
                        tc_id: tcId,
                        tc_status: status
                    },
                    dataType: 'json',
                    success: function (data) {
                        console.log(data.result.tc_status)
                        if (data.code == 200) {
                            td.attr('data-status', data.result.tc_status)
                            if (data.result.tc_status == 0) {
                                $(that).text('注销')
                            } else {
                                $(that).text('启用')
                            }
                        }
                    }
                })
            })
        }
    })

});