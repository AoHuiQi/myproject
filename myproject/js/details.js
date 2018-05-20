;$(function(){
	var i=0;
	$.num=($('.as_list li').size()-1);
	$('.icon-angle-right').on('click',function(){
		if(i<$.num){
			i++;
			$('.as_list li').eq(i).addClass('active').siblings('li').removeClass('active');
		}else{
			i=0;
			$('.as_list li').eq(i).addClass('active').siblings('li').removeClass('active');
		}
		$('.jqzoom .lazy').attr('src',`${$('.as_list li').eq(i).find("img").attr("bigsrc")}`);
		$('.big_f img').attr('src',`${$('.as_list li').eq(i).find("img").attr("bigsrc")}`);
	});
	$('.icon-angle-left').on('click',function(){
		if(i>0){
			i--;
			$('.as_list li').eq(i).addClass('active').siblings('li').removeClass('active');
		}else{
			i=$.num;
			$('.as_list li').eq(i).addClass('active').siblings('li').removeClass('active');
		}
		$('.jqzoom .lazy').attr('src',`${$('.as_list li').eq(i).find("img").attr("bigsrc")}`);
		$('.big_f img').attr('src',`${$(this).find("img").attr("bigsrc")}`);
	});
	$('.as_list').find('li').hover(function(){
		$(this).addClass('active').siblings('li').removeClass('active');
		$('.jqzoom .lazy').attr('src',`${$(this).find("img").attr("bigsrc")}`);
		$('.big_f img').attr('src',`${$(this).find("img").attr("bigsrc")}`);
	})
})

;$(function(){
    $('.showbox').on('mouseenter',function(e){
        $('.big_f').css({display:'block',zIndex:'99999'});
        var w = $('.smallpic').width()*$('.big_f').width()/$('.bigpic').width();
        var h = $('.smallpic').height()*$('.big_f').height()/$('.bigpic').height();
        $('.small_f').css({
            display:'block',
            width:w,
            height:h,
        });
        var bili = $('.big_f').width()/w;
        $('.showbox').on('mousemove',function(e){
            var e = e || window.event;
            var x = e.pageX - $(this).offset().left -w/2;
            var y = e.pageY - $(this).offset().top -h/2;
            if(x < 0){
                x = 0;
            }else if(x >= $('.showbox').width()-$('.small_f').width()){
                x = $('.showbox').width()-$('.small_f').width();
            }
            if(y < 0){
                y = 0;
            }else if(y >= $('.showbox').height()-$('.small_f').height()){
                y = $('.showbox').height()-$('.small_f').height();
            }
            $('.small_f').css({
                left:x,
                top:y,
            });
            $('.bigpic').css({
                position:'relative',
                top:-y*bili,
                left:-x*bili,
            })
        });
    });
    $(".showbox").on('mouseleave',function(){
        $('.big_f').css({display:'none'});
        $('.small_f').css({display:'none'});
    });
});
;$(function(){
	$('.buy_number_input .decrease_num').on('click',function(){
		$.num=$('.buy_number').val();
		if($.num>1){
			$('.buy_number').val(--$.num)
		}else{
			$('.buy_number').val(1)
		}
		
	});
	$('.buy_number_input .increase_num').on('click',function(){
		$.num=$('.buy_number').val();
			$('.buy_number').val(++$.num);
	});
});

;$(function(){
	$('.btn-addcart').on('click',function(){
		$('.cat-thumbnail-img').css({'display':'block','left':0,'top':0});
	    var timer=null;
	    var speed=0;
				var current={
					x:$('.cat-thumbnail-img').offset().left,
					y:$('.cat-thumbnail-img').offset().top-$(document).scrollTop(),
				};
				var target={
					x:$('.gouwu').offset().left-current.x,
					y:$('.gouwu').offset().top-current.y
				};
				
				var a=0.0025;
				var b=(target.y-a*target.x*target.x)/target.x;
				
				var speedx=10;
				timer=setInterval(function(){
					speedx+=4;
					if(speedx>=target.x){
						clearInterval(timer);
		                $('.cat-thumbnail-img').css('display','none');
					};
					$('.cat-thumbnail-img').offset(
						{left:current.x+speedx,
					     top:current.y+a*speedx*speedx+b*speedx+$(document).scrollTop(),
					   });
				},5);
	});

});
            
;$(function(){
	        var sidarr = [];
			var numarr = [];
			function getcookievalue(){
				if($.cookie('cartsid')){//cartsid：cookie里面id的名称
					sidarr=$.cookie('cartsid').split(',');
				}
				
				if($.cookie('cartnum')){//cartnum：cookie里面数量的名称
					numarr=$.cookie('cartnum').split(',');
				}
			}
			
			//第三步思路：通过判断商品的id是否存在上面获取的sid里面。
			//如果存在，已经在购物车里面了，否则将商品sid添加到cookie里面
			$('.btn-addcart').on('click', function() {
				var sid = $(this).parents('.product_info').find('.smallpic').attr('sid');//当前按钮对应图片的sid
				//console.log(sid)
				getcookievalue();//获取商品的id和数量,放到对应的数组中,利用数组进行匹配
				if ($.inArray(sid, sidarr) != -1) {//是否存在cookie中
					//将之前的数据和当前存的数据相加，存放cookie里面
					if($.cookie('cartnum')==''){
						var num=parseInt($('.buy_number').val());
						numarr[$.inArray(sid,sidarr)]=num;
						$.cookie('cartnum', numarr.toString(), 7);//修改后的结果
						sidarr[$.inArray(sid,sidarr)]=sid;//将当前id添加到对应的位置。
        				$.cookie('cartsid', sidarr.toString(), 7);//将整个数组添加到cookie
					}else{
						var num=parseInt(numarr[$.inArray(sid,sidarr)])+parseInt($('.buy_number').val());
						numarr[$.inArray(sid,sidarr)]=num;
						$.cookie('cartnum', numarr.toString(), 7);//修改后的结果
					}
					
				}else{//不存在
					sidarr.push(sid);//将当前id添加到数组里面。
        			$.cookie('cartsid', sidarr.toString(), 7);//将整个数组添加到cookie
        			numarr.push($('.buy_number').val());//存放输入的数量，默认是1
        			$.cookie('cartnum', numarr.toString(), 7);
				}
			});
})
           
