    var exam_id=53;
    // var interface = 'http://tiku.t.eoffcn.com/apiv3/';
    var interface = 'https://tiku.eoffcn.com/apiv3/'
    // var interface = 'http://yapi.base.eoffcn.com/mock/8/apiv3/';
    var data_exam = {};
    $.ajax({
        url: interface+'/mock/mockweb/getMockList',   
        async:false,   
        type: 'post',
        data: {
            exam_id: exam_id
        },
        success: function(result) {
            $("#total_num").html(result.data.mock.apply_num)
        },
        error: function (result) {
            console.log(result);  
        }
    });

