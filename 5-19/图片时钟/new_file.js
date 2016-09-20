//window.onload=function(){
////	var timer=null;
////	var arr=["0.JPG","1.JPG","2.JPG","3.JPG","4.JPG","5.JPG","6.JPG","7.JPG","8.JPG","9.JPG"];
////	var time=document.getElementsByClassName("time");
////	var point=document.getElementsByClassName("point");
////	cont();
////	timer=setInterval(cont,1000);
////	for(i=0;i<point.length;i++){
////		point[i].style.backgroundImage="url(img/colon.JPG)";
////	}
////	function cont(){
////		var date=new Date();
////		var hours=date.getHours();
////		var minute=date.getMinutes();
////		var second=date.getSeconds();
////		var hours_left=parseInt(hours/10);
////		var hours_right=parseInt(hours%10);
////		var minute_left=parseInt(minute/10);
////		var minute_right=parseInt(minute%10);
////		var second_left=parseInt(second/10);
////		var second_right=parseInt(second%10);
////		time[0].style.backgroundImage="url(img/"+arr[hours_left];
////		time[1].style.backgroundImage="url(img/"+arr[hours_right];
////		time[2].style.backgroundImage="url(img/"+arr[minute_left];
////		time[3].style.backgroundImage="url(img/"+arr[minute_right];
////		time[4].style.backgroundImage="url(img/"+arr[second_left];
////		time[5].style.backgroundImage="url(img/"+arr[second_right];
////	}
//	var arr=["0.JPG","1.JPG","2.JPG","3.JPG","4.JPG","5.JPG","6.JPG","7.JPG","8.JPG","9.JPG"];
//	var ul=document.getElementsByTagName("ul");
//	var li=ul[5].getElementsByTagName("li");
//	var liheight=parseFloat(getComputedStyle(ul[0].getElementsByTagName("li")[0]).height);
//	for(i=0;i<ul.length;i++){
//		for(j=0;j<li.length;j++){
//			ul[i].getElementsByTagName("li")[j].style.backgroundImage="url(img/"+arr[j%10];
//		}
//	}
//	var date=new Date();
//	var time=date.getTime();
//	var H=date.getHours();
//	var M=date.getMinutes();
//	var S=date.getSeconds();
//	var hours_left=parseInt(H/10);
//	var hours_right=parseInt(H%10);
//	var minute_left=parseInt(M/10);
//	var minute_right=parseInt(M%10);
//	var second_left=parseInt(S/10);
//	var second_right=parseInt(S%10);
//	var record=zero(H)+""+zero(M)+""+zero(S);
//	console.log(record);
//	ul[0].style.top=-liheight*hours_left+"px";
//	ul[1].style.top=-liheight*hours_right+"px";
//	ul[2].style.top=-liheight*minute_left+"px";
//	ul[3].style.top=-liheight*minute_right+"px";
//	ul[4].style.top=-liheight*second_left+"px";
//	ul[5].style.top=-liheight*second_right+"px";
//	setInterval(move,1000);
//	function move(){
//		var date=new Date();
//		var H=date.getHours();
//		var M=date.getMinutes();
//		var S=date.getSeconds();
//		var newtime=zero(H)+""+zero(M)+""+zero(S);
//		var second_right=parseInt(S%10);
//		var dorution=500;
//		var begin=parseFloat(getComputedStyle(ul[5]).top);
////		var cont5=-liheight*second_right-begin;
//		var cont5=-172;
//		var startTime=new Date().getTime();
//		for(i=0;i<ul.length;i++){
//			if(newtime.charAt(i)!=record.charAt(i)){
//				(function(i){
//					var date=new Date();
//					var H=date.getHours();
//					var M=date.getMinutes();
//					var S=date.getSeconds();
//					var newtime=zero(H)+""+zero(M)+""+zero(S);
//					var second_right=parseInt(S%10);
//					var dorution=500;
//					var begin=parseFloat(getComputedStyle(ul[i]).top);
////					var cont5=-liheight*second_right-begin;
//					var startTime=new Date().getTime();
//					ul[i].top=setInterval(function(){
//						var time=new Date().getTime()-startTime;
//						if(time>dorution){
//							time=dorution;
//							clearInterval(ul[i].top);
//						}
//						var value5=begin+cont5/dorution*time;
//						ul[i].style.top=value5+'px';
//					},30)
//					record=newtime;
//					console.log(record);
//				})(i);
//			};
////				if(newtime.charAt(a)!=record.charAt(a)){
////					console.log(a);
//////					ul[i].top=setInterval(function(){
//////						var time=new Date().getTime()-startTime;
//////						if(time>dorution){
//////							time=dorution;
//////							clearInterval(ul[i].top);
//////						}
//////						var value5=begin+cont5/dorution*time;
//////						ul[i].style.top=value5+'px';
//////					},30)
////				};
////			record=newtime;
////			console.log(record);
//		}
//	}
//	function zero(i){
//		if(i<10){
//			return '0'+i;
//		}else{
//			return String(i);
//		}
//	}
//}





window.onload=function(){
	var date=new Date();
	var hour=date.getHours();
	var minute=date.getMinutes();
	var second=date.getSeconds();
	var ul=document.getElementsByTagName("ul")[0];
	var poi=ul.getElementsByClassName("poi");
	var p=ul.getElementsByTagName("p");
	var old=zero(hour)+zero(minute)+zero(second);
	var poi=ul.getElementsByClassName("poi");
	var timer=null;
	var time2=null;
	function zero(i){
		if(i<10){
			return "0"+i;
		}else{
			return String(i);
		}
	}
	console.log(old);
	for(i=0;i<p.length;i++){
		p[i].getElementsByTagName("img")[0].src="img/"+old.charAt(i)+".JPG";
		
	}
	timer=setInterval(move,1000);
	function move(){
		var date=new Date();
		var hour=date.getHours();
		var minute=date.getMinutes();
		var second=date.getSeconds();
		var newtime=zero(hour)+zero(minute)+zero(second);
		for(i=0;i<poi.length;i++){
			poi[i].src="img/nfh.png";
			(function(i){
				setTimeout(function(){
					poi[i].src="img/colon.JPG";
				},500)
			})(i);
		}
		for(i=0;i<p.length;i++){
			if(newtime.charAt(i)!==old.charAt(i)){
				p[i].getElementsByTagName("img")[1].src="img/"+newtime.charAt(i)+".JPG";
//				(function(i){
//					clearInterval(p[i]);
//					var begin=parseFloat(getComputedStyle(p[i]).top);
//					var dorution=500;
//					var startTime=new Date().getTime();
//					var cont=-172-begin;
//					p[i]=setInterval(function(){
//						var time=new Date().getTime()-startTime;
//						if(time>dorution){
//							time=dorution;
//							clearInterval(p[i]);
//						}
//						var value=begin+cont/dorution*time;
//						p[i].style.top=value+'px';
//						console.log(value);
//						if(time==dorution){
//							clearInterval(p[i]);
//							p[i] = null;
//							p[i].style.top = 0;
//							var newImg1 = p[i].getElementsByTagName("img")[0];
//							var newImg2 = p[i].getElementsByTagName("img")[1];
//							newImg1.src = 	newImg2.src;
//						}
//					},30);
//				})(i);
				(function (i){
					mTween(p[i],"top",-172,500,"linear",function (){
						p[i].style.top = 0;
						var newImg1 = p[i].getElementsByTagName("img")[0];
						var newImg2 = p[i].getElementsByTagName("img")[1];
						newImg1.src = 	newImg2.src;
					})
				})(i)
			}
			
		}
		old=newtime;
	}
}
