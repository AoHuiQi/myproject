;$(function(){
	            var bstop1=true;
	            var bstop2=true;
	            var bstop3=true;
				var usereg=/^1[3|4|5|8][0-9]\d{4,8}$/;
				var passreg=/^\w{6,20}$/;
				$('#username').on('blur',function(){
					var username=$(this).val();
					if(username!=''){
						if(usereg.test(username)){
							$.ajax({
								type:'post',
								url:'http://127.0.0.1/myproject/PHP/reg.php',
								data:{
									name:username,
								},
								
								success:function(d){
									if(d){
										$('.t_tag_phone').attr('src','img/error_tag.png');
										$('.warn_word').html('用户名已存在')
										bstop1=true;
									}else{
										$('.t_tag_phone').attr('src','img/right_tag.png');
							            $('.warn_word').html('')
										bstop1=false
									}
								}
							})
						}else{
							$('.t_tag_phone').attr('src','img/error_tag.png');
							$('.warn_word').html('手机号码格式错误')
							bstop1=true;
						}
					}else{
						$('.t_tag_phone').attr('src','img/error_tag.png');
						$('.warn_word').html('用户名不能为空');
						bstop1=true;
					}
				});
				$('.password_text').on('blur',function(){
					var password=$(this).val();
					if(password!=''){
						if(passreg.test(password)){
							$('.t_tag_password').attr('src','img/right_tag.png');
							$('.warn_word').html('');
							bstop2=false;
						}else{
							$('.t_tag_password').attr('src','img/error_tag.png');
							$('.warn_word').html('密码为6-20位数字、字母、下划线');
							bstop2=true;
						}
					}else{
						$('.t_tag_password').attr('src','img/error_tag.png');
						$('.warn_word').html('密码不能为空');
						bstop2=true;
					}
					$('.password_again').on('blur',function(){
					  var passagain=$(this).val();
					  if(password==passagain){
					  	$('.t_tag_again').attr('src','img/right_tag.png');
						$('.warn_word').html('');
						 bstop3=false;
					  }else{
					  	$('.t_tag_again').attr('src','img/error_tag.png');
						$('.warn_word').html('两次输入密码不一样');
						 bstop3=true;
					  }
				   });
				});
				
				
				$('form').on('submit',function(){//验证不通过无法提交的
					if(!(bstop1==false&&bstop2==false&&bstop3==false)){
						return false;//阻止按钮跳转。
					}
				});
})
