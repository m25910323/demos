window.onload=function(){
	var h3=document.getElementsByTagName('h3');
	var div=document.getElementsByTagName('div');
	var span=document.getElementsByTagName('span');
	for(i=0;i<h3.length;i++){
		h3[i].index=i;
		h3[i].oindex=true;													//记录当前分组的开关状态
		num=0;
		h3[i].onclick=function(){
			for(j=0;j<h3.length;j++){
				h3[j].style.backgroundColor="#fff";
			}
			
			if(this.oindex){
				div[this.index].style.display="block";
				this.style.backgroundColor="orange";
				this.oindex=false;
			}else{
				div[this.index].style.display="none";
				this.oindex=true;
			}
		}
	}
	for(i=0;i<span.length;i++){
		span[i].onclick=function(){
			for(j=0;j<span.length;j++){
				span[j].style.backgroundColor="#fff";
			}
			this.style.backgroundColor="lightblue";
		}
	}
}
