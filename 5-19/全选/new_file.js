window.onload=function(){
	var li=document.getElementsByTagName('li');
	var inp=document.getElementsByClassName('check');
	var all=document.getElementsByClassName('all');
	var btn=document.getElementsByClassName('btn');
	var cont=0;															//记录选中状态个数
	for(i=0;i<li.length;i++){
		li[i].index=i;
		if(i%2==0){														//隔行变色
			li[i].style.backgroundColor="aliceblue";
		}else{
			li[i].style.backgroundColor="white";
		}
		li[i].onmouseover=function(){									//移入变色
			this.style.backgroundColor="lightgray";
		}
		li[i].onmouseout=function(){									//移出判断，选中改变背景色，不选中返回原来样式
			if(inp[this.index].checked){
				this.style.backgroundColor="lightgray";
			}else if(this.index%2==0){
				this.style.backgroundColor="aliceblue";
			}else{
				this.style.backgroundColor="white";
			}
		}
	}
	all[0].onclick=function(){											//全选判定，如果勾上全选，所有checkbox设置选中并设置样式，如果取消全选则还原样式
		if(this.checked){
			for(i=0;i<inp.length;i++){
				inp[i].checked=true;
				li[i].style.backgroundColor="lightgray";
				
			}
		}else{
			for(i=0;i<inp.length;i++){
				inp[i].checked=false;
				if(i%2==0){
					li[i].style.backgroundColor="aliceblue";
				}else{
					li[i].style.backgroundColor="white";
				}
				cont=0;
			}
		}
	}
	for(i=0;i<inp.length;i++){											//设置全选自动选中，点击checkbox计数，选中cont+1，取消cnnt-1；
		inp.index=i;													
		inp[i].onclick=function(){
//			for(j=0;j<inp.length;j++){
				if(this.checked==true){
					cont++;
				}
				if(this.checked==false){
					cont--;
				}
			if(cont>0){
				for(i=0;i<btn.length;i++){
					btn[i].style.color="#000";
					btn[i].style.borderColor="#000";
				}
			}else{
				for(i=0;i<btn.length;i++){
					btn[i].style.color="lightgray";
					btn[i].style.borderColor="lightgray";
				}
			}
			if(cont==inp.length){
				all[0].checked=true;
			}else{
				all[0].checked=false;
			}
		}
	}
}



