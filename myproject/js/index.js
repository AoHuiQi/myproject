;$(function(){ var num='';
				$.ajax({
					type:'POST',
					url:'PHP/index.php',
					beforeSend:function(){
				       $('.thematic .area .move').find('a').html(`<img class="" src="img/5-121204193R3.gif";>`)
				   },
					dateType:'json',
					async:true,
					date:{
						"id": "value"
					},
					success:function(data){
						var arr=JSON.parse(data);
						//console.log(arr);
						num=arr.lunbo;
		                   var html='';
		                   $(arr.subnav).each(function(i){
		                   	    html+=`<a href=${arr.subnav[i].href}>${arr.subnav[i].src}</a>`;
		                   });
		                   $('.bd1').html(html);
		                   
						$('.thematic .area .move').find('a').each(function(i){
							$('.thematic .area .move').find('a').eq(i).attr('href',`${arr.shengdian[i].href}`);
							$('.thematic .area .move').find('a').eq(i).children('img').attr('src',`${arr.shengdian[i].src}`);
						})
					},
				});
				setTimeout(function(){
				   var i=0;
				   var timer=null;
				   $('.banner').hover(function(){
					clearInterval(timer);
					$('.banner .carousel-indicators').find('li').on('click',function(){
				   	  i=($(this).index());
				   	  $(this).addClass('active').siblings().removeClass('active')
				   	  $('.banner').css('background-image',`url(${num[i].url})`);
				    });
				},function(){
					timer=setInterval(function(){
					   	if(i>=0&&i<=6){
					   	    i++;
					   	    $('.banner').css('background-image',`url(${num[i].url})`);
					   	    $('.banner .carousel-indicators').find('li').eq(i)
					   	    .addClass('active').siblings().removeClass('active')
					   }if(i>=7){
					   	   i=0;
					   	   $('.banner').css('background-image',`url(${num[i].url})`);
					   	    $('.banner .carousel-indicators').find('li').eq(i)
					   	    .addClass('active').siblings().removeClass('active')
					   }
				    },3000);
				});  
			});
		});
			

;$(function(){
	$.bstop=true;
	$('.dropdown a').on('click',function(){
		if($.bstop){
			$(this).siblings('ul').css('display','block');
			$.bstop=false
		}else{
			$('.dropdown a').siblings('ul').css('display','none');
			$.bstop=true;
		}
	})
});
;$(function(){
	$('.frame .move').on('mouseover',function(){
		$(this).css('left',-6+"px");
	});
	$('.frame .move').on('mouseout',function(){
			$(this).css('left',0+"px");
		})
});
;$(function(){
	$('.lj_search').children().on('click',function(){
		$(this).css('background','rgb(246,171,0)').siblings('span').css('background','rgb(55,160,219)')
	})
});
;$(function(){
	$('.lj_search .stored').on('click',function(){
		$('.form-panel').children().first().css('display','block').siblings('fieldset').css('display','none')
	});
	$('.lj_search .shoper').on('click',function(){
		$('.form-panel').children().last().css('display','block').siblings('fieldset').css('display','none')
	})
});
;$(function(){
	$.bstop=true
	$('.category h4').on('click',function(){
		if($.bstop){
			$('.category-menus').css('display','block');
			$.bstop=false;
		}else{
			$('.category-menus').css('display','none');
			$.bstop=true;
		}
	})
});
;$(function(){
	$('.category-menus ul').find('li').on('mouseenter',function(){
		$.index=$(this).index();
		$(this).addClass('select').siblings('li').removeClass('select');
	    $('.category-pannel').animate({width:960});
		$('.pannel').eq($.index).css('display','block').siblings('.pannel').css('display','none');
		$('.category-pannel').on('mouseenter',function(){
		   	 $('.category-pannel').animate({width:960});
			 $('.pannel').eq($.index).css('display','block').siblings('.pannel').css('display','none');
			 $('.category-menus ul').find('li').eq($.index).addClass('select').siblings('li').removeClass('select');
	   })
		
	});$('.category-dropdown').on('mouseleave',function(){
		$('.category-menus ul>li').removeClass('select');
		$('.category-pannel').animate({width:0});
		$('.pannel').css('display','none');
	   });
	   /*$('.category-pannel').on('mouseleave',function(){
	   	 $('.category-pannel').css('width',0);;
		 $('.pannel').css('display','none');
		 $('.category-menus ul>li').removeClass('select');
	   })*/
});

