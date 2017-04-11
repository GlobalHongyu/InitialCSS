
	 cal.style.height=calh+'px';
	 $('.cal_box').css({height:calh+'px'})
	 $('#cal').css({position:'relative',})
	 $('#cal_img1').css({
	     position:'absolute',
	     left:'60%',top:0.2*calh+'px',
		 transformOrigin:'-50% 0',
	     transform:'rotateY(0deg)', 
         }) 
     $('#cal_img2').css({     
	     position:'absolute',
	     left:'60%',top:0.2*calh+'px',
		 transformOrigin:'-50% 0',
	     transform:'rotateY(72deg)', 
		 }) 
	$('#cal_img3').css({	  
	     position:'absolute',
	     left:'60%',top:0.2*calh+'px',
		 transformOrigin:'-50% 0',
		 transform:'rotateY(144deg)',
	      })
	$('#cal_img4').css({	  
		 position:'absolute',
	     left:'60%',top:0.2*calh+'px',
		 transformOrigin:'-50% 0',
	     transform:'rotateY(216deg)',
	     }) 
	$('#cal_img5').css({	  
		  position:'absolute',
	     left:'60%',top:0.2*calh+'px',
		 transformOrigin:'-50% 0',
	     transform:'rotateY(288deg)',
	     }) 
	 var headerback=true;
	 $('#header').mouseover(function(){
		headerback=false;
		  })
	 $('#header').mouseout(function(){
		headerback=true;
		});
	window.onload=function(){     
	var backgroundmove=document.body.scrollTop;
    var timer=setInterval(function(){
	     var backgroundover=document.body.scrollTop;
(backgroundmove==backgroundover)&&headerback?header.style.background='transparent':header.style.background='black';
		 if(backgroundmove!=backgroundover){
  $('.background_1').css({transform:'rotateZ('+parseInt(backgroundover)/1500*360+'deg)'})}
		 backgroundmove=backgroundover;
	 },500); 
	 }