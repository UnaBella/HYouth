$(function(){
    $('.header li').eq(2).addClass('on');
	$.ajax({
        type:'get',
        url : '../data/news_list.json',
        success : function(data){
            if(data.state == "0"){
                var source   = $("#news-list").html();
                var template = Handlebars.compile(source);
                var html    = template( data.data.news);
                $('.news_list .newspart1').append( html );
                
                var html2    = template( data.data.newsmore );
                $('.news_list .newspart2').append( html2 );
            }
        }
    });
    
        $('.content>.more').click(function () {
        	$(this).hide();
        	$('.newsmore').show();
        });
        
        $('.newspart1,.newspart2').on('click','.unit',function(){
        	window.location.href = 'news.html?id=' + $(this).attr('data-id');
        })
}) 