/*$(function(){
    		//1.控制楼梯的显示与隐藏
    		var $louti=$('#backpanel-index');//楼梯
    		var $loutili=$('#backpanel-index div a');//楼梯子元素li
    		var $louceng=$('#main .louti');//楼层
    		$(window).on('scroll',function(){
    			//scrollTop():获取匹配元素相对滚动条顶部的偏移
    			var $st=$(window).scrollTop();
    			if($st>=900){
    				$louti.show();
    			}else{
    				$louti.hide();
    			}
    			
    			//4.拖拽滚轮，左侧对应的楼梯添加active
    			//获取楼层每一个的top值
    			//each(): 类似于for，遍历  ,终止循环 --return false  
    			$louceng.each(function(index,element){//index:元素的索引，element:当前的元素   
    				var $top1=$louceng.eq(index).offset().top+400;
    				if($top1>$st){//如果盒子的top值大于滚动条的top值，添加active.
    					$loutili.removeClass('active');
    					$loutili.eq(index).addClass('active');
    					return false;
    				}
    				//return false;//终止循环
    			});
    			
    		});
    		
    		//2.给左侧的楼梯添加点击事件，进行位置的跳转
    		//offset():盒子的偏移值，返回一个对象，包含left/top
    		$loutili.not('.last').on('click',function(){
    			var $top=$louceng.eq($(this).index()).offset().top;//当前楼梯li项对应的楼层的top值。
    			$('html,body').animate({
    				scrollTop:$top
    			})
    		});
    		
    		//3.回到顶部
    		$('#loutinav ul li.last').on('click',function(){
    			$('html,body').animate({
    				scrollTop:0
    			});
    		});
    	});*/
 /*define(['jquery'],function () {
    var timer=null;
    $('.menu-second dt').on('mouseover',function(){
        clearTimeout(timer);
        $('.tab-menu').show();
        var infornum = $(this).index()+1;
        $.ajax({
            data:{infornum:infornum},
            url:'http://localhost/HUAQIANG/php/menuinfor.php',
            success:function(data){
                if(data){
                    var data1 = JSON.parse(data);
                    var html = '';
                    for(var i=0;i<data1.length;i++){
                        html +=`<a href=${data1[i].href}>${data1[i].name}</a>`;
                    }
                    html += `<a href="http://www.okhqb.com/list/137.html?utml=zsfenlei">更多>></a>`;
                    $('.menu-second .tab-menu').html(html);
                }
            }
        });
        $(this).css({background:'#fff'}).find('a').css({color:'red'}).find('.icon').css({
            backgroundPositionY:'-62px',
        });
        $(this).find('a').find('i').css({
            backgroundPositionX:'-580px',
        });
        $(this).siblings('dt').css({background:'none'}).find('a').css({color:'#fff'}).find('.icon').css({
            backgroundPositionY:'-40px',
        });
        $(this).siblings('dt').find('a').find('i').css({
            backgroundPositionX:'-590px',
        });
    });
    $('.menu-second dt').on('mouseout',function(){
        timer=setTimeout(function(){
            $('.tab-menu').hide();
            $('.menu-second dt').siblings('dt').css({background:'none'}).find('a').css({color:'#fff'}).find('.icon').css({
                backgroundPositionY:'-40px',
            });
            $('.menu-second dt').siblings('dt').find('a').find('i').css({
                backgroundPositionX:'-590px',
            });
        },400);
    });

    $('.tab-menu').on('mouseover',function(){
        clearTimeout(timer);
        $(this).show();
    });

    $('.tab-menu').on('mouseout',function(){
        timer=setTimeout(function(){
            $('.tab-menu').hide();
            $('.menu-second dt').siblings('dt').css({background:'none'}).find('a').css({color:'#fff'}).find('.icon').css({
                backgroundPositionY:'-40px',
            });
            $('.menu-second dt').siblings('dt').find('a').find('i').css({
                backgroundPositionX:'-590px',
            });
        },400)

    });
});*/
;$(function(){
	if(getcookie('UserName')){
		$('.login_link').html(getcookie('UserName'));
	}
	function getcookie(key){
				var arrcookie=decodeURI(document.cookie).split('; ');
				for(var i=0;i<arrcookie.length;i++){
					var newarrcookie=arrcookie[i].split('=');
					if(newarrcookie[0]==key){
						return newarrcookie[1];
					}
				}
			}
});

