
;$(function(){
	    $.ajax({
					type:'POST',
					url:'PHP/log.php',
					dateType:'json',
					async:true,
					date:{
						"id": "value"
					},
					success:function(data){
						var arr=JSON.parse(data);
						$('.log_main').css('background-image',`url(${arr[2].url})`)
					}
				});
			});
			$('.chang_text_img1').hide();
			$('.ipt_text').on('blur',function(){
				$('.chang_text_img1').hide();
			});
			$('.ipt_text').on('focus',function(){
				$('.chang_text_img1').show();
			});
			$('.chang_text_img2').hide();
			$('.ipt_password').on('blur',function(){
				$('.chang_text_img2').hide();
			});
			$('.ipt_password').on('focus',function(){
				$('.chang_text_img2').show();
});

;$(function(){
	function addCookie(key,value,days){
					var date=new Date();
					date.setDate(date.getDate()+days);
					document.cookie=key+'='+encodeURI(value)+';expires='+date;
				}
	$('#btn').on('click',function(){
					var $username=$('.ipt_text').val();
					var $password=$('.ipt_password').val();
					$.ajax({
						type:'post',
						url:'PHP/log_admin.php',
						data:{
							name:$username,
							pass:$password
						},
						success:function(data){
							if(!data){
								$('#error_msg_one').css('display','block');
								$('#password').val('');
							}else{
								addCookie('UserName',$username,7);
								location.href='index.html';
							}
						}
					})
				});
})
			