$(function(){
	$('.fullpage').fullpage({
		onLeave:function(index, nextIndex, direction){
			 
		},
		afterLoad:function( anchorLink, index ){
			
			if( index == 2 ){
			
				page2();
			}
		}
	});
	 
   //header bar click
	$('#header_mobile').click(function(){
		if($('.header-mobile-list').css('display') == "block"){
			$('.header-mobile-list').fadeOut();
		}else{
			$('.header-mobile-list').fadeIn();
		}
  });
  //page1 开场动画
  $('#person_info').animate({
  	width:"100%"
  },700,function(){
  	$('.page1-ani1').animate({opacity:1},500,function(){
  		$('.page1-ani2').animate({opacity:1},500,function(){
  			$('.page1-ani3').animate({opacity:1},500,function(){
  				$('.page1-ani4').animate({opacity:1},500,function(){
  					
  				});
  			});
  		});
  	});
  });
 //page2 开场动画
 function page2(){
 	$('.page2-deco').animate({"width":"50%"},1000);
 	var a = [80,80,70,60,60];  
	$('.page2-bar-length').map(function(i,value){
		console.log(i);
		$(value).animate({'width':a[i] + "%"},1000);
 		
 	});
 }






});

