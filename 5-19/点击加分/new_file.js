window.onload=function(){
	var li=document.getElementsByTagName('li');
	var ul=document.getElementsByTagName('ul');
	var hua=document.getElementById('hua');
	var timer=null;
	var isClick = false;
	document.onclick=function(){
		if( isClick ) return;
		isClick = true;
		for(i=0;i<li.length;i++){
			move(i);
		}
		mTween(hua,"width",500,1000,"linear");
		mTween(hua,"opacity",1,1000,"linear",function (){
				mTween(hua,"opacity",0,1000,"linear",function (){
					hua.style.width = 0;	
				})
		})
	}
	function move(i){
		console.log(i);
		setTimeout(function(){
			mTween(li[i],"top",-50,500,"linear");
			mTween(li[i],"opacity",-0,500,"linear",function (){
					if( i>=li.length-1 ){
						for( var j = 0; j < li.length; j++ ){
							li[j].style.top = 0;
							mTween(li[j],"opacity",1,500,"linear")
							}
						isClick = false;
					};
			});
		},100*i);
	}
//	var num=-1;
//	ul[0].onclick=function(){
//		move(num);
//		
//	}
//	function move(num){
//		num++;
//		if(num<li.length){
//			var startTime=new Date().getTime();
//			var dorution=500;
//			var begin=parseFloat(getComputedStyle(li[num]).top);
//			var cont=100-begin;
//			clearInterval(timer);
//			timer=setInterval(
//				function(){
//					var time=new Date().getTime()-startTime;
//					if(time>dorution){
//						time=dorution;
//						clearInterval(timer);
//					}
//					var value=begin+cont/dorution*time;
//					li[num].style.opacity=0;
//					li[num].style.top=value+'px';	
//					console.log(value);
//					if(value>50&&value<75){
//						move(num);
//					}
//				},30)
////		var top=getComputedStyle(li[num]).top;
//		}
//		
//	}
	
}
