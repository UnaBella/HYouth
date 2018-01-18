$(function(){
    $.ajax({
        type:'get',
        url : '../data/case.json',
        success : function(data){
            if(data.state == "0"){
                var source   = $("#case-list").html();
                var template = Handlebars.compile(source);
                var html    = template( data );
                $('.tab-panel .clearfix').append( html );
            }
        }
    });

    /*tab 切换*/
    $('.tab-tit li').click(function () {
        var  index = $(this).index();
        var $panel = $('.tab-panel');
        $(this).addClass('on').siblings('li').removeClass('on');
        $panel.eq(index).removeClass('none').siblings('.tab-panel').addClass('none');
    });

    /*tab item show cover*/
    $('.tab-panel').on('mouseenter','.item', function () {
        $(this).find('.cover').show().stop().animate({"opacity":"1"});
    }).on('mouseleave','.item', function () {
        var $cover = $(this).find('.cover');
        $cover.stop().animate({"opacity":"0"}, function () {
            $cover.hide();
        });
    });
});