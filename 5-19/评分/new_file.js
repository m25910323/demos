window.onload=function(){
	var div=document.getElementsByTagName('div');
	var span=document.getElementsByTagName('span');
	var p=document.getElementsByTagName('p');
	var arry=["很差","较差","还行","推荐","力荐"];
	var cont=0;
	for(i=0;i<span.length;i++){
		span[i].index=i;
		function lightgrey(){
			for(i=0;i<span.length;i++){
				span[i].style.backgroundColor="lightgrey";
			}
		}
//		function change(){
//			p[0].style.display="block";
//			p[0].innerHTML=arry[this.index];
//			p[1].style.display="none";
//		}
		
		if(i<2){											//判断移入的是第几个块，如果是前2个，那么小于这个块的所有块变成灰色，如果这个块不是前两个，那么小于这个块的所有块变成橙色
			span[i].onmouseover=function(){
				if(cont==0){
					p[0].style.display="block";
					lightgrey();
					for(j=0;j<=this.index;j++){
						span[j].style.backgroundColor="gray";
					}
					p[0].innerHTML=arry[this.index];
					p[1].style.display="none";
				}
			}
		}else{
			span[i].onmouseover=function(){
				if(cont==0){
					p[0].style.display="block";
					lightgrey();
					for(j=0;j<=this.index;j++){
						span[j].style.backgroundColor="orange";
					}
					p[0].innerHTML=arry[this.index];
					p[1].style.display="none";
				}
			}
		}
		span[i].onclick=function(){
			cont++;
		}
	}
	div[0].onmouseleave=function(){
		if(cont!=1){
			lightgrey();
			p[0].style.display="none";
			p[1].style.display="block";
		}
	}
}