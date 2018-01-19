$(function(){
    var ifSwiper = false;
    var mySwiper;

    $.ajax({
        type:'get',
        url : '../data/case.json',
        success : function(data){
            if(data.state == "0"){
                var source   = $("#case-list").html();
                var template = Handlebars.compile(source);
                var html    = template( data );
                $('.tab-content').append( html );
                $('.design-wenzi').eq(0).removeClass('none');
            }
        }
    });

    /*tab 切换*/
    $('.tab-tit li').click(function () {
        var  index = $(this).index();
        var $panel = $('.tab-panel');
        $(this).addClass('on').siblings('li').removeClass('on');
        $panel.eq(index).removeClass('none').siblings('.tab-panel').addClass('none');
        //init swiper
        if(index==1 && !ifSwiper){
            ifSwiper = true;
            mySwiper = $('.swiper-container').swiper({
                //loop : true,
                slidesPerView : 6
            });
        }
    });

    $('.tab-content').on('click','.swiper-slide', function(){
        var index = $(this).index();
        $('.design-wenzi').eq(index).removeClass('none').siblings('.design-wenzi').addClass('none')
    });

    /*tab item show cover*/
    $('.tab-content ').on('mouseenter','.tab-panel .item', function () {
        $(this).find('.cover').show().stop().animate({"opacity":"1"});
    }).on('mouseleave','.item', function () {
        var $cover = $(this).find('.cover');
        $cover.stop().animate({"opacity":"0"}, function () {
            $cover.hide();
        });
    });

    /*swipet arrow*/
    $('.tab-content ').on('click','.swiper .prev',function(){
        mySwiper.swipePrev();
    });
    $('.tab-content ').on('click','.swiper .next',function(){
        mySwiper.swipeNext();
    });



});