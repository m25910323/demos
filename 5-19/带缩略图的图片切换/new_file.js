window.onload=function(){
	var pic=document.getElementsByClassName('pic');
	var intro=document.getElementsByClassName('intro');
	var left=document.getElementsByClassName('left');
	var right=document.getElementsByClassName('right');
	var ul=document.getElementsByTagName('ul');
	var li=document.getElementsByTagName('li');
	var suolue=document.getElementsByClassName('suolue');
	var arry=["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"];
	var num=1;
	right[0].onclick=function(){
		if(num<arry.length){
			pic[0].style.backgroundImage="url(img/"+arry[num]+")";
			num++;
		}else{
			pic[0].style.backgroundImage="url(img/0.jpg)";
			num=1;
		}
	}
	left[0].onclick=function(){
		if(num>1){
			pic[0].style.backgroundImage="url(img/"+arry[num-2]+")";
			num--;
		}else if(num==1){
			pic[0].style.backgroundImage="url(img/"+(arry.length-1)+".jpg)";
			num=arry.length;
		}
	}
	for(i=0;i<arry.length;i++){														//设置一排小圆点
		ul[0].innerHTML+="<li></li>";
	}
	for(i=0;i<li.length;i++){
		li[i].index=i;
		li[i].onmouseover=function(){												//鼠标移入圆点改变背景色，缩略图的块显示出来，设置缩略图的路径和块的定位距离
			this.style.backgroundColor="pink";
			suolue[0].style.display="block";
			suolue[0].style.backgroundImage="url(img/"+this.index+".jpg)";
			suolue[0].style.left=80+this.index*25+"px";
		}
		li[i].onclick=function(){
			pic[0].style.backgroundImage="url(img/"+this.index+".jpg)";				//点击圆点改变轮播图的背景
		}
		li[i].onmouseout=function(){												//鼠标移出圆点改回背景色，缩略图的块隐藏，清空缩略图块的背景
			this.style.backgroundColor="orange";
			suolue[0].style.display="none";
			suolue[0].style.backgroundImage="none";
		}
	}
}
