var header = '<div class="header ">'+
				'<div class="clearfix">'+
					'<a href="index.html"><div class="logo fl"></div></a>'+
					'<ul class="fl clearfix">'+
						'<li ><a href="index.html">首页</a></li>'+
						'<li ><a href="case.html">案例展示</a></li>'+
						'<li ><a href="news_list.html">新闻中心</a></li>'+
						'<li ><a href="aboutus.html">关于我们</a></li>'+
					'</ul>'+
				'</div>'+
			'</div>'
$('nav').append(header);


var footer = '<div class="footer">'+
			'<div class="auto pt50 clearfix">'+
				'<div class="fl clearfix">'+
					'<div class="col fl">'+
						'<h4>明星产品</h4>'+
						'<ul>'+
							'<li><a href="case-pro.html?id=mochun_6">@魔唇棒棒糖</a></li>'+
							'<li><a href="case-pro.html?id=longmao_4">龙猫充电宝</a></li>'+
							'<li><a href="case-pro.html?id=tom_9">汤姆逊电子管音响</a></li>'+
							'<li><a href="case-pro.html?id=ifi_8">i-fi智能热点</a></li>'+
						'</ul>'+
					'</div>'+
					'<div class="col fl">'+
						'<h4> </h4>'+
						'<ul>'+
							'<li><a href="case-pro.html?id=maoding_1">STAB ME 头戴式蓝牙耳机</a></li>'+
							'<li><a href="case-pro.html?id=fengmi_2">哈米固态蜂蜜</a></li>'+
							'<li><a href="case-pro.html?id=dayinxiang_5">汤姆逊层云系列音响</a></li>'+
							'<li><a href="case-pro.html?id=cuijian_3">崔健手机</a></li>'+
						'</ul>'+
					'</div>'+
				'</div>'+
				'<div class="fr">'+
					'<div class="">'+
						'<h4>合作品牌</h4>'+
						'<img class="brand" src="http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource/HYouthWebsite/img/01index/brand.png"/>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'<div class="auto end">'+
					'京ICP备11017824号-4 / 京ICP证130164号 &nbsp; | &nbsp;北京市公安局朝阳分局备案编号:110105000501 &nbsp; | &nbsp;Copyright © 2014 后青春工业设计公司'+
			'</div>'+
		'</div>';
$('footer').append(footer);
$(window).scroll(function () {
	var _header = document.querySelector('.header');
	if($(document).scrollTop() > 0){
		_header.className = 'header bg-white';
	}else {
		_header.className = 'header';
	}
});
