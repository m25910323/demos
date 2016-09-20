window.onload=function(){
	var sec=document.getElementById('box');
	var div=document.getElementsByTagName('div');
	var span=document.getElementsByTagName('span');
	for(i=0;i<9;i++){
		box.innerHTML=box.innerHTML+'<div></div>';
		div[i].style.height=30*(9-i)+'px';
		div[i].style.marginTop=30*i+'px';
	}
	for(i=0;i<9;i++){
		for(a=0;a<=i;a++){
			div[a].innerHTML+="<span>"+(a+1)+"*"+(i+1)+"="+(i+1)*(a+1)+"</span>";
		}
	}
}