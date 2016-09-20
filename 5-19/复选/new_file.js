window.onload=function(){
	var span=document.getElementsByTagName('span');
	var cont=0;
	for(i=0;i<span.length;i++){
		span[i].index=true;													//记录当前span的开关状态
		span[i].onclick=function(){
			if(this.index){
				this.style.backgroundImage="url(img/1.png)";
				this.style.backgroundRepeat="no-repeat";
				this.style.backgroundPosition="right bottom";
				this.style.borderColor="red";
				this.index=false;
			}else{
				this.style.backgroundImage="";
				this.style.borderColor="gainsboro";
				this.index=true;
			}
		}
	}
}
