;$(function(){
	/*$.ajax({
		//获取数据
		type:'post',
		url:'PHP/cart.php',
		dataType:'json',
		async:false,
		date:{
			"sid": "value",
					},
		success:function(arr){
			console.log(arr);
			var $html='';
			for(var i=0;i<arr.length;i++){
				$html=`<div class="cart-item-list" style="">
			    <div class="shop-name clearfix">
			        <div class="name-left">
			            <div>
			                <span>
			                    <input type="checkbox" value="645" class="js_group_selector cart_group_selector cart_group_selector645">
			                </span>
			                <span></span>
			            </div>
			        </div>
			    </div>
			    <div class="blue-line"></div>
			    <div class="full-gift">	
	                <div class="full-gift-item cart_item56868 back-backgroundcolor">
			        <table border="0">
			                <tbody>
			                <tr>
			                    <td width="40%" align="left">
			                      <a class="onlylist-parent td_1" target="_blank" href="">
			                            <img style="z-index:1;" src="" alt="">					
			                        </a>
			                        <a class="td_2" target="_blank" href="">
			                        </a>   					
			                        <div class="td_3">
			                            <div class="td_text"></div>
			                        </div>
			                    </td>
			                    <td width="15%" align="right">
			                        <span></span>
			                    </td>
			                    <td width="10%" align="right" class="color-orange">
			                        <div>
			                            <img class="star-img" width="18%" src="">
			                            <span class="color-orange star-num">0</span>
			                        </div>
			                    </td>
			                    <td width="12%">
			                        <div class="quantity-form">
			                            <input class="decrement" type="button" datainfo="56868" good-type="1" value="-">
			                            <input type="text" class="itxt text100001011" datainfo="56868" good-type="1" value="1">
			                            <input class="increment" type="button" datainfo="56868" good-type="1" value="+">
			                        </div>
			                       
			                   </td>
			                    <td width="12%" align="right" class="color-red">
			                        <div class="price1">
			                            <img class="star-img" width="18" src="">
			                            <span class="color-orange star-num">0</span>
			                            <span>+</span>
			                            <span class="star-num color-red"></span>
			                        </div>
			                    </td>
			                    <td width="12%">
			                        <span><i>删除</i></span>
			                    </td>
			                </tr>
			            </tbody>
			            </table>	
			            <div class="item-checkbox">
			                <span>
			                    <input type="checkbox" checked="checked" class="cart_item_selector  cart_item_selector56868" item_value="56868" target_value="56868" value="645">
			                </span>
			            </div>
			            <div class="item-line-small"></div>
			        </div>
			    <div class="item-table-line"></div>
			</div>
		    </div>`		
			}
			$('.cartmain').html($html);
			//页面加载，先看看购物车是否右商品，如果有，先创建出来。
			if($.cookie('cartsid') && $.cookie('cartnum')){
				var s=$.cookie('cartsid').split(',');//先转数组，方便后面的遍历创建
				var n=$.cookie('cartnum').split(',');//
				for(var i=0;i<s.length;i++){
					createcart(s[i],n[i]);
				}
			}
		}
		
	});*/
var sidarr=[];//存放商品编号（sid）
var numarr=[];//存放商品数量

//获取对应的cookie,转换成对应的数组
function cookieToArray(){
	if(getCookie('cartsid')){
		sidarr=getCookie('cartsid').split(',');//将cookie值通过逗号拆分为数组。
	}else{
		sidarr=[];
	}
	
	if(getCookie('cartnum')){//存放数量
		numarr=getCookie('cartnum').split(',');
	}else{
		numarr=[];
	}
}

})
