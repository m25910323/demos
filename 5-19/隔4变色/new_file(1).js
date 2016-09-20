window.onload=function(){
	var div=document.getElementsByClassName('small');
	for(i=0;i<div.length;i++){
		div[i].innerHTML=i;
		if(i%4==0){
			div[i].style.backgroundColor='yellow';
		}
		else if(i%4==1){
			div[i].style.backgroundColor='palegreen';
		}
		else if(i%4==2){
			div[i].style.backgroundColor='lightblue';
		}
		else{
			div[i].style.backgroundColor='lightcoral';
		}
	}
}
