$(function(){
	$.ajax({
        type:'get',
        url : '../data/news.json',
        success : function(data){
            if(data.state == "0"){
            	var id  = Util.queryString('id');
                var source   = $("#news").html();
                var template = Handlebars.compile(source);
                var html    = template( data.data[id]);
                $('.news .auto').append( html );
            }
        }
    });
})