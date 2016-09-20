window.onload=function(){
	var main=document.getElementsByClassName('main');
	var son=document.getElementsByClassName('son');
	var li=document.getElementsByClassName('nav');
	var timer;
	var timer2;
	for(i=0;i<li.length;i++){
		li[i].index=i;
		son[i].index=i;
		li[i].onmouseover=function(){
			for(j=0;j<li.length;j++){
				son[j].style.display="none";
			}
			son[this.index].style.display="block";
		}
		li[i].onmouseout=function(){
			i=this.index;
			clearTimeout(timer);
			timer=setTimeout(function(){
				son[i].style.display="none";
			},500)
			}
		son[i].onmouseover=function(){
			clearTimeout(timer);
		}
		son[i].onmouseleave=function(){
			j=this.index;
			timer2=setTimeout(function(){
				son[j].style.display="none";
			},500)
		}
	}
}
