window.onload=function(){
	var div=document.getElementsByTagName('div');
	var sec=document.getElementsByTagName('section');
	var num=0;
	for(i=0;i<div.length;i++){
		div[i].innerHTML=i;
	}
	sec[0].onclick=function(){
			if(num%4==0){
				div[3].style.left="300px";
				div[3].style.top="100px";
				div[4].style.left="400px";
				div[4].style.top="0px";
				num++;
			}else if(num%4==1){
				div[1].style.left="300px";
				div[1].style.top="300px";
				div[0].style.left="400px";
				div[0].style.top="400px";
				num++;
			}else if(num%4==2){
				div[3].style.left="100px";
				div[3].style.top="300px";
				div[4].style.left="0px";
				div[4].style.top="400px";
				num++;
			}else if(num%4==3){
				div[0].style.left="0px";
				div[0].style.top="0px";
				div[1].style.left="100px";
				div[1].style.top="100px";
				num++;
			}
			
	}
}