$(function(){
    var ifSwiper = false;
    var mySwiper;

    $('.header li').eq(1).addClass('on');

    $.ajax({
        type:'get',
        url : '../data/case.json',
        success : function(data){
            if(data.state == "0"){
                var source   = $("#case-list").html();
                var template = Handlebars.compile(source);
                var html    = template( data );
                var tabIndex = parseInt(Util.queryString('tab'));

                $('.tab-content').append( html );
                $('.design-wenzi').eq(0).removeClass('none');

                //判断tab显示
                if(tabIndex){
                    $('.tab-tit li').eq(tabIndex).addClass('on').siblings('li').removeClass('on');
                    $('.tab-panel').eq(tabIndex).removeClass('none').siblings('.tab-panel').addClass('none');
                }
                //init swiper
                initSwiper(tabIndex);
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
        initSwiper(index);
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

    //跳转
    $('.tab-content ').on('click','.tab-panel .item', function () {
        window.location.href = "case-pro.html?id=" + $(this).attr('data-id');
    });

    function initSwiper(index){
        if(index==1 && !ifSwiper){
            ifSwiper = true;
            mySwiper = $('.swiper-container').swiper({
                //loop : true,
                slidesPerView : 6
            });
        }
    }


});