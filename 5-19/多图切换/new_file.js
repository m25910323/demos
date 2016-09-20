window.onload=function(){
	//获取元素
	var pre=document.getElementsByClassName('pre');
	var next=document.getElementsByClassName('next');
	var left=document.getElementsByClassName('left');
	var right=document.getElementsByClassName('right');
	var p=document.getElementsByTagName('p');
	var num=1;  //记录左侧div图片
	var num2=1; //记录右侧div图片
	var arry=['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg'];	//左侧图片库
	var arry2=['0.jpg','2.jpg','4.jpg','6.jpg','8.jpg'];										//右侧图片库
	function onext(){																			//点击下一组，判断是否最后一张，不是的话修改图片路径和文字内容，计数加1
		if(num<arry.length){																	//是最后一张的话修改图片路径为第一张，计数重置
			left[0].style.backgroundImage="url(img/"+arry[num];
			p[0].innerHTML="这是第"+(num+1)+"张图片";
			num++;
		}else{
			left[0].style.backgroundImage="url(img/"+arry[0];
			p[0].innerHTML="这是第"+1+"张图片";
			num=1;
		}
	}
	function onext2(){
		if(num2<arry2.length){
			right[0].style.backgroundImage="url(img/"+arry2[num2];
			p[1].innerHTML="这是第"+(num2+1)+"张图片";
			num2++;
			
		}else{
			right[0].style.backgroundImage="url(img/"+arry2[0];
			p[1].innerHTML="这是第"+1+"张图片";
			num2=1;
		}
	}
	function opre(){																			//点击上一组，判断是否第一张，不是的话修改图片路径和文字内容，计数减1
		if(num>1){																				//是第一张的话修改图片路径为最后一张，计数设置为最后一张
			left[0].style.backgroundImage="url(img/"+arry[num-2];
			p[0].innerHTML="这是第"+(num-1)+"张图片";
			num--;
			
		}else if(num==1){
			left[0].style.backgroundImage="url(img/"+arry[9];
			p[0].innerHTML="这是第"+(arry.length)+"张图片";
			num=arry.length;
		}
	}
	function opre2(){
		if(num2>1){
			right[0].style.backgroundImage="url(img/"+arry2[num2-2];
			p[1].innerHTML="这是第"+(num2-1)+"张图片";
			num2--;
			
		}else{
			right[0].style.backgroundImage="url(img/"+arry2[4];
			p[1].innerHTML="这是第"+(arry2.length)+"张图片";
			num2=arry2.length;
		}
	}
	next[0].onclick=function(){																	//点击上一组下一组同时改变两个路径
		onext();
		onext2();
	}
	pre[0].onclick=function(){
		opre();
		opre2();
	}
	left[0].onclick=function(){																	//点击div只改变当前div的背景图
		onext();
	}
	right[0].onclick=function(){
		onext2();
	}
}
