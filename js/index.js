$(".introduc_close").click(function(){
    $('.zg_cover').hide()
    $('.introduc_con').hide();
})
$(".code_close").click(function(){
    $('.zg_cover').hide()
    $('.code_con').hide();
})
$(".show_introduc").click(function(){
    $('.zg_cover').fadeIn()
    $('.introduc_con').fadeIn();
})

$(".zg_left").click(function(){
    $('.zg_cover').fadeIn()
    $('.code_con').fadeIn();
})
$(function() {
    $(document).on('change','#search_box',function() {
       var now_data = $(this).val()
        var data = []
    //    console.log(now_data) 
        data = pro.filter((value, index)=>{
           return value.province == now_data
       })
        // console.log(data)
        if(data.length>0){
            $(".chaxun").attr('href', data[0].links)
            $(".chaxun").attr('target', '_blank')
        }else{
            $(".chaxun").attr('href', 'javascript:;')
            $(".chaxun").attr('target', '_self')
            alert('无法查询')
        }
    })
})
